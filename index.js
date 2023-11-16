/* === Imports === */
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js"

/* === Firebase Setup === */
const firebaseConfig = {
    apiKey: "AIzaSyCJWb4TNbLYdHchVSpDzXZheVnPiwouBbU",
    authDomain: "moody-4a467.firebaseapp.com",
    projectId: "moody-4a467",
    storageBucket: "moody-4a467.appspot.com",
    messagingSenderId: "327471086703",
    appId: "1:327471086703:web:c6f4f26b3f8944d0fe219a"
  };

const app = initializeApp(firebaseConfig)

/* Challenge: Console log the projectId by using app.options.projectId */
console.log(app)

/* === UI === */

/* == UI - Elements == */

const viewLoggedOut = document.getElementById("logged-out-view")
const viewLoggedIn = document.getElementById("logged-in-view")

const signInWithGoogleButtonEl = document.getElementById("sign-in-with-google-btn")

const emailInputEl = document.getElementById("email-input")
const passwordInputEl = document.getElementById("password-input")

const signInButtonEl = document.getElementById("sign-in-btn")
const createAccountButtonEl = document.getElementById("create-account-btn")

/* == UI - Event Listeners == */

signInWithGoogleButtonEl.addEventListener("click", authSignInWithGoogle)

signInButtonEl.addEventListener("click", authSignInWithEmail)
createAccountButtonEl.addEventListener("click", authCreateAccountWithEmail)

/* === Main Code === */

showLoggedOutView()

/* === Functions === */

/* = Functions - Firebase - Authentication = */

function authSignInWithGoogle() {
    console.log("Sign in with Google")
}

function authSignInWithEmail() {
    console.log("Sign in with email and password")
}

function authCreateAccountWithEmail() {
    console.log("Sign up with email and password")
}

/* == Functions - UI Functions == */

function showLoggedOutView() {
    hideElement(viewLoggedIn)
    showElement(viewLoggedOut)
}

function showLoggedInView() {
    hideElement(viewLoggedOut)
    showElement(viewLoggedIn)
}

function showElement(element) {
    element.style.display = "flex"
}

function hideElement(element) {
    element.style.display = "none"
}



