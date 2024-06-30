import React from 'react'
import { useContext } from 'react'
import { storeContext } from '../component/StoreContextProvider'

const PlaceOrder = () => {

    const {getTotalCartAmount,Deliveryc,setDeliveryc}=useContext(storeContext)
  return (
    <form className='md:flex justify-between mt-14' >
    <div className='flex flex-col gap-3 rounded border bg-white p-4' > 
        <h2 className='text-xl font-semibold'>Delivery Information</h2>  
        <div className='md:flex gap-4 font-semibold'>
            <input className="border-2 rounded border-black text-black bg-white  p-2"  type="text" placeholder='First Name' />
            <input  className="border-2 rounded border-black text-black bg-white  p-2"type="text" placeholder='Last Name' />
        </div> 
        <div className='md:flex flex-col gap-2'>
            <input className="border-2 rounded border-black text-black bg-white  p-2" type="email" placeholder='Email' />
            <input  className="border-2 rounded border-black text-black bg-white  p-2"type="text" placeholder='street' />
        </div>
        <div className='md:flex gap-4 font-semibold'>
            <input className="border-2 rounded border-black text-black bg-white  p-2" type="text" placeholder='city' />
            <input className="border-2 rounded border-black text-black bg-white  p-2" type="text" placeholder='state' />
        </div>
        <div className='md:flex gap-4 font-semibold'>
            <input className="border-2 rounded border-black text-black bg-white p-2 " type="number" placeholder='Zip code' />
            <input className="border-2 rounded border-black text-black bg-white  p-2" type="text" placeholder='country' />
        </div>
        <div className=''>
            <input  className="border-2 rounded border-black text-black bg-white p-2 "type="number" placeholder='Phone' />
        </div>
    </div>

    <div>
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
            <button className='flex justify-start bg-orange-600 border-none rounded-sm w-44 text-center p-1' onClick={()=>navigator("/order")}> Proceed To Payment</button>
        </div>


    </div>
    </form>
  )
}

export default PlaceOrder

