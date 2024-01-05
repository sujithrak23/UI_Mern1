import React from 'react';
import  Offer from '../../posts/Offer';
import Stickybar from '../../NavBar/Stickybar';
import Template from '../../posts/Template';
import Cards from '../../posts/Cards';
import Button from '../../posts/Button';
import Slick from '../../header/Slick';
import SlickTwo from '../../posts/SlickTwo';
import Footer from '../Footer/Footer';
import PrinceHotel from '../../Hotels/PrinceHotel';
import ExampleHome from '../../Hotels/ExampleHome';

 function Home() {
  return (
    <>
    <Stickybar/>
  
      <div className='home'>
        <Slick/>
        <Offer/>
        <Cards/>
        <SlickTwo/>
        <Button/>
        <Template/>
        <PrinceHotel/>
        <ExampleHome/>
        <Footer/>
     </div>
      
    </>
    
  )
};

export default Home;
