import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

import {motion} from 'framer-motion'
import {fadeIn} from '../variants'

const About = () => {
  const [ref,inView] = useInView({
    threshold:0.5,
  });

  return (<section className='section' id='about' ref={ref}>
    <div className='container mx-auto'> 
    <div className='flex flex-col gap-y-4 lg:flex-row lg:items-center lg:gap-x-24 lg:gap-y-0 h-screen'>

    
    <motion.div
      variants={fadeIn("right",0.2)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once:false,amount:0.7}}
    className='flex-1  lg:bg-about hidden lg:block bg-contain bg-no-repeat  bg-none lg:h-[540px] mix-blend-overlay bg-top'>
    
    </motion.div>
    <motion.div
    variants={fadeIn("left",0.3)}
    initial='hidden'
    whileInView={'show'}
    viewport={{once:false,amount:0.7}}
    className='flex-1 mt-10 '>
    <h2 className='text-accent h2 font-bold  '>About Me</h2>
    <h3 className='h3 mb-4 font-baloo font-bold text-white'>I'm a Full stack Developer with experience in latest technologies.</h3>
    <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias unde consequatur optio ullam reprehenderit debitis, rerum officiis dolore fugit deserunt accusantium sequi. Laborum placeat aperiam ea veritatis eligendi ipsam? Explicabo?</p>
    <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
      <div>
        <div className='text-[40px] font-primary text-gradient mb-2'>
        {inView? <CountUp start={0} end={0} duration={3}/> :null}
          
        </div>
        <div className='font-tertiary text-accent text-sm tracking-[2px]'>
          Years of <br/>
          Experience
        </div>
      </div>
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
