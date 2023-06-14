import React, { createContext, useEffect, useState } from 'react'
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config'
import { getRole } from '../API/auth';

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const [role, setRole] = useState(null)
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        if (user) {
            getRole(user?.email)
            .then(data => setRole(data.role))
        }
    }, [user])

    const createUser = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const loginUser = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleLogin = () => {
        setLoader(true);
        return signInWithPopup(auth, googleProvider);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {

            setUser(currentUser)
            setLoader(false)
            if (currentUser) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                const uid = currentUser.uid;
            } else {
                // User is signed out
            }
        });
        return () => {
            return unsubscribe();
        }

    }, [])

    const updateUser = (name, photo) => {
        setLoader(true);
        return updateProfile(auth.currentUser, { displayName: name, photoURL: photo });
    }

    const logOut = () => {
        return signOut(auth);
    }
    const authInfo = {
        createUser,
        loginUser,
        googleLogin,
        updateUser,
        signOut,
        logOut,
        user,
        loader,
        role
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;