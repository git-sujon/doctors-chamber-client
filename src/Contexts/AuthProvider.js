import React, { createContext } from 'react';
import { useState } from 'react';
import app from '../Firebase/Firebase.config';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";



export const AuthContext= createContext()
const auth= getAuth(app)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState({displayName: 'Sujon'})


    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth)
    }

    const authInfo={
        user,
        userLogin
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;