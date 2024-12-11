/* eslint-disable react/prop-types */
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth/web-extension";
import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const provider = new GoogleAuthProvider();

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const Login = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  const SignOut = () => {
    setLoading(true)
    return signOut(auth);
  };

  const google = () => {
    setLoading(true)
    return signInWithPopup(auth, provider);
  };

  useEffect(() => {
    const unScribe = onAuthStateChanged(auth, currentUser => {
      console.log('user in the auth',currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      return unScribe();
    };
  }, []);

  const authInfo = {
    createUser,
    Login,
    SignOut,
    google,
    user,
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
 