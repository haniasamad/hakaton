
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
const firebaseConfig = {
    apiKey: "AIzaSyBrobcKkmWlHVbYtF7YI7XrYn3UDfJewOc",
    authDomain: "pass-ac3a9.firebaseapp.com",
    projectId: "pass-ac3a9",
    storageBucket: "pass-ac3a9.firebasestorage.app",
    messagingSenderId: "651600632119",
    appId: "1:651600632119:web:70cd2c2a8c8edf86ce62b2",
    measurementId: "G-S4XY4C5W8C"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

window.createAccount = () => {
    console.log("kashna");

    let Fname = document.getElementById("Fname").value
    let Lname = document.getElementById("Lname").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value

    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            window.location.href=("index.html")
            const user = userCredential.user;
            console.log(user);

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(error);

        })
};
