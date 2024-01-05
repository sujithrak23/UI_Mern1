import React from 'react'
import Button from 'react-bootstrap/Button';
import Stickybar from '../NavBar/Stickybar';
import Accordion from 'react-bootstrap/Accordion';
import Image from 'react-bootstrap/Image';
import Footer from '../pages/Footer/Footer';
import {Link} from 'react-router-dom';

function HydrabadHotel() {
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
         <div className='container' style={{width:'1200px'}}>
          <div>
            <Image 
            src="https://img.freepik.com/free-photo/fresh-gourmet-meal-beef-taco-salad-plate-generated-by-ai_188544-13382.jpg?size=626&ext=jpg&uid=R131645230&ga=GA1.1.456192605.1702699190&semt=ais" 
            fluid 
            style={{width:'100%',height:'450px'}}
            />;
            <h1 style={{color:'white'}}>Hydrabad Foodiee</h1>
            <h5 style={{color:'gray'}}>Kumar Nagar,Tirupur</h5>
            <h5 style={{color:'gray'}}>23km ago</h5>

            </div>

         <Accordion defaultActiveKey={['0','1','2']} alwaysOpen>


       {/*menu one*/}
      <Accordion.Item eventKey="0">
        <Accordion.Header >Breakfast</Accordion.Header>
        <Accordion.Body style={{color:'white',backgroundColor:'#1a1a1a'}}>
{/******* */}
        <div style={{display:'flex',flexDirection:'row'}}>
        <div style={{display:'flex', flexDirection: 'column', alignItems: 'flex-start',flex:'8' }}>
          <h2>Ghee Pongal</h2>
          <h4>Rs.90</h4>
          <p>A South Indian breakfast dish made with rice and lentils cooked with spices.</p>
          </div>
          <div style={{display:'flex',flexDirection:'column'}}>
          <img 
        src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/pw1nswczwyswnhb9bn6a'
        style={{height:'120px',width:'150px', alignItems:'end',marginLeft:'650px'}}
        />
        <Button style={{alignItems:'end',marginLeft:'675px',width:'100px',color:'black',backgroundColor:'white'}}>Add Cart</Button>
        </div>
        </div>

        <hr style={{color:'white'}}/>

        <div style={{display:'flex',flexDirection:'row'}}>
        <div style={{display:'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <h2>Idlies[2 pieces]</h2>
          <h4>Rs.40</h4>
          <p>A South Indian snack made with steamed rice cakes.</p>
          </div>
          <div style={{display:'flex',flexDirection:'column'}}>
          <img 
        src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/kkaee7fal03jui1rztke'
        style={{height:'120px',width:'150px', alignItems:'end',marginLeft:'750px'}}
        />

       <Link to='/cart'>
        <Button style={{alignItems:'end',marginLeft:'775px',width:'100px',color:'black',backgroundColor:'white'}}>
          Add Cart
          </Button>
          </Link>
          
        </div>
        </div>

        <hr style={{color:'white'}}/>

        <div style={{display:'flex',flexDirection:'row'}}>
        <div style={{display:'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <h2>Poori[2 pieces]</h2>
          <h4>Rs.40</h4>
          <p>Deep-fried bread made with wheat flour, typically served with a side dish like chana masala or potato masala.</p>
          </div>
          <div style={{display:'flex',flexDirection:'column'}}>
          <img 
        src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/pwabn4qcmem6gyoz1ld3'
        style={{height:'120px',width:'150px', alignItems:'end',marginLeft:'650px'}}
        />
        <Button style={{alignItems:'end',marginLeft:'675px',width:'100px',color:'black',backgroundColor:'white'}}>Add Cart</Button>
        </div>
        </div>

        <hr style={{color:'white'}}/>

        <div style={{display:'flex',flexDirection:'row'}}>
        <div style={{display:'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <h2>Ghee Dosa[1]</h2>
          <h4>Rs.40</h4>
          <p>A South Indian breakfast dish made with rice and lentils cooked with spices.</p>
          </div>
          <div style={{display:'flex',flexDirection:'column'}}>
          <img 
        src='https://img.freepik.com/premium-photo/masala-dosa-is-south-indian-meal-served-with-sambhar-coconut-chutney-selective-focus_466689-22925.jpg?size=626&ext=jpg&uid=R131645230&ga=GA1.2.456192605.1702699190&semt=ais'
        style={{height:'120px',width:'150px', alignItems:'end',marginLeft:'650px'}}
        />
        <Button style={{alignItems:'end',marginLeft:'675px',width:'100px',color:'black',backgroundColor:'white'}}>Add Cart</Button>
        </div>
        </div>

        </Accordion.Body>
      </Accordion.Item>

    {/*menu two*/}
      <Accordion.Item eventKey="1">
        <Accordion.Header>Veg-Meals</Accordion.Header>
        <Accordion.Body style={{color:'white',backgroundColor:'#1a1a1a'}}>

        <div style={{display:'flex',flexDirection:'row'}}>
        <div style={{display:'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <h2>Veg-Briyani</h2>
          <h4>Rs.80</h4>
          <p>A South Indian breakfast dish made with rice and lentils cooked with spices.</p>
          </div>
          <div style={{display:'flex',flexDirection:'column'}}>
          <img 
        src='https://img.freepik.com/premium-photo/indian-vegetable-pulav-biryani-made-using-basmati-rice-served-terracotta-bowl-selective-focus_466689-55615.jpg?size=626&ext=jpg&uid=R131645230&ga=GA1.1.456192605.1702699190&semt=ais'
        style={{height:'120px',width:'150px', alignItems:'end',marginLeft:'650px'}}
        />
        <Button style={{alignItems:'end',marginLeft:'675px',width:'100px',color:'black',backgroundColor:'white'}}>Add Cart</Button>
        </div>
        </div>

        <hr style={{color:'white'}}/>

        <div style={{display:'flex',flexDirection:'row'}}>
        <div style={{display:'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <h2>SambarSatham</h2>
          <h4>Rs.60</h4>
          <p>A South Indian snack made with steamed rice cakes.</p>
          </div>
          <div style={{display:'flex',flexDirection:'column'}}>
          <img 
        src='https://img.freepik.com/premium-photo/bowl-soup-with-green-leaves-spoon-it_662214-82822.jpg?size=626&ext=jpg&uid=R131645230&ga=GA1.1.456192605.1702699190&semt=sph'
        style={{height:'120px',width:'150px', alignItems:'end',marginLeft:'750px'}}
        />
        <Button style={{alignItems:'end',marginLeft:'775px',width:'100px',color:'black',backgroundColor:'white'}}>Add Cart</Button>
        </div>
        </div>

        <hr style={{color:'white'}}/>

        <div style={{display:'flex',flexDirection:'row'}}>
        <div style={{display:'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <h2>Veg-Meals</h2>
          <h4>Rs.120</h4>
          <p>Deep-fried bread made with wheat flour, typically served with a side dish like chana masala or potato masala.</p>
          </div>
          <div style={{display:'flex',flexDirection:'column'}}>
          <img 
        src='https://img.freepik.com/premium-photo/maharashtrian-food-thali-platter-mumbai-style-meal-from-indian_466689-5452.jpg?size=626&ext=jpg&uid=R131645230&ga=GA1.1.456192605.1702699190&semt=ais'
        style={{height:'120px',width:'150px', alignItems:'end',marginLeft:'650px'}}
        />
        <Button style={{alignItems:'end',marginLeft:'675px',width:'100px',color:'black',backgroundColor:'white'}}>Add Cart</Button>
        </div>
        </div>

        <hr style={{color:'white'}}/>

        <div style={{display:'flex',flexDirection:'row'}}>
        <div style={{display:'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <h2>Panner Gravy</h2>
          <h4>Rs.80</h4>
          <p>A South Indian breakfast dish made with rice and lentils cooked with spices.</p>
          </div>
          <div style={{display:'flex',flexDirection:'column'}}>
          <img 
        src='https://img.freepik.com/free-photo/flat-lay-pakistani-food-arrangement_23-2148825110.jpg?size=626&ext=jpg&uid=R131645230&ga=GA1.1.456192605.1702699190&semt=ais'
        style={{height:'120px',width:'150px', alignItems:'end',marginLeft:'650px'}}
        />
        <Button style={{alignItems:'end',marginLeft:'675px',width:'100px',color:'black',backgroundColor:'white'}}>Add Cart</Button>
        </div>
        </div>
           
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header >Dinner</Accordion.Header>
        <Accordion.Body style={{color:'white',backgroundColor:'#1a1a1a'}}>

<div style={{display:'flex',flexDirection:'row'}}>
<div style={{display:'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
  <h2>Chapathi[2 pieces]</h2>
  <h4>Rs.75</h4>
  <p>A South Indian breakfast dish made with rice and lentils cooked with spices.</p>
  </div>
  <div style={{display:'flex',flexDirection:'column'}}>
  <img 
src='https://img.freepik.com/free-photo/indian-tasty-roti-composition_23-2149073358.jpg?size=626&ext=jpg&uid=R131645230&ga=GA1.1.456192605.1702699190&semt=ais'
style={{height:'120px',width:'150px', alignItems:'end',marginLeft:'650px'}}
/>
<Button style={{alignItems:'end',marginLeft:'675px',width:'100px',color:'black',backgroundColor:'white'}}>Add Cart</Button>
</div>
</div>

<hr style={{color:'white'}}/>

<div style={{display:'flex',flexDirection:'row'}}>
<div style={{display:'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
  <h2>Parota[2 pieces]</h2>
  <h4>Rs.90</h4>
  <p>A South Indian snack made with steamed rice cakes.</p>
  </div>
  <div style={{display:'flex',flexDirection:'column'}}>
  <img 
src='https://img.freepik.com/free-photo/close-up-bread-cooked-indian-style_23-2148294972.jpg?size=626&ext=jpg&uid=R131645230&ga=GA1.1.456192605.1702699190&semt=ais'
style={{height:'120px',width:'150px', alignItems:'end',marginLeft:'750px'}}
/>
<Button style={{alignItems:'end',marginLeft:'775px',width:'100px',color:'black',backgroundColor:'white'}}>Add Cart</Button>
</div>
</div>

<hr style={{color:'white'}}/>

<div style={{display:'flex',flexDirection:'row'}}>
<div style={{display:'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
  <h2>Ghee Dosa[1]</h2>
  <h4>Rs.40</h4>
  <p>A South Indian breakfast dish made with rice and lentils cooked with spices.</p>
  </div>
  <div style={{display:'flex',flexDirection:'column'}}>
  <img 
src='https://img.freepik.com/premium-photo/masala-dosa-is-south-indian-meal-served-with-sambhar-coconut-chutney-selective-focus_466689-22925.jpg?size=626&ext=jpg&uid=R131645230&ga=GA1.2.456192605.1702699190&semt=ais'
style={{height:'120px',width:'150px', alignItems:'end',marginLeft:'650px'}}
/>
<Button style={{alignItems:'end',marginLeft:'675px',width:'100px',color:'black',backgroundColor:'white'}}>Add Cart</Button>
</div>
</div>

<hr style={{color:'white'}}/>

<div style={{display:'flex',flexDirection:'row'}}>
<div style={{display:'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
  <h2>Panner Gravy</h2>
  <h4>Rs.80</h4>
  <p>A South Indian breakfast dish made with rice and lentils cooked with spices.</p>
  </div>
  <div style={{display:'flex',flexDirection:'column'}}>
  <img 
src='https://img.freepik.com/free-photo/flat-lay-pakistani-food-arrangement_23-2148825110.jpg?size=626&ext=jpg&uid=R131645230&ga=GA1.1.456192605.1702699190&semt=ais'
style={{height:'120px',width:'150px', alignItems:'end',marginLeft:'650px'}}
/>
<Button style={{alignItems:'end',marginLeft:'675px',width:'100px',color:'black',backgroundColor:'white'}}>Add Cart</Button>
</div>
</div>
   
</Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header >Accordion Item #1</Accordion.Header>
        <div style={{display:'flex',backgroundColor:'#1a1a1a'}}>
        <Accordion.Body style={{display:'flex',color:'white'}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          <img 
        src='https://img.freepik.com/free-photo/glass-cola-with-ice-cubes_155003-462.jpg?size=626&ext=jpg&uid=R131645230&ga=GA1.1.456192605.1702699190&semt=ais'
        style={{height:'100px',width:'100px'}}
        />
        </Accordion.Body>
        </div>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header >Accordion Item #1</Accordion.Header>
        <div style={{display:'flex',backgroundColor:'#1a1a1a'}}>
        <Accordion.Body style={{display:'flex',color:'white'}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. 
          <img 
        src='https://img.freepik.com/free-photo/glass-cola-with-ice-cubes_155003-462.jpg?size=626&ext=jpg&uid=R131645230&ga=GA1.1.456192605.1702699190&semt=ais'
        style={{height:'100px',width:'100px'}}
        />
        </Accordion.Body>
        </div>
      </Accordion.Item>
    </Accordion>
         </div>
         </div>
         <Footer/>
  </>
  )
}
export default HydrabadHotel;