import React from 'react';
import {GrDocumentDownload} from 'react-icons/gr'
import logo from '../assets/logo.png'

const Header = () => {
  return <header className='bg-transparent py-0 pt-4 '>
    <div className='container border-b-white border-b-2  mx-auto '>

    <div className='flex justify-between items-center h-full'>
    <img src={logo} alt="" className='w-20 animate-bounce' />
   
    <button className='btn btn-sm '>
      <a href="../demo.pdf" download={true} className='block lg:hidden'>
      <GrDocumentDownload size={30}/>
      </a>
      <a href="../demo.pdf" download={true}>

      <span className='hidden lg:inline'>Resume</span>
      </a>
    </button>

    </div>

    </div>
  </header>; 
};

export default Header;
