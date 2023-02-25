import React, { useState } from "react";
import { auth, googleProvider } from "../../firebase/firebase.utils";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import "./sign-in.styles.scss";
import CustomButton from "../../components/custom-button/custom-button.component";
import FormInput from "../../components/form-input/form-input.component";

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

  // console.log(auth?.currentUser?.email);

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
        <FormInput
          handleChange={handleChange}
          name="email"
          type="email"
          value={formInput.email}
          required
          label="email"
        />
        <FormInput
          handleChange={handleChange}
          name="password"
          type="password"
          value={formInput.password}
          label="password"
        />
        <div className="buttons">
          <CustomButton onClick={signInWithEmailAndPassword} type="submit">
            Sign in
          </CustomButton>
          <CustomButton type="submit" onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
