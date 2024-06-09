import React from 'react';
import style from "./style.module.scss";

const Button_Type_Classes = {
  google: "googleSignIn",
  inverted: "inverted"
}

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button className={`${style.buttonContainer} ${style[Button_Type_Classes[buttonType]]}`}
      {...otherProps}>
      {children}
    </button>
  );
}

export default Button;
