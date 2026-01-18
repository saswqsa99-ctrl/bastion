
// Messages
const dbMessages = {
    en: {
        success: "Property Added Successfully!",
        error: "Error adding property: ",
        loginRequired: "You must be logged in to add a property.",
        fillRequired: "Please fill all required fields (*)."
    },
    ar: {
        success: "تم إضافة العقار بنجاح!",
        error: "خطأ في إضافة العقار: ",
        loginRequired: "يجب تسجيل الدخول لإضافة عقار.",
        fillRequired: "يرجى ملء جميع الحقول المطلوبة (*)."
    },
    tr: {
        success: "Mülk başarıyla eklendi!",
        error: "Mülk eklenirken hata: ",
        loginRequired: "Mülk eklemek için giriş yapmalısınız.",
        fillRequired: "Lütfen zorunlu alanları doldurun (*)."
    }
};

function getDbMessage(key) {
    const lang = document.documentElement.lang || 'en';
    const isAr = lang === 'ar' || lang.includes('ar');
    const isTr = lang === 'tr' || lang.includes('tr');
    const t = isAr ? dbMessages.ar : (isTr ? dbMessages.tr : dbMessages.en);
    return t[key];
}

// Global DB Function (Matches User Request Signature + Extended) 
// Can be called as addProperty(title, type, status) OR addProperty(fullDataObject)
window.addProperty = function (titleOrData, type, status) {
    // Check Auth
    const user = auth.currentUser;
    if (!user) {
        alert(getDbMessage('loginRequired'));
        return;
    }

    let propertyData = {};

    if (typeof titleOrData === 'object') {
        // Full Object passed
        propertyData = titleOrData;
    } else {
        // Simple arguments passed (as per user snippet)
        propertyData = {
            title: titleOrData,
            type: type,
            status: status
        };
    }

    // Add Metadata
    propertyData.ownerId = user.uid;
    propertyData.ownerEmail = user.email;
    propertyData.createdAt = firebase.firestore.FieldValue.serverTimestamp();

    // Add to Firestore
    db.collection("properties").add(propertyData)
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            alert(getDbMessage('success'));
            // Reset form if exists
            const form = document.getElementById('add-property-form');
            if (form) form.reset();
        })
        .catch((err) => {
            console.error("Error adding document: ", err);
            alert(getDbMessage('error') + err.message);
        });
};

document.addEventListener('DOMContentLoaded', function () {
    const addPropertyForm = document.getElementById('add-property-form');

    if (addPropertyForm) {
        addPropertyForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Get Form Data
            const title = document.getElementById('property-title').value;
            const description = document.getElementById('property-description').value;
            const type = document.getElementById('select-type').value;
            const status = document.getElementById('select-status').value;
            const location = document.getElementById('location').value;
            const price = document.getElementById('Sale-Rent-Price').value;
            const propertyId = document.getElementById('Property-ID').value;

            // Optional fields
            const bedrooms = document.getElementById('Bedrooms').value;
            const bathrooms = document.getElementById('Bathrooms').value;
            const floors = document.getElementById('Floors').value;
            const garages = document.getElementById('Garages').value;
            const area = document.getElementById('Area').value;
            const size = document.getElementById('Size').value;
            const videoUrl = document.getElementById('Video-URL').value;

            // Validation
            if (!title || !description || !price || !propertyId) {
                alert(getDbMessage('fillRequired'));
                return;
            }

            // Prepare Data Object
            const fullData = {
                title, description, type, status, location, price, propertyId,
                bedrooms, bathrooms, floors, garages, area, size, videoUrl
            };

            // Call Global Function
            window.addProperty(fullData);
        });
    }
});
