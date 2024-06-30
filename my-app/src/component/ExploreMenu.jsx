import React from "react";
import { menu_list } from "./assets/assets";

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className="flex flex-col md:gap-7" id="menu">
      <h2 className="md:text-3xl font-semibold">explore Our menu</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
      <p className="md:block hidden">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
        molestiae architecto maxime corporis porro accusantium unde voluptatum,
        illo libero! Commodi.
        </p>
      <div className=" md:flex items-center justify-center gap-7 text-center mt-5 mb-5 ml-0 mr-0 overflow-x-scroll sm:grid sm:grid-cols-4 grid grid-cols-4 ">
        {menu_list.map((item,index)=>{

            return(
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?'All':item.menu_name)} key={index}>
                    <img  className={category===item.menu_name?"Active":""} src={item.menu_image} alt="" />
                    <p>{item.menu_name}</p>

                </div>
               

            )
        })}
      </div>
      <hr className=" h-0.5  mt-3 mb-3 ml-0 mr-0 bg-slate-300 border-none"/>
    </div>
  );
};

export default ExploreMenu;
