import React from 'react';

import { motion } from 'framer-motion';
import {fadeIn} from '../variants'
import {MdEmail ,MdPhone} from 'react-icons/md'

const Contact = () => {
  return (
    <section className='section min-h-[150vh] relative top-28' id='contact'>
      <div className="container mx-auto   ">
        <div className='flex flex-col lg:flex-row font-mono '>
          <motion.div
          variants={fadeIn("right",0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false,amount:0.7}}
          className='flex-1'>
            <div>
              <h4 className='text-xl uppercase text-accent  font-bold font-mono mb-2'>Get In Touch</h4>
              <h2 className='text-[45px] lg:text-[90px] text-white leading-none mb-12 font-baloo'>Let's work <br />together!</h2>
              <h3 className='lg:h3 text-white'><MdEmail/> adityasoniprofessional@gmail.com</h3>
              <h3 className='h lg:h3 text-white'><MdPhone/> +91 8619112797</h3>
            </div>

          </motion.div>
          <motion.form
          variants={fadeIn("left",0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false,amount:0.7}}
          className=' flex-1 border shadow-outer-project-purple font-baloo rounded-2xl flex flex-col gap-y-4 pb-24 items-start p-6' method="post" action='https://getform.io/f/ecfd0a3c-ccd5-4904-8b1c-32c96daac508'>
          <input className='bg-transparent border-b py-3 outline-none w-full text-white placeholder:text-white focus:border-accent transition-all' type="text" name='name' placeholder='Your name' required />
          
          <input className='bg-transparent border-b py-3 outline-none w-full text-white placeholder:text-white focus:border-accent transition-all' type="email" name='email' placeholder='Your email' required/>
          
          <textarea className='bg-transparent border-b py-2 outline-none w-full text-white placeholder:text-white focus:border-accent transition-all resize-none mb-12' name='message' placeholder='Your message' required id="" cols="15" rows="2"></textarea>
          <button type='submit' className='btn btn-lg'>Send Message</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
