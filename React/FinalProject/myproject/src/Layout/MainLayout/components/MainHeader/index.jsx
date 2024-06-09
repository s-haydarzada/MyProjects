import React from 'react';
import ContactInfo from '../ContactInfo';
import Navbar from '../Navbar';

const MainHeader = () => {
  return (
    <div className='flex flex-col justify-between items-center h-full'>
      <ContactInfo/>
      <Navbar/>
    </div>
  );
}

export default MainHeader;
