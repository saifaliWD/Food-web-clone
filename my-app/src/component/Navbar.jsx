import React, { useContext } from 'react'
import {Link} from 'react-router-dom'

import { assets } from './assets/assets'
import { storeContext } from './StoreContextProvider'

const Navbar = ({setshowlogin}) => {

  const {getTotalCartAmount}=useContext(storeContext)

  let dotcl= 'absolute h-2 w-2 bg-orange-600 rounded-full top-2 md:right-64  '
  return (
    <div className='flex items-center justify-between h-1/6 '>
        <Link to="/"><img className=' sm:w-32 mr-4 ' src={assets.logo} alt="" /></Link>
        <div className='   hidden items-center justify-center gap-5  sm:hidden  md:flex'>
            <Link to="/"> Home </Link>
            <a href='#menu'> Menu</a>
            <a href='#'> Mobile app</a>
            <a href='#contact'> Contact</a>
        </div>
        <div className='flex items-center justify-center gap-5 '>
            <img className='w-5 h-5 md:w-fit md:h-fit' src={assets.search_icon} alt="" />
            <div>
                <Link to="/cart"><img className='w-6 h-5 md:w-fit md:h-fit' src={assets.basket_icon} alt="" /></Link>
                <div className={getTotalCartAmount()==0?"":dotcl}></div>
            </div>
            <button onClick={()=>setshowlogin(true)} className=' h-10 w-14  rounded text-xs font-bold mt-1 border-2 border-orange-600 md:rounded-full  md:w-16 md:h-10 md:text-l  md:p-2 bg-transparent cursor-pointer md:font-bold md: hover:bg-orange-200  duration-500'>Sign up</button>
        </div>
         

      
    </div>
  )
}

export default Navbar
