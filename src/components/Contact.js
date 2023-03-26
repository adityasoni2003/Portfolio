import React from 'react';

import { motion } from 'framer-motion';
import {fadeIn} from '../variants'


const Contact = () => {
  return (
    <section className='section min-h-[150vh] relative top-28' id='contact'>
      <div className="container mx-auto   ">
        <div className='flex flex-col lg:flex-row  '>
          <motion.div
          variants={fadeIn("right",0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false,amount:0.7}}
          className='flex-1'>
            <div>
              <h4 className='text-xl uppercase text-accent  font-bold mb-2'>Get In Touch</h4>
              <h2 className='text-[45px] lg:text-[90px] text-white leading-none mb-12 font-tertiary'>Let's work <br />together!</h2>
            </div>

          </motion.div>
          <motion.form
          variants={fadeIn("left",0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false,amount:0.7}}
          className=' flex-1 border font-baloo rounded-2xl flex flex-col gap-y-4 pb-24 items-start p-6' method="post" action='https://getform.io/f/ecfd0a3c-ccd5-4904-8b1c-32c96daac508'>
          <input className='bg-transparent border-b py-3 outline-none w-full text-white placeholder:text-white focus:border-accent transition-all' type="text" name='name' placeholder='Your name' required />
          
          <input className='bg-transparent border-b py-3 outline-none w-full text-white placeholder:text-white focus:border-accent transition-all' type="email" name='email' placeholder='Your email' required/>
          
          <textarea className='bg-transparent border-b py-2 outline-none w-full text-white placeholder:text-white focus:border-accent transition-all resize-none mb-12' name='message' placeholder='Your message' required name="" id="" cols="15" rows="2"></textarea>
          <button type='submit' className='btn btn-lg'>Send Message</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
