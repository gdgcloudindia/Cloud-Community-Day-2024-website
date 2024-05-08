import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/performance";
import "firebase/messaging";
// import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyA8XGXfEDM7W51onQWX9hrB1SBlLKx9nrk",
  authDomain: "cloud-community-day-2023.firebaseapp.com",
  projectId: "cloud-community-day-2023",
  storageBucket: "cloud-community-day-2023.appspot.com",
  messagingSenderId: "801834964117",
  appId: "1:801834964117:web:f1b5e599a334ba787e379c"
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
