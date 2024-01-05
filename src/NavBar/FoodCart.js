import React from 'react'
import Stickybar from './Stickybar'
import Footer from '../pages/Footer/Footer'

const FoodCart = () => {
  return (
    <>
     <div
        style={{
          backgroundColor: "#1a1a1a", 
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        > 
      <Stickybar/>
      <Footer/>
       </div>
    </>
  )
}

export default FoodCart
