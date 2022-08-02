import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyD7Ndsmuni-XQmEkBmx11Ut5GpGXH1IxjE",
    authDomain: "reactjs-dts-final.firebaseapp.com",
    projectId: "reactjs-dts-final",
    storageBucket: "reactjs-dts-final.appspot.com",
    messagingSenderId: "3478775101",
    appId: "1:3478775101:web:f4a9835c0228abd7955154"
};

// Initialize Firebase
const initializeAuthentication = () => {
    return initializeApp(firebaseConfig)
}

export default initializeAuthentication;