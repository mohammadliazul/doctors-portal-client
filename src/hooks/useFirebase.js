import { useState,useEffect } from "react";
import initializeFirebase from "../firebase/firebase.init";
import { 
    getAuth, 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from "firebase/auth";


// call initialize firebase app
initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    
    const auth = getAuth();


/*----------- Register User -----------*/
const registerUser = (email, password, navigate) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        setAuthError('');
        navigate('/');
    })
    .catch((error) => {
        setAuthError(error.message);
    })
    .finally(() => setIsLoading(false));
}


/*----------- Login with Email and Password -----------*/ 
const loginUser = (email, password, location, navigate) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
            setAuthError('');
            const destination = location?.state?.from || '/';
            navigate(destination);
        })
        .catch((error) => {
            setAuthError(error.message);
        })
        .finally(() => setIsLoading(false));
}


/*----------- User Observed when Auth State Changed -----------*/ 
useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user);
        } else {
            setUser({});
        }
        setIsLoading(false);
      });
      return () => unsubscribe;
},[auth])





/*----------- Log Out -----------*/
const logOut = () => {
    setIsLoading(true);
    signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      })
      .finally(() => setIsLoading(false));
}


    return {
        user,
        isLoading,
        registerUser,
        loginUser,
        logOut,
        authError
    }
}

export default useFirebase;