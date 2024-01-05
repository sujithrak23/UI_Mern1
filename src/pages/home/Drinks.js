import React from 'react';
import Coffee from '../../posts/Coffee';
import Tea from '../../posts/Tea';
import Icecream from '../../posts/Icecream';
import Shakes from '../../posts/Shakes';
import Stickybar from '../../NavBar/Stickybar';
import Footer from '../Footer/Footer';



export default function Drinks() {

  const backgroundImageStyle = {
    backgroundColor: "#1a1a1a", 
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '100vh', 
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ffffff', 
  };


  return (
    <>
    <Stickybar/>
<div style={backgroundImageStyle}>
        <Coffee/>
      <Shakes/>
      <Tea/>
      <Icecream/>
    </div>
    <Footer/>
    </>
  )
}
