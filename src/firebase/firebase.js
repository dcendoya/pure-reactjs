import firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp(
    {
        apiKey: "AIzaSyDx2QmXb03c_y4ucdnmZ6oXx0IBysxgjzE",
        authDomain: "coderhouse-ecommerce-377fa.firebaseapp.com",
        projectId: "coderhouse-ecommerce-377fa",
        storageBucket: "coderhouse-ecommerce-377fa.appspot.com",
        messagingSenderId: "4534625809",
        appId: "1:4534625809:web:44e497a07451405284b3b0"
    }
);
export function getFirebase(){
    return app;
}
export function getFirestore(){
    return firebase.firestore(app);
}
