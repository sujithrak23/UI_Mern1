import React from 'react'
import Stickybar from '../../NavBar/Stickybar';
import Footer from '../Footer/Footer';

export default function Order() {
  return (
    <>
    <Stickybar/>
    <div className='order'>
    <span className="orderTitle">Place Your Order Here</span>


      <form className="orderForm">

        <label>Item Name</label>
        <input className="orderInput" type="text" placeholder="enter food" />
        <label>Item Quantity</label>
        <input className="orderInput" type="text" placeholder="enter in numbers" />
        <button className="orderButton">Order Now</button>


      </form>
        
    </div>
    <Footer/>
    </>
  )
}
