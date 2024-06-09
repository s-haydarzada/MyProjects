import React from 'react';
import style from './style.module.scss'
import Category from '../Category';

const Directory = ({categories}) => {
 
  return (
    <div className={style.directory}>
      {
        categories?.map((value)=>(
            <Category value={value} key={value.id}/>
        ))
      }
    </div>
  );
}

export default Directory;
