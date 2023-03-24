import React from 'react';
import Image from '../assets/image.jpeg'
import {FaGithub,FaLinkedin} from 'react-icons/fa'

import { TypeAnimation } from 'react-type-animation'
import {motion} from 'framer-motion'
import {fadeIn} from '../variants';
const Banner = () => {
  return (
    <section className='min-h-[85vh]  lg:min-h-[78vh] flex items-center' id='home'>
      <div className="container min-h-[500px] py-0  mx-auto flex flex-col lg:flex-row gap-x-24">
        <div className='flex flex-col  '>

          <div className='flex   font-tertiary lg:text-left'>
            <motion.h1
            variants={fadeIn("up",0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once:false,amount:0.7}} className='text-[50px] tracking-widest mb-2 font-extrabold drop-shadow-3xl leading-[1] lg:text-[110px] underline lg:no-underline  font-baloo'>Aditya  Soni</motion.h1>
          </div>
          <motion.div variants={fadeIn("up",0.4)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once:false,amount:0.7}} className='mb-6  text-[36px] lg:text-[60px] font-secondary text-white font-bold uppercase leading-[1]'>
            <span className='mr-5'>I am a</span>
            <TypeAnimation 
            sequence={[
              "Coder",
              3000,
              "Developer",
              2000,
              "Human",
              2000,
              "Learner",
              2000
             
            ]}
            speed={50}
            className="text-accent drop-shadow-blue"
            wrapper='span'
            repeat={Infinity}/>

          </motion.div>
         </div>
         <motion.div className='mt-2 lg:mt-auto lg:mb-24 flex order-2 lg:order-[0] text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0' variants={fadeIn("up",0.4)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once:false,amount:0.7}}
            >
              <a href="https://github.com/adityasoni2003" className='hover:bg-purple-600 drop-shadow-3xl hover:scale-110 rounded-full p-1' target="_blank">
            <FaGithub size={35}/>
            </a>
          <a href="https://www.linkedin.com/in/adityasoniprofessional/" className='hover:bg-blue-400 drop-shadow-3xl rounded-sm hover:scale-110 p-1 ' target="_blank">
            <FaLinkedin size={35}/>
          </a>
  
          </motion.div>
        
        <motion.div variants={fadeIn("up",0.6)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once:false,amount:0.7}}>
              <img src={Image} alt="Avatar" className='mx-auto w-[200px] h-[200px]  lg:w-[300px] lg:h-auto'/>
            </motion.div>
        
        
        


      </div>

    </section>
  );
};

export default Banner;
