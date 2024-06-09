import React from 'react';
import style from './style.module.scss'

const Header = ({title,subtitle}) => {
  return (
    <div className={style.Header}>
       <header>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
        </header>
    </div>
  );
}

export default Header;
