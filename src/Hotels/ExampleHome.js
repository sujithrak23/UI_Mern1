import React from 'react';
import ExampleHotel from './ExampleHotel';
import ExampleData from './ExampleData';

const ExampleHome = () => {
  return (
    <div>
    {ExampleData.hotelInfo.map((item,index)=>{
        return(
          <ExampleHotel 
          img={item.img} 
          title={item.title} 
          desc={item.desc} 
          location={item.location} 
          item={item}
          key={index}
          />
        )
      })}
  </div>
  )
};

export default ExampleHome;

