import React from "react";

const Header = () => {
  return (
    <div className=" h-[8rem] bg-[url('/public/header_img.png')] sm:h-[16rem] md:h-[34rem] mt-7 mb-7 ml-auto mr-auto bg-no-repeat bg-contain relative">
      <div>
        <h1>Order Your Fav food</h1>
        
        <p className="md:block hidden sm:block">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          eos ipsam velit tenetur ad. Vero dignissimos ex tempora dolor nisi
          eveniet harum iusto tenetur in?
        </p>
        <button className="border rounded bg-stone-50">View Menu</button>
      </div>
    </div>
  );
};

export default Header;
