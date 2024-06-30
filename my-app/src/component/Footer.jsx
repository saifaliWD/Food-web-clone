import React from 'react'
import { assets } from './assets/assets'

const Footer = () => {
  return (
    <div id='contact' className='text-stone-200 bg-stone-700 flex flex-col items-start gap-5  pb-5 pl-[8vw] pr-[8vw] pt-20 mt-24 '>
        <div className=' w-full md:grid md:grid-cols-4 flex flex-col gap-8'>
            <div className='col-span-2  '>
             <img src={assets.logo} alt="" srcset="" />
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nam corrupti 
                <br />
                 rem? Sapiente maxime ad magni id, beatae reprehenderit neque quas quaerat..</p>
             <div className='flex mt-2 gap-x-2'>
                <img className='cursor-pointer' src={assets.facebook_icon} alt="" />
                <img className='cursor-pointer' src={assets.twitter_icon} alt="" />

                <img className='cursor-pointer' src={assets.linkedin_icon} alt="" />
             </div>
            </div>
            <div >
                <h2 className='font-bold text-2xl text-stone-50'>COMPANY</h2>
                <ul className='cursor-pointer'>
                <li> Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
                
                </ul>
            </div>

            <div>
                <h2 className='font-bold text-2xl text-slate-50 '>Get in Touch</h2>
                <ul>
                    <li>+263572532524</li>
                    <li>contact@tomato.com</li>
                </ul>

            </div>
          

            <hr />
            </div>

<div className='flex  items-center justify-center gap-x-72'>
      
        <p className=' font-semibold '>Copyright 2024 &#169; Tomato.com All right Reserved</p>
        <p className=' font-semibold  '>Created By Saif</p>
        </div>
    </div>
  )
}

export default Footer
