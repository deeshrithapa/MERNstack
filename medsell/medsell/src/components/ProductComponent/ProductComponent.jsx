import React, { useState } from 'react';
import FormValidation from '../FormValidation/FormValidation';

const ProductComponent = () => {
  // const [productName, setProductName] = useState("");
  // const [productType, setProductType] = useState("");
  // const [ProductPrice, setProductPrice] = useState("");

  return (
    <>
      <div className='flex justify-center bg-slate-400 m-5 p-3 w-32 text-lg rounded-2xl hover:bg-teal-600 hover:text-white'>  Add Product  </div>

      <FormValidation/>

      {/* <h1>{productName}</h1>
      <h2>{productType}</h2>
      <h2>{setProductPrice}</h2>

      <form className='flex flex-col items-center my-4 space-y-4'>
     
      <div className='flex items-center'>
          <label className='text-lg mr-4' For='name'>Product Name</label>
          <input
            onChange={(e) => setProductName(e.target.value)}
            className='text-lg ml-10 p-1 w-64'
            id='name'
            type='text'
            name='ProductName'
            placeholder='Enter Product Name'
          />
        </div>

        <div className='flex items-center'>
          <label className='text-lg mr-4' For='type'>Product Type</label>
          <input
            onChange={(e) => setProductType(e.target.value)}
            className='text-lg ml-12 p-1 w-64'
            id='type'
            type='text'
            name='ProductType'
            placeholder='Enter Product Type'
          />
        </div>

        <div className='flex items-center'>
          <label className='text-lg mr-4' For='price'>Product Price</label>
          <input
            onChange={(e) => setProductPrice(e.target.value)}
            className='text-lg p-1 w-64 ml-12'
            id='price'
            type='text'
            name='ProductDescription'
            placeholder='Enter Product Price'
          />
        </div>

        <div>
          <button className='bg-slate-500 w-24 p-2 rounded-xl text-white'> Submit</button>
        </div>      

      </form> */}
    </>
  );
}

export default ProductComponent;
