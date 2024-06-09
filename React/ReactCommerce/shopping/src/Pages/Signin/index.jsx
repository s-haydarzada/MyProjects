import React, { useEffect } from 'react';
import style from './style.module.scss';
import {
  createUserDocumentFromAuth,
  auth,
} from "../../utils/Firebase/firebase";
import { getRedirectResult } from 'firebase/auth';
import SigninItem from '../../Components/SigninItem';
import SignupItem from '../../Components/SignupItem';

const SignIn = () => {


  useEffect(() => {
    const _getRedirectResult = async () => {
      const res = await getRedirectResult(auth);
      if (res) await createUserDocumentFromAuth(res.user)
    };
    _getRedirectResult();
  }, []);


  return (
    <div className={style.signIn}>
      <SigninItem />
      <SignupItem />
    </div>
  );
}

export default SignIn;
