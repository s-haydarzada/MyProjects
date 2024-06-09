import { initializeApp } from "firebase/app";
import {
    getAuth,
    GoogleAuthProvider,
    signInWithRedirect,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    onAuthStateChanged
} from "firebase/auth"
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyASYrtP9ltHhrBzMD0j5lsHDhFosT6ERDk",
    authDomain: "ecommerce-1af64.firebaseapp.com",
    projectId: "ecommerce-1af64",
    storageBucket: "ecommerce-1af64.appspot.com",
    messagingSenderId: "1026238744956",
    appId: "1:1026238744956:web:f567b9e77e79318f79bcf9"
};

initializeApp(firebaseConfig);

export const db = getFirestore();

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();

export const signInWithGooglePopUp=async()=>{
    await signInWithPopup(auth,googleProvider);
}

export const createUserDocumentFromAuth = async (userAuth, additionalInformation) => {
    const UserDocRef = doc(db, "users", userAuth.uid);

    const userSnapShot = await getDoc(UserDocRef);
    console.log(userSnapShot.exists());
    if (!userSnapShot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(UserDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            })
        } catch (error) {
            console.log("error while creating the user doc ref", error.message);
        }
    }
    return UserDocRef;

}

export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (email,password) => {
    if(!email || !password) return;
return await signInWithEmailAndPassword(auth,email,password)
}

export const signOutUser=async()=> await signOut(auth);

export const onAuthStateChangedListner=(callback)=>onAuthStateChanged(auth,callback)