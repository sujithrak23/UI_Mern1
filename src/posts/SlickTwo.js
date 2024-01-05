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

<div className="container" >
    <hr style={{color:'white'}}/>
        <h3 style={{color:'white',fontFamily:"sans-serif",fontSize:'40px'}}>Top Restaurant In Your City</h3>
        <Slider {...settings}>
        <div>
            <img src="https://img.freepik.com/premium-photo/masala-dosa-is-south-indian-meal-served-with-sambhar-coconut-chutney-selective-focus_466689-22909.jpg?size=626&ext=jpg&uid=R131645230&ga=GA1.1.456192605.1702699190&semt=ais" 
            alt=""
            style={{ width: "100%" ,margin:'20px',borderRadius:'55px',padding:'15px'}}/>
          </div>

          

          <div>
          <img src="https://img.freepik.com/free-photo/indian-tasty-roti-composition_23-2149073358.jpg?size=626&ext=jpg&uid=R131645230&ga=GA1.1.456192605.1702699190&semt=ais" 
          alt=""
          style={{ width: "100%",margin:'20px',borderRadius:'55px',padding:'15px'}}/>
          </div>

          <div>
          <img src="https://img.freepik.com/free-photo/curry-fried-rice_1339-1819.jpg?size=626&ext=jpg&uid=R131645230&ga=GA1.1.456192605.1702699190&semt=ais" 
          alt=""
          style={{ width: "100%",margin:'20px',borderRadius:'55px' ,padding:'15px'}}/>
          </div>
          <div>

            
          <img src="https://img.freepik.com/premium-photo/idly-sambar-idli-with-sambhar-green-red-chutney-popular-south-indian-breakfast_466689-29517.jpg?size=626&ext=jpg&uid=R131645230&ga=GA1.1.456192605.1702699190&semt=ais" 
          alt=""
          style={{ width: "100%" ,margin:'20px',borderRadius:'55px',padding:'15px'}}/>
          </div>

          <div>
          <img src="https://img.freepik.com/premium-photo/sambar-vada-medu-vada-popular-south-indian-food-served-with-green-red-coconut-chutney-moody-background-selective-focus_466689-59620.jpg?size=626&ext=jpg&uid=R131645230&ga=GA1.1.456192605.1702699190&semt=ais" 
          alt=""
          style={{ width: "100%" ,margin:'20px',borderRadius:'55px',padding:'15px'}}/>
          </div>

          <div>
          <img src="https://img.freepik.com/free-photo/top-view-sandwich-rolls-sliced-with-salad-meat-inside-along-with-mayyonaise-salad-white-plate-brown-wooden-desk-snack-meal-sandwich_140725-23113.jpg?size=626&ext=jpg&uid=R131645230&ga=GA1.1.456192605.1702699190&semt=ais" 
          alt=""
          style={{ width: "100%" ,margin:'20px',borderRadius:'55px',padding:'15px'}}/>
          </div>

       

          <div>
          <img src="https://img.freepik.com/premium-photo/poori-masala-curry-aloo-sabzi-puri_466689-77508.jpg?size=626&ext=jpg&uid=R131645230&ga=GA1.1.456192605.1702699190&semt=ais" 
          alt=""
          style={{ width: "100%" ,margin:'20px',borderRadius:'55px',padding:'15px'}}/>
          </div>

          
          <div>
          <img src="https://img.freepik.com/premium-photo/uttapam-oothappam-is-dosa-like-dish-from-south-india-served-with-sambar-chutney_466689-14186.jpg?size=626&ext=jpg&uid=R131645230&ga=GA1.1.456192605.1702699190&semt=ais" 
          alt=""
          style={{ width: "100%" ,margin:'20px',borderRadius:'55px',padding:'15px'}}/>
          </div>

        </Slider>
      </div>
      </div>
    );
  }
}
