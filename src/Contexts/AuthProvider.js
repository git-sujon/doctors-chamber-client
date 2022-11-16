import React, { createContext } from 'react';
import { useState } from 'react';
import app from '../Firebase/Firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useEffect } from 'react';



export const AuthContext= createContext()
const auth= getAuth(app)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState({displayName: 'Sujon'})


    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth)
    }

    const userSignUp =(email, password) => {
        return createUserWithEmailAndPassword( auth, email, password)
    }


    const logInWithPrvider =(provider) => {
        return signInWithPopup(auth, provider)
    }

    const logOut = () => {
        return signOut(auth)
    }



    useEffect(()=>{
        const unSubscribe= onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })
        return ()=> {
            unSubscribe()
        }

    }, [])


    const authInfo={
        user,
        userLogin,
        userSignUp,
        logInWithPrvider,
        logOut

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;