// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { Analytics, getAnalytics } from "firebase/analytics";
import { Auth, connectAuthEmulator, getAuth } from "firebase/auth";
import {
  connectStorageEmulator,
  FirebaseStorage,
  getStorage,
} from "firebase/storage";
import {
  getFirestore,
  connectFirestoreEmulator,
  Firestore,
} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const currentApps = getApps();
let auth: Auth;
let storage: FirebaseStorage;
let analytics: Analytics;
let db: Firestore;

// Condition to not create multiple instance everytime we call auth, storage ...
if (!currentApps.length) {
  const app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  storage = getStorage(app);
  analytics = getAnalytics(app);
  db = getFirestore(app);
} else {
  const app = currentApps[0];
  auth = getAuth(app);
  storage = getStorage(app);
  analytics = getAnalytics(app);
  db = getFirestore(app);
}

// Use emulators if enabled
if (process.env.NEXT_PUBLIC_USE_FIREBASE_EMULATORS === "true") {
  console.log("Using Firebase emulators...");
  connectAuthEmulator(auth, "http://localhost:9099");
  connectFirestoreEmulator(db, "localhost", 8080);
  connectStorageEmulator(storage, "localhost", 9199);
}

export { auth, storage, analytics, db };
