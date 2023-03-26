import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

import {motion} from 'framer-motion'
import {fadeIn} from '../variants'

import HTMLlogo from '../assets/Skill Logos/html.png'
import Csslogo from '../assets/Skill Logos/css.png'
import JSlogo from '../assets/Skill Logos/js.png'
import Tailwindlogo from '../assets/Skill Logos/tailwind.png'
import Sasslogo from '../assets/Skill Logos/sass-logo.png'
import Reactlogo from '../assets/Skill Logos/react.png'
import Pythonlogo from '../assets/Skill Logos/python.png'
import Sqllogo from '../assets/Skill Logos/sql.png'
import Djangologo from '../assets/Skill Logos/django-logo.png'
import Gitlogo from '../assets/Skill Logos/Git.png'



const About = () => {
  const [ref,inView] = useInView({
    threshold:0.5,
  });

  return (<section className='section' id='about' ref={ref}>
    <div className='container mx-auto'> 
    <div className='flex flex-col lg:flex-row gap-0 lg:items-center lg:gap-x-24 '>

    
    <motion.div
      variants={fadeIn("right",0.0)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once:false,amount:0.7}}
    className='flex-1 order-2 lg:order-1 flex flex-col items-center justify-center '>
      <h1 className='text-center  text-accent no-underline h2 font-baloo font-bold'>Skills</h1>
      <div className='flex flex-wrap gap-10 justify-center items-center '>
      <img src={HTMLlogo} className='w-20 lg:w-24' alt="" />
      <img src={Csslogo} className='w-20 lg:w-24' alt="" />
      <img src={JSlogo} className='w-[70px] lg:w-20' alt="" />
      <img src={Reactlogo} className='w-20 lg:w-24' alt="" />
      <img src={Sasslogo} className='w-20 lg:w-24' alt="" />
      <img src={Tailwindlogo} className='w-20 lg:w-24' alt="" />
      <img src={Pythonlogo} className='w-20 lg:w-24' alt="" />
      <img src={Sqllogo} className='w-20 lg:w-24' alt="" />
      <img src={Djangologo} className='w-20 lg:w-24' alt="" />
      <img src={Gitlogo} className='w-20 lg:w-24' alt="" />

      </div>
      
    </motion.div>
    <motion.div
    variants={fadeIn("left",0.0)}
    initial='hidden'
    whileInView={'show'}
    viewport={{once:false,amount:0.7}}
    className='lg:flex-1 flex-auto order-1 lg:order-2 '>
    <h2 className='text-accent h2 font-baloo font-bold  '>About Me</h2>
    <h3 className='h3 mb-4 font-mono font-bold text-white'>I'm a Full stack Developer with experience in latest technologies.</h3>
    <p className='text-white font-mono'>A Web developer based in Bhilwara, Rajasthan , India. I bring complex web applications to life with elegant design and intuitive functionality.
I'm passionate about cutting-edge, pixel-perfect, beautiful interfaces and intuitively implemented UX. I'm an extremely curious individual with a huge passion for development in general.</p>
    <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
      
      <div>
        <div className='text-[40px]  font-primary text-gradient mb-2'>
        {inView? <CountUp start={0} end={8} duration={3}/> :null}
          
        </div>
        <div className='font-tertiary text-accent text-sm tracking-[2px]'>
          Personal <br/>
          Projects
        </div>
      </div>
     
    </div>
    </motion.div>

    </div>
    


    </div>
  </section>
  );
};

export default About;
