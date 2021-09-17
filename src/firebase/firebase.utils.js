import firebase from 'firebase/compat/app';
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import 'firebase/auth';
import 'firebase/firestore';

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

const auth = getAuth();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => signInWithPopup(auth, provider)
.then((result) => {
  // This gives you a Google Access Token. You can use it to access the Google API.
  const credential = GoogleAuthProvider.credentialFromResult(result);
  const token = credential.accessToken;
  // The signed-in user info.
  const user = result.user;
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

export default firebase;
