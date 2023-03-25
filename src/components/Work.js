import React from 'react';
import { fadeIn } from '../variants';
import {motion} from 'framer-motion';
import Img1 from '../assets/snake.png'
import Img2 from '../assets/todo.png'
import Img3 from '../assets/chat.png'
import { BsFillFastForwardFill } from 'react-icons/bs'

const Work = () => {
  return (
    <section className='section' id='projects'> 
    <div className='container mx-auto relative top-48 lg:static '>
      <div className='flex  flex-col lg:flex-row gap-x-10 '>
        <motion.div
        variants={fadeIn("right",0.2)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false,amount:0.3}}
        className='flex-1 flex flex-col  mb-10 lg:mb-0  font-secondary'>
        <div className='flex-1'>
            <h2 className='h2 leading-tight text-accent font-bold'>My latest <br />
            Projects</h2>
          <p className='max-w-sm mb-10 font-baloo text-white'>All the projects are build with latest web development technologies .Chech these awesome projects and their github for code review . <br/> Please check my Github Account to see more projects I made.</p>
          <a href="https://github.com/adityasoni2003" target='_blank'>

          <button className='btn btn-lg flex justify-center items-center  gap-1'>View all projects<BsFillFastForwardFill/></button>
          </a>
          </div>
          <a href="https://snake-eats.vercel.app/" target='_blank'>

        <div className='group relative overflow-hidden border-2
           border-white/50 rounded-xl'>
            <div className='group-hover:bg-black/60 w-full h-full absolute z-40 transition-all duration-300 '></div>
            <img className='group-hover:scale-125 transition-all duration-500' src={Img1} alt="" />
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 text-white text-2xl'>SnakeEats</div>
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50 '><span className='lg:text-3xl text-xl text-gradient'>HTML , CSS , Javascript</span></div>
          </div>
          </a>
        </motion.div>
        <motion.div
        variants={fadeIn("left",0.2)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false,amount:0.2}}
         className='flex-1 flex flex-col gap-y-14 mb-10 lg:mb-0'>
          <a href="https://github.com/adityasoni2003/Django-TodoList" target='_blank'>

        <div className='group relative overflow-hidden border-2
           border-white/50 rounded-xl'>
            <div className='group-hover:bg-black/60 w-full h-full absolute z-40 transition-all duration-300 '></div>
            <img className='group-hover:scale-125 transition-all duration-500' src={Img2} alt="" />
            <div className='absolute -bottom-full right-12 group-hover:bottom-24 transition-all duration-500 z-50 text-white text-2xl'>TodoApp</div>
            <div className='absolute -bottom-full right-12 group-hover:bottom-14 transition-all duration-500 z-50 '><span className='lg:text-3xl text-xl text-gradient'>Django , HTML , CSS</span></div>
          </div>
          </a>
          <a href="https://github.com/adityasoni2003/ChatMe" target='_blank'>

        <div className='group relative overflow-hidden border-2
           border-white/50 rounded-xl'>
            <div className='group-hover:bg-black/60 w-full h-full absolute z-40 transition-all duration-300 '></div>
            <img className='group-hover:scale-125 transition-all duration-500' src={Img3} alt="" />
            <div className='absolute -bottom-full right-12 group-hover:bottom-24 transition-all duration-500 z-50 text-white text-2xl'>ChatME</div>
            <div className='absolute -bottom-full right-12 group-hover:bottom-14 transition-all duration-500 z-50 '><span className='lg:text-3xl text-xl text-gradient'>React , Firebase , Tailwind</span></div>
          </div>
          </a>
        </motion.div>
        
      </div>
      
    </div>

    </section>
  );
};

export default Work;
