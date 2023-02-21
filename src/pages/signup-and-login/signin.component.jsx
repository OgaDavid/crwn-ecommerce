import React, { useState } from "react";
import { auth, googleProvider } from "../../firebase/firebase.utils";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import "./signin.styles.scss";

const SignIn = () => {
  const [formInput, setFormInput] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormInput((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setFormInput({ email: "", password: "" });
  }

  console.log(auth?.currentUser?.email);

  //   sign out
  const signOut = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

  //   sign in with google
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };

  //   sign in with email and password
  const signInWithEmailAndPassword = async () => {
    try {
      await createUserWithEmailAndPassword(
        auth,
        formInput.email,
        formInput.password
      );
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password.</span>

      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          name="email"
          type="email"
          value={formInput.email}
          required
        />
        <label htmlFor="email">Email</label>
        <input
          onChange={handleChange}
          name="password"
          type="password"
          value={formInput.password}
        />
        <label htmlFor="password">Password</label>
        <button onClick={signInWithEmailAndPassword} type="submit">
          Sign in
        </button>
      </form>
      <button onClick={signInWithGoogle}>Sign in with google</button>
      <button onClick={signOut}>Sign out</button>
    </div>
  );
};

export default SignIn;
