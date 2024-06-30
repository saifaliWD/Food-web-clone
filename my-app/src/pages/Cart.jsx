import React, { useContext, useState } from 'react'
import { storeContext } from '../component/StoreContextProvider'
import { useNavigate } from 'react-router-dom'

const Cart = () => {

    const {cartItems,food_list,removeFromCart,getTotalCartAmount}=useContext(storeContext)

 const navigator=useNavigate();

 const {Deliveryc,setDeliveryc}=useContext(storeContext)

  return (
    <>

    <div className='md:mt-24 mt-12'>
        <div >
            <div className='grid grid-cols-7 items-center '>
                <p>Item</p>
                <p className='col-span-2'>Title </p>
                <p>price</p>
                <p className=''>Quantity</p>
                <p className=''>Total</p>
                <p className=''>remove</p>
            </div>
            <hr />
            <div>
                {food_list.map((item,index)=>{
                    if(cartItems[item._id]>0){

                        return(
                            <div>
                            <div  className='grid grid-cols-7 mt-2.5 mb-2.5 ml-auto mr-auto'>
                                <img className='w-12' src={item.image} alt="" srcset="" />
                                <p className='col-span-2'>{item.name}</p>
                                <p>${item.price}</p>
                                <p>{cartItems[item._id]}</p>
                                <p>${cartItems[item._id]*item.price}</p>
                                <p className='cursor-pointer ' onClick={()=>removeFromCart(item._id)}>x</p>
                            </div>
                            <hr className='h-0.5 bg-stone-300 border-none' />
                            </div>
                        )

                    }

                })}
            </div>
        </div>

      
    </div>
    <div className=' md:flex  md:justify-between mt-12 md:flex-row-reverse '>
    <div className=''>
            <p>If you have a Promo code Please Enter it Here</p>
            <p>Delivery charge  Free If you have Promo code </p>
            <div>
                <input className=' border p-1 text-black   border-black' type="text" placeholder='Enter Promo code' />
                <button className='bg-black text-white rounded-sm  border-black border  p-1 mt-2' onClick={()=>setDeliveryc(0)}>Submit</button>
            </div>
        </div>
        <div className='flex flex-col gap-2 mt-5 md:mt-0'>
            <h2 className='text-xl font-semibold'>Card Total</h2>
            <div className='flex font-normal justify-between gap-x-64'>
                <p>Sub Total</p>
                <p>{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className='flex font-normal justify-between gap-x-64'>
                <p>Delivery Fee</p>
                <p>{getTotalCartAmount()===0?0:Deliveryc}</p>
            </div>
            <hr />
            <div className='flex font-normal justify-between gap-x-64'>
                <p>Total</p>
                <p>{getTotalCartAmount()===0?0:getTotalCartAmount()+Deliveryc}</p>
            </div>
            <hr />
            <button className='flex justify-start bg-orange-600 border-none rounded-sm w-44 text-center p-1' onClick={()=>navigator("/order")}> Proceed To Checkout</button>
        </div>
      
    </div>
    </>
    
  )
}

export default Cart
