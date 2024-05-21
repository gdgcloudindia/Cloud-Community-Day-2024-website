import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/performance";
import "firebase/messaging";
// import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyALP2-nm-GIw0QVPyRZm3UfzT5A4RtXLj8",
  authDomain: "cloud-community-days-2024.firebaseapp.com",
  projectId: "cloud-community-days-2024",
  storageBucket: "cloud-community-days-2024.appspot.com",
  messagingSenderId: "711088088473",
  appId: "1:711088088473:web:420a57748e6ab3f2471f08",
  measurementId: "G-BXS8KC20J9"
};

const app = firebase.initializeApp(firebaseConfig);
firebase
  .firestore()
  .enablePersistence({ synchronizeTabs: !0 })
  .catch(() => {
    console.warn("DB offline support not available");
  });

// const analytics = getAnalytics(app);

export default {
  firestore: firebase.firestore(),
  auth: firebase.auth(),
  firebase: firebase,
  notificationSupported: firebase.messaging.isSupported(),
  messaging: firebase.messaging.isSupported() ? firebase.messaging() : null,
  // analytics: analytics
};
