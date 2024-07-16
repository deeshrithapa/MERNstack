import React from 'react';
import CardComponent from '../Card/CardComponent';
import EventHandling from '../EventHandling/EventHandling';
import EventFunctionProps from '../EventHandling/EventFunctionProps';
import ParentComponent from '../PropDrilling/ParentComponent';
import ListViewComponent from '../ListView/ListViewComponent';
import PropsParent from '../props/PropsParent';

const HomeComponents = () => {
  const productData = [
    {
      imgUrl: "https://i.pinimg.com/564x/7f/fb/ec/7ffbec26b35f709593ce21f951c44430.jpg",
      title: "Title1",
      description: "Description of the image",
    },
    {
      imgUrl: "https://i.pinimg.com/736x/be/45/93/be45936a85069ab50f5f585e4281a2da.jpg",
      title: "Title2",
      description: "Description of the image",
    },
  ];

  const listItems = ['Harry Potter', 'Hunger Games', 'Divergent'];

  return (
    <div className="p-6 bg-gray-200 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Home Components</h1>

      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Product Cards</h2>
        <CardComponent data={productData} />
      </div>      

      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Event Function Props</h2>
        <EventFunctionProps />
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Parent Component</h2>
        <ParentComponent />
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Books</h2>
        <ListViewComponent items={listItems} />
      </div>

      
      <div className="bg-white shadow-lg rounded-lg p-8 mt-5">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Chiild to Parent</h2>
        <PropsParent />
      </div>
    </div>
  );
};

export default HomeComponents;
