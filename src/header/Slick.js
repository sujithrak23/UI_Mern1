import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        borderRadius: "50%",
        padding: "10px",
        right: "-30px",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        borderRadius: "50%",
        padding: "10px",
        left: "-30px",
      }}
      onClick={onClick}
    />
  );
}

export default class CustomArrows extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
        
        <div
        style={{
          backgroundColor: "#1a1a1a", 
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >  

            <div style={{display:'flex',alignItems:'center',padding:'50px'}}>
            <img 
            src="https://img.freepik.com/free-photo/medium-shot-smiley-woman-holding-tablet_23-2149005455.jpg?size=626&ext=jpg&uid=R131217777&ga=GA1.1.1438787942.1703130962&semt=ais"
            style={{width:'500px'}}
            />
            <img 
            src="https://img.freepik.com/premium-photo/food-delivery-man-helmet-bright-backpack-speeds-through-busy-streets-his-motorbike-motion-blur-generative-ai_213438-9198.jpg?size=626&ext=jpg&uid=R131217777&ga=GA1.1.1438787942.1703130962&semt=ais"
            style={{width:'500px'}}
            />
            <img 
            src="https://img.freepik.com/free-photo/young-woman-signing-documents-while-receiving-home-delivery-from-courier_637285-3572.jpg?size=626&ext=jpg&uid=R131217777&ga=GA1.1.1438787942.1703130962&semt=ais"
            style={{width:'500px'}}

            />
            </div>
            <h2 style={{color:'gray',textAlign:'center',fontFamily:"'Concert One',sans-serif",fontSize:'65px'}}>DO ORDER FOOD & GET DELIVERY</h2>
            <hr style={{color:'white'}}/>
            <hr style={{color:'white'}}/>


      
      <div className="container" >
        <h3 style={{color:'white',fontFamily:"sans-serif",fontSize:'40px'}}>Hey Foodiee, What,s on your mind??</h3>
        <Slider {...settings}>
        <div>
            <img src="https://img.freepik.com/premium-photo/indian-food-photography_627498-2679.jpg?size=626&ext=jpg&uid=R131217777&ga=GA1.1.1438787942.1703130962&semt=ais" 
            alt=""
            style={{ width: "100%" ,margin:'20px',borderRadius:'55px',padding:'15px'}}/>
          </div>

          <div>
          <img src="https://img.freepik.com/premium-photo/photo-closeup-shot-delicious-food_829042-124.jpg?size=626&ext=jpg&uid=R131217777&ga=GA1.1.1438787942.1703130962&semt=ais" 
          alt=""
          style={{ width: "100%" ,margin:'20px',borderRadius:'55px',padding:'15px'}}/>
          </div>

          <div>
          <img src="https://img.freepik.com/premium-photo/photo-closeup-shot-delicious-food_829042-81.jpg?size=626&ext=jpg&uid=R131217777&ga=GA1.1.1438787942.1703130962&semt=ais" 
          alt=""
          style={{ width: "100%",margin:'20px',borderRadius:'55px',padding:'15px'}}/>
          </div>

          <div>
          <img src="https://img.freepik.com/premium-photo/yummy-pasta-with-spicy-tomato-sauce_2562-35.jpg?size=626&ext=jpg&uid=R131217777&ga=GA1.1.1438787942.1703130962&semt=ais" 
          alt=""
          style={{ width: "100%",margin:'20px',borderRadius:'55px' ,padding:'15px'}}/>
          </div>

          <div>
          <img src="https://img.freepik.com/free-photo/grilled-meat-veggies-wooden-plate-generated-by-ai_188544-10123.jpg?size=626&ext=jpg&uid=R131217777&ga=GA1.1.1438787942.1703130962&semt=ais" 
          alt=""
          style={{ width: "100%" ,margin:'20px',borderRadius:'55px',padding:'15px'}}/>
          </div>

          <div>
          <img src="https://img.freepik.com/premium-photo/photo-closeup-shot-delicious-food_829042-123.jpg?size=626&ext=jpg&uid=R131217777&ga=GA1.1.1438787942.1703130962&semt=ais" 
          alt=""
          style={{ width: "100%" ,margin:'20px',borderRadius:'55px',padding:'15px'}}/>
          </div>

          <div>
          <img src="https://img.freepik.com/free-photo/grilled-beef-burger-with-fries-cheese-tomato-generative-ai_188544-8466.jpg?size=626&ext=jpg&uid=R131645230&ga=GA1.1.456192605.1702699190&semt=ais" 
          alt=""
          style={{ width: "100%" ,margin:'20px',borderRadius:'55px',padding:'15px'}}/>
          </div>

          <div>
          <img src="https://img.freepik.com/free-photo/fried-dumplings-samosas-ready-eat-generated-by-ai_188544-43164.jpg?size=626&ext=jpg&uid=R131645230&ga=GA1.1.456192605.1702699190&semt=ais" 
          alt=""
          style={{ width: "100%" ,margin:'20px',borderRadius:'55px',padding:'15px'}}/>
          </div>

          <div>
          <img src="https://img.freepik.com/free-photo/plate-chinese-food-with-bowl-sauce-beef-wrap_188544-8400.jpg?size=626&ext=jpg&uid=R131645230&ga=GA1.1.456192605.1702699190&semt=ais" 
          alt=""
          style={{ width: "100%" ,margin:'20px',borderRadius:'55px',padding:'15px'}}/>
          </div>
        </Slider>
      </div>
      </div>
    );
  }
}
