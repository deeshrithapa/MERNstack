import React from 'react';
import CardComponent from '../Card/CardComponent';
import EventHandling from '../EventHandling/EventHandling';
import EventFunctionProps from '../EventHandling/EventFunctionProps';
import ParentComponent from '../PropDrilling/ParentComponent';

const HomeComponents = () => {
  const productData=[
    {
        imgUrl:"https://i.pinimg.com/564x/7f/fb/ec/7ffbec26b35f709593ce21f951c44430.jpg",
        title:"Title1",
        description:"Descriptin of the image",
    },
    {
        imgUrl:"https://i.pinimg.com/736x/be/45/93/be45936a85069ab50f5f585e4281a2da.jpg",
        title:"Title1",
        description:"Descriptin of the image",
    },
]; 
return (
  <div>
      <CardComponent data={productData} />
      <EventFunctionProps />
      <ParentComponent/>
  </div>
);
}

export default HomeComponents;
