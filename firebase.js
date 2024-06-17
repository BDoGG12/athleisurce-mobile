// firebase.js
import { firebase } from '@react-native-firebase/app';
import '@react-native-firebase/auth';
import '@react-native-firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA-O0wX5Vl7ZMoiQ87QKFVB6EzOP7BJuHI",
  authDomain: "athleisurce-mobile.firebaseapp.com",
  projectId: "athleisurce-mobile",
  storageBucket: "athleisurce-mobile.appspot.com",
  messagingSenderId: "1082666244524",
  appId: "1:1082666244524:web:cb2349990c9291dc3e8209",
  measurementId: "G-S48DEY350K"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
