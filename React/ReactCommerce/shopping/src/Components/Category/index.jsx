import React from 'react';
import style from './style.module.scss';

const Category = ({value}) => {
  return (
   <>
   <div className={style.container}>
        <div className={style.bgImg} style={{backgroundImage:`url(${value.imageUrl})`}}></div>
        <div className={style.title}>
          <h2 className={style.name}>{value.title}</h2>
          <p>Shop Now</p>
        </div>
      </div>
   </>
  );
}

export default Category;