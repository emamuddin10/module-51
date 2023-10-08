
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import React, { createContext, useEffect, useState } from 'react';
import auth from "../firebase/_firebase_confic";


// Create a context
export const AuthContext = createContext(null);

const AuthProviders = ({ children }) => {
    
    const [user, setUser] = useState(null);
    const [loading,setLoading] = useState(true)
    const provider = new GoogleAuthProvider()

    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    } 
    
    const signInUser = (email,password )=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password);
    } 

   const signInWithGoogle = ()=>{
    setLoading(true)
         signInWithPopup(auth,provider)
         .then(result =>{
            console.log(result.user)
         })
         .catch(error=>{
            console.log(error)
         })
   }


    const logOut =()=>{
        setLoading(true)
       return signOut(auth);
    }

    useEffect(()=>{
       const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('current user value',currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return ()=> {unSubscribe()}
        
    },[])

    const authInfo = {user, createUser,signInUser,logOut,loading, signInWithGoogle};
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};


export default AuthProviders;
