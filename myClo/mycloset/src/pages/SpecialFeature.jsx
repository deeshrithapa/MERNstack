import React from 'react';
import './SpecialFeature.css';

const SpecialFeature = () => {
  const features = [
    {
      image: 'https://i.pinimg.com/736x/2b/b9/b8/2bb9b86d9da58f756294296ba2035982.jpg',
      description: 'Feature 1 description',
    },
    {
      image: 'https://i.pinimg.com/564x/69/78/b0/6978b013dc3852af795fa5a7ab0dc32a.jpg',
      description: 'Feature 2 description',
    },
    {
      image: 'https://i.pinimg.com/564x/9e/5b/d0/9e5bd0a1353088147c2ed8634c3f5ded.jpg',
      description: 'Feature 3 description',
    },
    {
        image: 'https://i.pinimg.com/736x/2b/b9/b8/2bb9b86d9da58f756294296ba2035982.jpg',
        description: 'Feature 1 description',
      },
      {
        image: 'https://i.pinimg.com/564x/69/78/b0/6978b013dc3852af795fa5a7ab0dc32a.jpg',
        description: 'Feature 2 description',
      },    
  ];

  return (
    <div className="special-feature bg-beige py-10 px-4">
      <h2 className="text-center text-3xl font-bold mb-6">Special Feature</h2>
      <div className="feature-cards flex overflow-x-auto space-x-4 justify-center">
        {features.map((feature, index) => (
          <div key={index} className="card flex-none w-64 bg-card rounded-lg shadow-lg p-4">
            <img src={feature.image} alt={`Feature ${index + 1}`} className="w-full h-40 object-cover rounded-t-lg" />
            <p className="mt-2 text-gray-700">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialFeature;
