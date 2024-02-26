import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "../firebase/config";

import { login, logout } from "../store/auth";

export const useCheckAuth = () => {
  const dispach = useDispatch();
  const { status } = useSelector((state) => state.auth);

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async (user) => {
      if (!user) return dispach(logout());
      const { uid, photoURL, displayName, email } = user;
      dispach(login({ uid, photoURL, displayName, email }));
    });
  }, []);
  return {
    status,
  };
};
