import React from 'react';
import {BiHomeAlt,BiUser} from 'react-icons/bi'
import {BsClipboardData,BsChatSquareText} from 'react-icons/bs'

import { Link } from 'react-scroll';


const Nav = () => {
  return (<nav className='fixed bottom-6 lg:bottom-16  w-full overflow-hidden p-2 z-[100] '>
    <div className='container mx-auto'>

      <div className='w-[65%] lg:w-full bg-white shadow-inner-shadow items-center text-2xl text-black flex justify-evenly mx-auto  rounded-full border-2 border-purple-600 h-16 lg:h-[96px]  max-w-[400px]'>
        <Link offset={-200} spy={true} activeClass='active' smooth={true}  to='home' className='cursor-pointer w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] flex items-center justify-center'>
        <BiHomeAlt/>
        </Link>
        <Link  spy={true} activeClass='active' smooth={true}  to='about' className='cursor-pointer w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] flex items-center justify-center'>
        <BiUser/>
        </Link>
        <Link  offset={150} spy={true} activeClass='active' smooth={true} to='projects'  className='cursor-pointer w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] flex items-center justify-center'>
        <BsClipboardData />
        </Link>
        <Link offset={200} spy={true} activeClass='active' smooth={true}  to='contact'  className='cursor-pointer w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] flex items-center justify-center'>
        <BsChatSquareText/>
        </Link>
        
      </div>

    </div>
  </nav>)
};

export default Nav;
