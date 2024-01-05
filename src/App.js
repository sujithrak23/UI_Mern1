import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home/Home';
import SinglePost from './posts/SinglePost';
import Loggin from './pages/login/Loggin';
import Register from './pages/register/Register';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Order from './pages/order/Order';
import Offer from './posts/Offer';
import Drinks from './pages/home/Drinks';
import Breakfast from './posts/Breakfast';
import Meals from './posts/Meals';
import FastFoods from './posts/FastFoods';
import AllPost from './posts/AllPost';
import HydrabadHotel from './Hotels/HydrabadHotel';
import ThemeHotel from './Hotels/ThemeHotel';
import SaravanaHotel from './Hotels/SaravanaHotel';
import SageHotel from './Hotels/SageHotel';
import FoodCart from './NavBar/FoodCart';



function App() {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Loggin/>}></Route>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/register' element={<Register/>}> </Route>
            <Route path='/Navbar' element={<SinglePost/>}></Route>
            <Route path='/order' element={<Order/>}></Route>
            <Route path='/edit' element={<Offer/>}></Route>
            <Route path='/drinks' element={<Drinks/>}></Route>
            <Route path='/breakfast' element={<Breakfast/>}></Route>
            <Route path='/meals' element={<Meals/>}></Route>
            <Route path='/fastfood' element={<FastFoods/>}></Route>
            <Route path='/allposts' element={<AllPost/>}></Route>
            <Route path='/cart' element={<FoodCart/>}></Route>

            {/*hotels routing */}

            <Route path='/hydrabad' element={<HydrabadHotel/>}></Route>
            <Route path='/theme' element={<ThemeHotel/>}></Route>  {/*grand hotel*/}
            <Route path='/saravana' element={<SaravanaHotel/>}></Route>
            <Route path='/sage' element={<SageHotel/>}></Route>
           
          </Routes>
        </BrowserRouter>
        </>
  
  );
}



export default App;
