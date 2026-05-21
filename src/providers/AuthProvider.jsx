import axios from "axios";

import {
  createContext,
  useEffect,
  useState,
} from "react";

import {
  getAuth,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";

import app from "../firebase/firebase.config";

export const AuthContext =
  createContext(null);

const auth = getAuth(app);

const googleProvider =
  new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

  const [user, setUser] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  // register
  const createUser = (
    email,
    password
  ) => {

    setLoading(true);

    return createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
  };

  // login
  const loginUser = (
    email,
    password
  ) => {

    setLoading(true);

    return signInWithEmailAndPassword(
      auth,
      email,
      password
    );
  };

  // google login
  const googleLogin = () => {

    setLoading(true);

    return signInWithPopup(
      auth,
      googleProvider
    );
  };

  // logout
  const logoutUser = () => {

    setLoading(true);

    return signOut(auth);
  };

  // update profile
  const updateUserProfile = (
    updatedData
  ) => {

    return updateProfile(
      auth.currentUser,
      updatedData
    );
  };

  // observer
  useEffect(() => {

    const unsubscribe =
      onAuthStateChanged(
  auth,
  async (currentUser) => {

    setUser(currentUser);

    setLoading(true);

    if (currentUser?.email) {

      const userInfo = {
        email: currentUser.email,
      };

      await axios.post(
        "https://docappoint-server-hz5a.onrender.com/jwt",
        userInfo,
        {
          withCredentials: true,
        }
      );

    } else {

      await axios.post(
        "https://docappoint-server-hz5a.onrender.com/logout",
        {},
        {
          withCredentials: true,
        }
      );
    }

    setLoading(false);
  }
);

    return () => {
      unsubscribe();
    };

  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    loginUser,
    googleLogin,
    logoutUser,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider
      value={authInfo}
    >

      {children}

    </AuthContext.Provider>
  );
};

export default AuthProvider;