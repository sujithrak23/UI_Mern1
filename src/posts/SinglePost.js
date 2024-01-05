
import React from 'react';
import Figure from 'react-bootstrap/Figure';
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Stickybar from '../NavBar/Stickybar';
import { Link } from 'react-router-dom';
import Footer from '../pages/Footer/Footer';


function SinglePost() {
    const containerStyle = {
      backgroundColor: "#1a1a1a", 
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        color: 'yellow',
        padding: '80px', 
      };
    
  const figureStyle = {
    border: '5px double chocolate',
    textAlign: 'center',
    margin: '15px',
    color: 'white',
    padding: '30px'
  };


  return (
    <>
    <Stickybar/>
    <div className="yourClassName" style={containerStyle}>
      <Row>
        <h1 style={{textAlign:'center',fontFamily:"'Concert One', sans-serif",margin:'20px'}}>DISHES YOU WANT</h1>


        <Col md={2} lg={2} style={figureStyle}>
          <Figure.Image 
            width={180}
            height={180}
            alt="171x180"
            src='https://images.pexels.com/photos/2679501/pexels-photo-2679501.jpeg?auto=compress&cs=tinysrgb&w=600'
            />
          <Figure.Caption>
            <h2 className='h2-style' style={{color:'white'}}>Panner Gravy</h2>
            <Link to = '/order'>
                <Button style={{backgroundColor:'chocolate'}}>Order</Button>
          </Link>            
          </Figure.Caption>
        </Col>

        <Col md={2} lg={2} style={figureStyle}>
          <Figure.Image 
            width={171}
            height={180}
            alt="171x180"
            src='https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=600'
            />
          <Figure.Caption>
            <h2 className='h2-style' style={{color:'white'}}>Cakes</h2>
            <Link to = '/order'>
            <Button style={{backgroundColor:'chocolate'}}>Order</Button>
          </Link>            
          </Figure.Caption>
        </Col>


        <Col md={2} lg={2} style={figureStyle}>
          <Figure.Image 
            width={171}
            height={180}
            alt="171x180"
            src='https://images.pexels.com/photos/3642030/pexels-photo-3642030.jpeg?auto=compress&cs=tinysrgb&w=600'
            />
          <Figure.Caption>
            <h2 className='h2-style' style={{color:'white'}}>Sweets</h2>
            <Link to = '/order'>
            <Button style={{backgroundColor:'chocolate'}}>Order</Button>
          </Link>            
          </Figure.Caption>
        </Col>


        <Col md={2} lg={2} style={figureStyle}>
          <Figure.Image 
            width={171}
            height={180}
            alt="171x180"
            src='https://images.pexels.com/photos/1337825/pexels-photo-1337825.jpeg?auto=compress&cs=tinysrgb&w=400'
            />
          <Figure.Caption>
            <h2 className='h2-style' style={{color:'white'}}>Juices</h2>
            <Link to = '/order'>
            <Button style={{backgroundColor:'chocolate'}}>Order</Button>
          </Link>            
          </Figure.Caption>
        </Col>


        <Col md={2} lg={2} style={figureStyle}>
          <Figure.Image 
            width={171}
            height={180}
            alt="171x180"
            src='https://images.pexels.com/photos/327158/pexels-photo-327158.jpeg?auto=compress&cs=tinysrgb&w=600'
            />
          <Figure.Caption>
            <h2 className='h2-style' style={{color:'white'}}>Sandwich</h2>
            <Link to = '/order'>
            <Button style={{backgroundColor:'chocolate'}}>Order</Button>
          </Link>            
          </Figure.Caption>
        </Col>


        <Col md={2} lg={2} style={figureStyle}>
          <Figure.Image 
            width={180}
            height={180}
            alt="171x180"
            src='https://images.pexels.com/photos/4791267/pexels-photo-4791267.jpeg?auto=compress&cs=tinysrgb&w=400'
            />
          <Figure.Caption>
            <h2 className='h2-style' style={{color:'white'}}>Chocolates</h2>
            <Link to = '/order'>
            <Button style={{backgroundColor:'chocolate'}}>Order</Button>
          </Link>            
          </Figure.Caption>
        </Col>


        <Col md={2} lg={2} style={figureStyle}>
          <Figure.Image 
            width={171}
            height={180}
            alt="171x180"
            src='https://images.pexels.com/photos/3789885/pexels-photo-3789885.jpeg?auto=compress&cs=tinysrgb&w=400'
            />
          <Figure.Caption>
            <h2 className='h2-style' style={{color:'white'}}>Bowls</h2>
            <Link to = '/order'>
            <Button style={{backgroundColor:'chocolate'}}>Order</Button>
          </Link>            
          </Figure.Caption>
        </Col>


        <Col md={2} lg={2} style={figureStyle}>
          <Figure.Image 
            width={171}
            height={180}
            alt="171x180"
            src='https://images.pexels.com/photos/414262/pexels-photo-414262.jpeg?auto=compress&cs=tinysrgb&w=400'
            />
          <Figure.Caption>
            <h2 className='h2-style' style={{color:'white'}}>Desserts</h2>
            <Link to = '/order'>
            <Button style={{backgroundColor:'chocolate'}}>Order</Button>
          </Link>            
          </Figure.Caption>
        </Col>


        <Col md={2} lg={2} style={figureStyle}>
          <Figure.Image 
            width={171}
            height={180}
            alt="171x180"
            src='https://images.pexels.com/photos/1907244/pexels-photo-1907244.jpeg?auto=compress&cs=tinysrgb&w=400'
            />
          <Figure.Caption>
            <h2 className='h2-style' style={{color:'white'}}>Soups</h2>
            <Link to = '/order'>
            <Button style={{backgroundColor:'chocolate'}}>Order</Button>
          </Link>            
          </Figure.Caption>
        </Col>


        <Col md={2} lg={2} style={figureStyle}>
          <Figure.Image 
            width={171}
            height={180}
            alt="171x180"
            src='https://images.pexels.com/photos/5061254/pexels-photo-5061254.jpeg?auto=compress&cs=tinysrgb&w=400'
            />
          <Figure.Caption>
            <h2 className='h2-style' style={{color:'white'}}>Icecreams</h2>
            <Link to = '/order'>
            <Button style={{backgroundColor:'chocolate'}}>Order</Button>
          </Link>            
          </Figure.Caption>
        </Col>


        <Col md={2} lg={2} style={figureStyle}>
          <Figure.Image 
            width={180}
            height={180}
            alt="171x180"
            src='https://images.pexels.com/photos/1586942/pexels-photo-1586942.jpeg?auto=compress&cs=tinysrgb&w=400'
            />
          <Figure.Caption>
            <h2 className='h2-style' style={{color:'white'}}>French Fries</h2>
            <Link to = '/order'>
            <Button style={{backgroundColor:'chocolate'}}>Order</Button>
          </Link>            
          </Figure.Caption>
        </Col>


        <Col md={2} lg={2} style={figureStyle}>
          <Figure.Image 
            width={171}
            height={180}
            alt="171x180"
            src='https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=400'
            />
          <Figure.Caption>
            <h2 className='h2-style' style={{color:'white'}}>Pizzas</h2>
            <Link to = '/order'>
            <Button style={{backgroundColor:'chocolate'}}>Order</Button>
          </Link>            
          </Figure.Caption>
        </Col>


        <Col md={2} lg={2} style={figureStyle}>
          <Figure.Image 
            width={171}
            height={180}
            alt="171x180"
            src='https://images.pexels.com/photos/1373915/pexels-photo-1373915.jpeg?auto=compress&cs=tinysrgb&w=400'
            />
          <Figure.Caption>
            <h2 className='h2-style' style={{color:'white'}}>Noodles</h2>
            <Link to = '/order'>
            <Button style={{backgroundColor:'chocolate'}}>Order</Button>
          </Link>            
          </Figure.Caption>
        </Col>


        <Col md={2} lg={2} style={figureStyle}>
          <Figure.Image 
            width={171}
            height={180}
            alt="171x180"
            src='https://images.pexels.com/photos/2280545/pexels-photo-2280545.jpeg?auto=compress&cs=tinysrgb&w=400'
            />
          <Figure.Caption>
            <h2 className='h2-style' style={{color:'white'}}>Pancakes</h2>
            <Link to = '/order'>
            <Button style={{backgroundColor:'chocolate'}}>Order</Button>
          </Link>            
          </Figure.Caption>
        </Col>

        <Col md={2} lg={2} style={figureStyle}>
          <Figure.Image 
            width={171}
            height={180}
            alt="171x180"
            src='https://images.pexels.com/photos/116725/pexels-photo-116725.jpeg?auto=compress&cs=tinysrgb&w=400'
            />
          <Figure.Caption>
            <h2 className='h2-style' style={{color:'white'}}>Porraige</h2>
            
          <Link to = '/order'>
          <Button style={{backgroundColor:'chocolate'}}>Order</Button>
          </Link>          
          </Figure.Caption>
        </Col>

        <Col md={2} lg={2} style={figureStyle}>
          <Figure.Image 
            width={171}
            height={180}
            alt="171x180"
            src='https://images.pexels.com/photos/9345670/pexels-photo-9345670.jpeg?auto=compress&cs=tinysrgb&w=400'
            />
          <Figure.Caption>
            <h4 className='h2-style' style={{color:'white'}}>Chapathies</h4>
            <Link to = '/order'>
            <Button style={{backgroundColor:'chocolate'}}>Order</Button>
          </Link>          
          </Figure.Caption>
        </Col>

        <Col md={2} lg={2} style={figureStyle}>
          <Figure.Image 
            width={171}
            height={180}
            alt="171x180"
            src='https://images.pexels.com/photos/9646843/pexels-photo-9646843.jpeg?auto=compress&cs=tinysrgb&w=400'
            />
          <Figure.Caption>
            <h2 className='h2-style' style={{color:'white'}}>Grill</h2>
            <Link to = '/order'>
            <Button style={{backgroundColor:'chocolate'}}>Order</Button>
          </Link>         
           </Figure.Caption>
        </Col>

        <Col md={2} lg={2} style={figureStyle}>
          <Figure.Image 
            width={171}
            height={180}
            alt="171x180"
            src='https://images.pexels.com/photos/5410410/pexels-photo-5410410.jpeg?auto=compress&cs=tinysrgb&w=400'
            />
          <Figure.Caption>
          <h2 className='h2-style' style={{ color: 'white', fontFamily: "'Joshpin Fans', sans-serif" }}>Briyani</h2>
          <Link to = '/order'>
          <Button style={{backgroundColor:'chocolate'}}>Order</Button>
          </Link>
          </Figure.Caption>
        </Col>
        
      </Row>

    </div>
    <Footer/>
    </>
  );
}

export default SinglePost;
