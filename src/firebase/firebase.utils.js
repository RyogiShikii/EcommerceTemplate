import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { collection, setDoc, doc, getDoc, writeBatch } from "firebase/firestore"; 

const firebaseConfig = {
    apiKey: "AIzaSyC-xUtpYJQq2NTAoGvF5EUJpY4WkWR5XCk",
    authDomain: "auth-c4610.firebaseapp.com",
    databaseURL: "https://auth-c4610-default-rtdb.firebaseio.com",
    projectId: "auth-c4610",
    storageBucket: "auth-c4610.appspot.com",
    messagingSenderId: "667086005213",
    appId: "1:667086005213:web:7a0ef0ed407aa43569cc34",
    measurementId: "G-VRX2BG2ZWJ"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();
export const auth = getAuth();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => signInWithPopup(auth, provider)
.then((result) => {
  // This gives you a Google Access Token. You can use it to access the Google API.
  //const credential = GoogleAuthProvider.credentialFromResult(result);
  //const token = credential.accessToken;
  // The signed-in user info.
  //const user = result.user;
  // ...
}).catch((error) => {
  // Handle Errors here.
  const errorCode = error.code;
  const errorMessage = error.message;
  // The email of the user's account used.
  const email = error.email;
  // The AuthCredential type that was used.
  const credential = GoogleAuthProvider.credentialFromError(error);
  // ...
});

export const addDataIntoFirebase = async (collectionId, data) => {
  const collectionRef = await collection(db,collectionId);
  const batch = writeBatch(db);

  data.forEach(object => {
    const docRef = doc(collectionRef,object.title.toLowercase());
    batch.set(docRef, object)
  })
}

export const createUserProfileDocument = async (authUser, otherData) => {
  if(!authUser) {
    //console.log('failed at first');
    return;
  };

  const userRef = await doc(db,'users',authUser.uid);
  const snapShot = await getDoc(userRef);
  //console.log(snapShot.exists());

  if(!snapShot.exists()){
    const {displayName, email} = authUser;
    const createdAt = new Date();

    try{
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...otherData
      });
    }catch(error){
      console.log('error creating user', error.message);
    }
  }

  //console.log(userRef);
  return userRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;

  return await createUserWithEmailAndPassword(auth,email,password);
}

export const userSignInWithEmailAndPassword = async (email,password) => {
  if(!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
}

export const onAuthStateChangedListener = async (callback) => {
  await onAuthStateChanged(auth,callback)
}