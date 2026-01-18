// Firebase Config using Compat API
const firebaseConfig = {
    apiKey: "AIzaSyDv4gl4pZxFjx2geUEDTkvcvimWVXEAd4k",
    authDomain: "baab-ddbd8.firebaseapp.com",
    projectId: "baab-ddbd8",
    storageBucket: "baab-ddbd8.firebasestorage.app",
    messagingSenderId: "598723890672",
    appId: "1:598723890672:web:71df332ddc1557998ce135",
    measurementId: "G-JRTM2RGBG8"
};

// Initialize Firebase globally
firebase.initializeApp(firebaseConfig);
const analytics = firebase.analytics();
const auth = firebase.auth();
const db = firebase.firestore();

console.log("Firebase Initialized Successfully (Compat Mode)");
