import { useState,useEffect } from "react";
import initializeFirebase from "../firebase/firebase.init";
import { 
    getAuth, 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    signInWithPopup, 
    GoogleAuthProvider,
    updateProfile 
} from "firebase/auth";


// call initialize firebase app
initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


/*----------- Register User -----------*/
const registerUser = (email, password, name, navigate) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        setAuthError('');
        const newUser = {email, displayName: name};
        setUser(newUser);
        // send name to firebase after creation
        updateProfile(auth.currentUser, {
            displayName: name, 
            // photoURL: "https://example.com/jane-q-user/profile.jpg"
          }).then(() => {
            // Profile updated!
          }).catch((error) => {
            // An error occurred
          });
          
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


/*----------- Google Sign-in -----------*/ 
const signInWithGoogle = (location, navigate) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
    .then((result) => {
        setAuthError('');
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
        authError,
        signInWithGoogle
    }
}

export default useFirebase;