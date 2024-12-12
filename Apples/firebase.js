  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyC5hULFWtAdYJTO43nVkiFQCROztvPpZUQ",
    authDomain: "i210-cruz.firebaseapp.com",
    projectId: "i210-cruz",
    storageBucket: "i210-cruz.firebasestorage.app",
    messagingSenderId: "797346620672",
    appId: "1:797346620672:web:ecd02aaadb8e9ef1b37fe5",
    measurementId: "G-8PZG5F0WKS"
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
