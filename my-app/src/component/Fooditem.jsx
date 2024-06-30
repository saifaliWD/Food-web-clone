import React, { useContext } from "react";
import { assets } from "./assets/assets";
import { storeContext } from "./StoreContextProvider";

const Fooditem = ({ id, name, image, price, description }) => {

  const  { cartItems, addToCart, removeFromCart } = useContext(storeContext);
  
  return (

    <div className="md:w-full m-auto rounded-2xl shadow-md  ">
      <div className="relative">
        <img className="w-full rounded-t-2xl" src={image} alt="" />
        {
        !cartItems[id] 
        ?<img
            className="absolute w-9 bottom-4 right-4 cursor-pointer rounded-full"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt=""
            srcset=""
          />
         :<div className="absolute bottom-4 right-4 cursor-pointer flex bg-slate-50 items-center rounded-full p-2 gap-3">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt=""
              srcset=""
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt=""
              srcset=""
            />
          </div>
        }
      </div>
      <div>
        <div className="flex justify-between items-center">
          <p className="font-bold">{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="font-semibold">{description}</p>
        <p className="font-bold text-orange-600">${price}</p>
      </div>
    </div>
  );
};

export default Fooditem;
