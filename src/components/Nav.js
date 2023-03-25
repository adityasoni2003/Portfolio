import React from 'react';
import {BiHomeAlt,BiUser} from 'react-icons/bi'
import {BsClipboardData,BsChatSquareText} from 'react-icons/bs'

import { Link } from 'react-scroll';


const Nav = () => {
  return (<nav className='fixed bottom-6 lg:bottom-16 z-50 w-full overflow-hidden p-2 z-[100] '>
    <div className='container mx-auto'>

      <div className='w-full bg-white h-[96px]  items-center   text-2xl text-black flex justify-evenly mx-auto backdrop-blur-2xl  rounded-full max-w-[400px]'>
        <Link offset={-200} spy={true} activeClass='active' smooth={true}  to='home' className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
        <BiHomeAlt/>
        </Link>
        <Link  spy={true} activeClass='active' smooth={true}  to='about' className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
        <BiUser/>
        </Link>
        <Link   spy={true} activeClass='active' smooth={true} to='projects'  className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
        <BsClipboardData/>
        </Link>
        <Link  spy={true} activeClass='active' smooth={true}  to='contact'  className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
        <BsChatSquareText/>
        </Link>
        
      </div>

    </div>
  </nav>)
};

export default Nav;
