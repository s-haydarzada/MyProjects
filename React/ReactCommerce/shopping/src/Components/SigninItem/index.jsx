import React, { useState } from 'react';
import style from './style.module.scss';
import FormInput from '../FormInput';
import Button from '../Button/index';
import Header from '../Header/index';
import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopUp
}
  from './../../utils/Firebase/firebase';

const defaultFormFields = {
  email: "",
  password: "",
}


const SigninItem = () => {

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await signInAuthUserWithEmailAndPassword(email, password);
      console.log(response);
      resetFormFields();

    } catch (error) {
      console.log("User sign in failed", error);
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  }

  const signInWithGoogle = async () => {
    await signInWithGooglePopUp();
  }

  return (
    <div className={style.signin}>
      <Header title="Already have an account?"
        subtitle="Sign in with your email and password" />
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          name="email"
          type="text"
          value={email}
          onChange={handleChange}
        />
        <FormInput
          label="Password"
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
        />
      <div className={style.btn}>
        <Button>Sign in</Button>
        <Button buttonType="google" onClick={signInWithGoogle}>Sign in with Google</Button>
      </div>
      </form>
    </div>
  )
};


export default SigninItem;
