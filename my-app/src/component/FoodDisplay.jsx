import React, { useContext } from "react";
import Fooditem from "./Fooditem";
import { storeContext } from "./StoreContextProvider";


const FoodDisplay = ({category}) => {

    const  {food_list} = useContext(storeContext)

  return (
    <div className="mt-7 ">
      <h1 className="mt-2 font-bold">Top dishes near you</h1>
      <div className="grid md:grid-cols-4 gap-x-7 gap-y-12 sm:grid-cols-2">
        {food_list.map((item,index) => {

          if(category==="All"||category===item.category){
            {console.log(category,item.category);}

            return <Fooditem key={index} id={item._id}  name={item.name} image={item.image} price={item.price} description={item.description} />

          }

          
          
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
