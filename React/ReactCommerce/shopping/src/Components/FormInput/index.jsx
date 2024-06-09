import React from 'react';
import style from './style.module.scss';

const FormInput = ({label,...otherProps}) => {
  return (
    <div className={style.group}>
       <input className={style.forminput}
       {...otherProps}
       />
       <label className={otherProps.value.length? `${style.formInputLabel} ${style.shrink}`:style.formInputLabel}>{label}</label>
    </div>
  );
}

export default FormInput;
