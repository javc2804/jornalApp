import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleAuthProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleAuthProvider);
    // const credentials = GoogleAuthProvider.credentialFromResult(result);
    const { displayName, email, photoURL, uid } = result.user;
    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid,
    };
  } catch (error) {
    return {
      ok: false,
      errorMesaage: error.message,
    };
  }
};

export const registerUserEmailPassword = async (
  email,
  password,
  displayName
) => {
  try {
    const resp = await createUserWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );
    const { email: correo, uid, displayName: name, photoURL } = resp.user;
    await updateProfile(FirebaseAuth.currentUser, {
      displayName: displayName,
    });
    return {
      ok: true,
      displayName: displayName,
      email: correo,
      uid,
      photoURL,
    };
  } catch (error) {
    return {
      ok: false,
      errorMessage: error.message,
    };
  }
};

export const loginWithEmailAndPassword = async (email, password) => {
  try {
    const {
      user: { uid, displayName, email: correo, photoURL },
    } = await signInWithEmailAndPassword(FirebaseAuth, email, password);

    return {
      ok: true,
      uid,
      displayName,
      email: correo,
      photoURL,
    };
  } catch (error) {
    return {
      ok: false,
      errorMessage: error.message,
    };
  }
};

export const logoutFirebase = async () => {
  return await FirebaseAuth.signOut();
};
