import React, { useState } from 'react'
import { assets } from '../../component/assets/assets'

const LoginPopup = ({setshowLogin}) => {

    const[currstate,setCurrState]=useState("SignUp")
  return (
    <div className='absolute h-full w-full z-10  grid'>
        <form className='place-self-center bg-stone-50 text-stone-600 flex flex-col gap-5 rounded pt-6 pb-6 pl-7 pr-7  font-semibold '>
      <div className='flex justify-between items-center text-black'>
        <h2>{currstate}</h2>
        <img className='w-4 cursor-pointer' onClick={()=>setshowLogin(false)} src={assets.cross_icon} alt="" srcset="" />

      </div>
      <div className='flex flex-col gap-3'>
        {currstate==="SignUp"?<input className='outline-none border border-solid border-gray-400 p-2.5 rounded' type="text" placeholder='Your Name' required />:<></>}
        
        <input className='outline-none border border-solid border-gray-400 p-2.5 rounded' type="email" placeholder='Your Email'required />
        <input className='outline-none border border-solid border-gray-400 p-2.5 rounded' type="password" placeholder='Your password' required />


      </div>
      <button className='border-none rounded bg-orange-600 text-black p-2.5'>{currstate==="SignUp"?"Create Account":"Login"}</button>
      <div className='flex items-center gap-2'>
        <input type="checkbox" required/>
        <p>By continue , i agree the term of use Privacy policy</p>
      </div>
      {currstate==="SignUp"? <p>Already have a Account <span className='rounded border-2 p-1 border-black bg-orange-600  text-black' onClick={()=>setCurrState("Login")}>Login Here</span></p>:  <p>create a new account?<span className='rounded border border-black bg-orange-600 text-black p-1' onClick={()=>setCurrState("SignUp")}>Click Here</span></p>}
    
     
      </form>
    </div>
  )
}

export default LoginPopup
