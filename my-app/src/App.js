import { useState } from 'react';
import './App.css';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import { Route,Routes } from 'react-router-dom';
import LoginPopup from './pages/LoginPopup/LoginPopup';
import Cart from './pages/Cart';
import PlaceOrder from './pages/PlaceOrder';


function App() {

  const [showLogin,setShowLogin]=useState(false)
  return (

<>
    {showLogin?<LoginPopup setshowLogin={setShowLogin} />:<></>}
    
    <div className='w-4/5  ml-auto mr-auto'>

      <Navbar setshowlogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<PlaceOrder/>}/>

         </Routes>
         
    </div>
   
    <Footer/>
    </>
   
     
  );
}

export default App;
