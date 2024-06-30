
import { food_list } from './assets/assets'

import  { createContext, useState } from 'react'


  export const storeContext = createContext()



const StoreContextProvider = (props) => {

    const[Deliveryc,setDeliveryc]=useState(2)

    const [cartItems,setCartItems]=useState({});

    const addToCart=(itemId)=>{
        if(!cartItems[itemId]){
        setCartItems((prev)=>({...prev,[itemId]:1}))
        }
        else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }
    const removeFromCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))

    }

    const getTotalCartAmount=()=>{
        let totalamount=0;

        for(const Item in cartItems){

            if(cartItems[Item]>0){

                let itemInfo = food_list.find((product)=>product._id===Item)
                totalamount += itemInfo.price * cartItems[Item];
            }
            
        }
        return totalamount;
    }


    const contextValue ={

        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        Deliveryc,
        setDeliveryc

        }
    return(
        <storeContext.Provider value={contextValue} >
            {props.children}

        </storeContext.Provider>
    )
    
}

export default StoreContextProvider;
