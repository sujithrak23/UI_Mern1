import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function Stickybar() {
  return (
    
    <Navbar expand="lg" style={{backgroundColor: 'black',height:'100px', position: 'sticky', top: '0',zIndex: '100',fontFamily:"'Concert One',sans-serif"}}>
    <Container fluid>
       <img style={{height:'80px',width:'80px'}}
         className='logo' 
         src='.\food-img1.jpg'
       />
      <Navbar.Brand href="#" style={{color: 'white',marginLeft: '5px',fontSize:'55px'}}>
        YumsteR
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="navbar-center ms-auto "
          style={{ maxHeight: '100px',alignItems:'right'}}
          navbarScroll
        >
          <Link to='/home' style={{textDecoration:'none',color:'inherit'}}>
             <Nav.Link  href="#action1" style={{color: 'white',fontSize:'30px',textDecoration:'none'}}>Home</Nav.Link>
          </Link>

          <Link to='/Navbar' style={{textDecoration:'none',color:'inherit'}}>
             <Nav.Link  href="#action2" style={{color: 'white',fontSize:'30px',textDecoration:'none'}}>Menu</Nav.Link>
          </Link>

          <Link to='/' style={{textDecoration:'none',color:'inherit'}}>

          <Nav.Link  href="#action2" style={{color: 'white',fontSize:'30px',textDecoration:'none'}}>Page</Nav.Link>
           </Link>
            
            <Link to='/order' style={{textDecoration:'none',color:'inherit'}}>
            <Nav.Link  href="#action4" style={{color: 'white',fontSize:'30px',textDecoration:'none'}}>Order</Nav.Link>
          </Link>

          <Link to='/' style={{textDecoration:'none',color:'inherit'}}>
            <Nav.Link  href="#action5" style={{color: 'white',fontSize:'30px',marginRight:'200px',textDecoration:'none'}}>Logout</Nav.Link> 
          </Link>
          
        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search your food here"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>

       
       <Link to='/cart'>

        <Button  
        variant="contained" 
        style={{background:'pink',margin:'10px'}}
        >
          <IconButton color="warning" aria-label="add to shopping cart">
            <AddShoppingCartIcon />
        </IconButton>
          Cart
        </Button>

        </Link>


      </Navbar.Collapse>
    </Container>
  </Navbar>
 
  )
}
