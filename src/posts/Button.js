
import React from 'react'
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';




function TopButton() {
  
  return (
    <div
    style={{
      backgroundColor: "#1a1a1a", 
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <hr style={{color:'white'}}/>
    <div className='container'>
      <div className="explore" onclick="">
        <h2 style={{fontSize:'40px',color:'white',textAlign:'center'}} >TOP SEARCH</h2>
        
        </div>

        <div>
        <ButtonGroup aria-label="Basic example" style={{alignItems:'center',justifyContent: 'center',display:'flex',size:'125px'}}>
        <Link to="/breakfast">
          <Button variant="primary" style={{backgroundColor:'white',color:'gray',padding:'20px',borderRadius:'15px'}}>BREAKFAST</Button>
          </Link>
          <Link to="/meals">
          <Button variant="primary" style={{backgroundColor:'white',color:'gray',padding:'20px',borderRadius:'15px'}}>MEALS</Button>
          </Link>
          <Link to="/Navbar">
          <Button variant="primary" style={{backgroundColor:'white',color:'gray',padding:'20px',borderRadius:'15px'}}>SNACKS</Button>
          </Link>
          <Link to="/drinks">
          <Button variant="primary" style={{backgroundColor:'white',color:'gray',padding:'20px',borderRadius:'15px'}}>DRINKS</Button>
          </Link>
          <Link to="/fastfood">
          <Button variant="primary" style={{backgroundColor:'white',color:'gray',padding:'20px',borderRadius:'15px'}}>FASTFOOD</Button>
          </Link>
          <Link to="/Navbar">
          <Button variant="primary" style={{backgroundColor:'white',color:'gray',padding:'20px',borderRadius:'15px'}}>DINNER</Button>
          </Link>
    </ButtonGroup>
        </div>

       

       </div>
       </div>
  )
}
export default TopButton;