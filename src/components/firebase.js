import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getDatabase } from "firebase/database"
const firebaseConfig = {
  apiKey: "AIzaSyCMvgRWhA48cBt6BzkBPGvQxH020-2b384",
  authDomain: "project-dd3e5.firebaseapp.com",
  projectId: "project-dd3e5",
  storageBucket: "project-dd3e5.appspot.com",
  messagingSenderId: "6159872496",
  appId: "1:6159872496:web:cb9ab6e19edfacedb42d35",
  measurementId: "G-BLPM53GHYH"
};
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const database = getDatabase(app);
