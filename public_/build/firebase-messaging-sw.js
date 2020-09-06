importScripts("https://www.gstatic.com/firebasejs/7.19.1/firebase-app.js")
importScripts("https://www.gstatic.com/firebasejs/7.19.1/firebase-messaging.js")

firebase.initializeApp({
    apiKey: "AIzaSyCagmrO3EYIyWzqcKj6JwaMdLd0O0FV738",
    authDomain: "messaging-app-fe33b.firebaseapp.com",
    databaseURL: "https://messaging-app-fe33b.firebaseio.com",
    projectId: "messaging-app-fe33b",
    storageBucket: "messaging-app-fe33b.appspot.com",
    messagingSenderId: "102951832883",
    appId: "1:102951832883:web:ff69554080f6053553c246"
})

firebase.messaging()

