import React, { useState } from 'react';
import style from './style.module.scss';
import Header from './../../Components/Header/index';
import FormInput from '../../Components/FormInput';
import Button from './../../Components/Button/index';
import {
    createAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth
} from './../../utils/Firebase/firebase';


const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
}

const SignupItem = () => {
    const [formFields, setFormFiealds] = useState(defaultFormFields);

    const { displayName, email, password, confirmPassword } = formFields;


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("password do not match");
            return;
        }
        try {
            const { user } = await createAuthUserWithEmailAndPassword(
                email,
                password
            );
            await createUserDocumentFromAuth(user, { displayName });
        } catch (error) {
            console.log("error appeared", error);
            if (error.code === "auth/email-already-in-use") {
                alert("Email already in use");
                return;
            }
        }
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormFiealds({ ...formFields, [name]: value });
    }




    return (
        <div className={style.signupItem}>
            <Header title="Don't have an account?"
                subtitle="Sign up with your email and password" />
            <form onSubmit={handleSubmit}>

                <FormInput
                    label="Display Name"
                    name="displayName"
                    type="text"
                    value={displayName}
                    onChange={handleChange}
                />
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
                <FormInput
                    label="Confirm Password"
                    name="confirmPassword"
                    type="password"
                    value={confirmPassword}
                    onChange={handleChange}
                />
                <Button>Sign up</Button>
            </form>
        </div>
    );
}

export default SignupItem;
