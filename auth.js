
// Messages Object (Global)
const authMessages = {
    en: {
        loginSuccess: "Login Successful!",
        signupSuccess: "Account Created Successfully!",
        logoutSuccess: "Logged Out",
        error: "Error: ",
        fillFields: "Please fill all fields"
    },
    ar: {
        loginSuccess: "تم تسجيل الدخول بنجاح!",
        signupSuccess: "تم إنشاء الحساب بنجاح!",
        logoutSuccess: "تم تسجيل الخروج",
        error: "خطأ: ",
        fillFields: "يرجى ملء جميع الحقول"
    },
    tr: {
        loginSuccess: "Giriş Başarılı!",
        signupSuccess: "Hesap Başarıyla Oluşturuldu!",
        logoutSuccess: "Çıkış Yapıldı",
        error: "Hata: ",
        fillFields: "Lütfen tüm alanları doldurun"
    }
};

function getAuthMessage(key) {
    const lang = document.documentElement.lang || 'en';
    const isAr = lang === 'ar' || lang.includes('ar');
    const isTr = lang === 'tr' || lang.includes('tr');
    const t = isAr ? authMessages.ar : (isTr ? authMessages.tr : authMessages.en);
    return t[key];
}

// Global Auth Functions
window.signup = function (email, password) {
    if (!email || !password) {
        alert(getAuthMessage('fillFields'));
        return;
    }
    auth.createUserWithEmailAndPassword(email, password)
        .then(() => {
            alert(getAuthMessage('signupSuccess'));
            // Close modal if jQuery exists
            if (window.jQuery && window.jQuery('#signupModule').length) {
                window.jQuery('#signupModule').modal('hide');
            }
        })
        .catch(err => alert(getAuthMessage('error') + err.message));
};

window.login = function (email, password) {
    if (!email || !password) {
        alert(getAuthMessage('fillFields'));
        return;
    }
    auth.signInWithEmailAndPassword(email, password)
        .then(() => {
            alert(getAuthMessage('loginSuccess'));
            if (window.jQuery && window.jQuery('#signupModule').length) {
                window.jQuery('#signupModule').modal('hide');
            }
        })
        .catch(err => alert(getAuthMessage('error') + err.message));
};

window.logout = function () {
    auth.signOut().then(() => {
        alert(getAuthMessage('logoutSuccess'));
        window.location.reload();
    });
};

// UI & Event Listeners
document.addEventListener('DOMContentLoaded', function () {
    // Auth UI Elements
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const loginModuleBtn = document.querySelector('.module-login .btn-popup');

    // Determine Language for UI Updates
    const lang = document.documentElement.lang || 'en';
    const isAr = lang === 'ar' || lang.includes('ar');
    const isTr = lang === 'tr' || lang.includes('tr');

    // Monitor Auth State
    if (auth) {
        auth.onAuthStateChanged(user => {
            if (user) {
                console.log("User logged in:", user.email);
                if (loginModuleBtn) {
                    loginModuleBtn.textContent = isAr ? "حسابي" : (isTr ? "Hesabım" : "My Account");
                    loginModuleBtn.removeAttribute("data-toggle");

                    // Handle relative path for Profile Page
                    const currentPath = window.location.pathname;
                    if (currentPath.includes('properties/') || currentPath.includes('user/') || currentPath.includes('pages/')) {
                        loginModuleBtn.href = "../user/user-profile.html";
                    } else {
                        loginModuleBtn.href = "user/user-profile.html";
                    }

                    // Create Logout Button if not exists
                    if (!document.getElementById('dynamic-logout-btn')) {
                        const logoutLink = document.createElement('a');
                        logoutLink.id = 'dynamic-logout-btn';
                        logoutLink.href = "#";
                        logoutLink.className = "btn";
                        logoutLink.style.marginLeft = "10px";
                        logoutLink.innerHTML = '<i class="fa fa-sign-out"></i>';
                        logoutLink.onclick = (e) => {
                            e.preventDefault();
                            window.logout(); // Call global function
                        };
                        loginModuleBtn.parentNode.appendChild(logoutLink);
                    }
                }
            } else {
                console.log("User logged out");
                if (loginModuleBtn) {
                    loginModuleBtn.textContent = isAr ? "تسجيل الدخول" : (isTr ? "Giriş Yap" : "Login");
                    loginModuleBtn.setAttribute("data-toggle", "modal");
                    loginModuleBtn.href = "#";
                    const dynLogout = document.getElementById('dynamic-logout-btn');
                    if (dynLogout) dynLogout.remove();
                }
            }
        });
    }

    // Attach Listeners to Forms (Calling Global Functions)
    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;
            window.login(email, password);
        });
    }

    if (signupForm) {
        signupForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const email = document.getElementById('register-email').value;
            const password = document.getElementById('register-password').value;
            window.signup(email, password);
        });
    }
});
