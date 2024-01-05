import React from 'react';
import Figure from 'react-bootstrap/Figure';
import { Carousel } from 'react-bootstrap';

const Slideimg = () => {
  const fixedWidth = 790;
  const fixedHeight = 500;
  

  return (
    <Carousel>
      <Carousel.Item>
        <Figure.Image
          width={fixedWidth}
          height={fixedHeight}
          alt="900x900"
          src='https://img.freepik.com/premium-photo/chicken-dhum-biriyani-using-jeera-rice-spices-arranged-earthen-ware_527904-513.jpg?size=626&ext=jpg&ga=GA1.1.302407595.1702627135&semt=ais'
        />
        <Figure.Image
          width={fixedWidth}
          height={fixedHeight}
          alt="900x900"
          src='https://img.freepik.com/free-photo/front-view-burger-with-french-fries_23-2148234991.jpg?size=626&ext=jpg&uid=R131217777&ga=GA1.1.1352053917.1702870712&semt=ais'
        />
        <Carousel.Caption>
          <h1 style={{fontFamily:"'Concert One', sans-serif" , color:'yellow'}}>Eat local, taste global</h1>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Figure.Image
          width={fixedWidth}
          height={fixedHeight}
          alt="900x900"
          src='https://img.freepik.com/premium-photo/ice-cream-scoops-bowl-mixed-ice-cream-ice-cream-cup-black-background_64762-40.jpg?size=626&ext=jpg&uid=R131217777&ga=GA1.1.1352053917.1702870712&semt=ais'
        />
        <Figure.Image
          width={fixedWidth}
          height={fixedHeight}
          alt="900x900"
          src='https://img.freepik.com/premium-photo/slices-pizza-with-mozzarella-cheese-tomatoes-olives-wooden-boardgenerative-ai_391052-12631.jpg?size=626&ext=jpg&uid=R131217777&ga=GA1.1.1352053917.1702870712&semt=ais'
        />
        <Carousel.Caption>
          <h1 style={{fontFamily:"'Concert One', sans-serif" , color:'yellow'}}>Fresh and fabulous, every day</h1>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Figure.Image
          width={fixedWidth}
          height={fixedHeight}
          alt="900x900"
          src='https://img.freepik.com/premium-photo/healthy-fresh-different-smoothie-cocktail-beverage_136404-169.jpg?size=626&ext=jpg&uid=R131217777&ga=GA1.1.1352053917.1702870712&semt=ais'
        />
        <Figure.Image
          width={fixedWidth}
          height={fixedHeight}
          alt="900x900"
          src='https://img.freepik.com/free-photo/aloo-paratha-gobi-paratha-also-known-as-potato-cauliflower-stuffed-flatbread-dish-originating-from-indian-subcontinent_466689-76172.jpg?size=626&ext=jpg&uid=R131217777&ga=GA1.1.1352053917.1702870712&semt=ais'
        />
        <Carousel.Caption>
          <h1 style={{fontFamily:"'Concert One', sans-serif" , color:'yellow'}}>Taste the love in every bite.</h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slideimg;
