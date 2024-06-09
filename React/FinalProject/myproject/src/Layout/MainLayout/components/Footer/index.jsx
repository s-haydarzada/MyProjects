import React from 'react'
import FooterItem from '../FooterItem'
import { Link } from 'react-router-dom';
import {footerlogo} from "../../../../../src/assets/Images/index"

const Footer = () => {
  return <footer className='bg-gray-900 text-white'>
    <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:px-8 py-10 ml-5 mt-0'>
        <FooterItem/>
    </div>
    <div className='md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7 shadow-lg'>
        <div>
            <p className='text-sm tracking-wider'>Copyright © 2021 <Link to={"https://hasthemes.com/"}><span className='text-[#8a8f6a]'>HasThemes</span></Link>  | Built with <Link to={"https://hasthemes.com/"}><span className='text-[#8a8f6a]'>Boyka</span></Link> by <Link to={"https://hasthemes.com/"}><span className='text-[#8a8f6a]'>HasThemes</span></Link>.</p>
        </div>
        <div>
            <img src={footerlogo} alt="" />
        </div>
    </div>
  </footer>
}

export default Footer
