import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDCMgi2IDV8Z7HCz8Bt-Gk7R8eiN7KknDQ",
  authDomain: "food-app-40a18.firebaseapp.com",
  projectId: "food-app-40a18",
  storageBucket: "food-app-40a18.appspot.com",
  messagingSenderId: "110653069968",
  appId: "1:110653069968:web:f82231d7cadd2513c35615"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);