// controllers/authController.js
import { firebase } from '../firebase';

export const signUp = async (email, password) => {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const signIn = async (email, password) => {
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
};
