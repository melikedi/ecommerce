import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD9At2hwief4MxlcR1SjeIlPbJeG4V8LuU",
    authDomain: "udmy-db.firebaseapp.com",
    databaseURL: "https://udmy-db.firebaseio.com",
    projectId: "udmy-db",
    storageBucket: "udmy-db.appspot.com",
    messagingSenderId: "761277310509",
    appId: "1:761277310509:web:9fc2fc0636dc211d61faa4",
    measurementId: "G-FB2VT3HP85"
  };


export const createUserProfileDocument = async(userAuth, additionalData) => {
  if(!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    console.log(createdAt);
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }
    catch (error) {
      console.log('error creating user',error.message);
    }
  }
  
  return userRef;
}

  firebase.initializeApp(config);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export default firebase;



