import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyBHg1ywubNRy25b3SW2_54yTzZJnufyFaw",
    authDomain: "quiz-app-bc10d.firebaseapp.com",
    databaseURL: "https://quiz-app-bc10d.firebaseio.com",
    projectId: "quiz-app-bc10d",
    storageBucket: "quiz-app-bc10d.appspot.com",
    messagingSenderId: "280581576526",
    appId: "1:280581576526:web:853650799bc6de596eb01f"
}

firebase.initializeApp(config)

export default firebase