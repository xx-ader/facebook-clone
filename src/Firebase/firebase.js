import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDvCxrhghw9T82uSHnb0u-w_DKqlOOee0s",
  authDomain: "fb-clone-8f160.firebaseapp.com",
  projectId: "fb-clone-8f160",
  storageBucket: "fb-clone-8f160.appspot.com",
  messagingSenderId: "698863462284",
  appId: "1:698863462284:web:6433963aaace4468f9d8a9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { provider, auth };
export default db;
