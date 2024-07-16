import React from 'react'
import CardComponent from '../Card/CardComponent';
import LifecycleComponent from '../react_lifecycle/lifecycleComponent';

const ShopComponents = () => {
  const productData=[
    {
        imgUrl:"https://i.pinimg.com/564x/4d/0e/59/4d0e590a9a80480270a269b10907fc54.jpg",
        title:"Light",
        description:"Like daylight, It's golden like daylight,You gotta step into the daylight and let it go,Just let it go, let it go ",
    },
    {
        imgUrl:"https://i.pinimg.com/564x/57/5a/73/575a73114ca029ffa2e29cd14a661d53.jpg",
        title:"Dark",
        description:"Like daylight, It's golden like daylight,You gotta step into the daylight and let it go,Just let it go, let it go ",
    },
]; 
  return (
    <>
    <CardComponent data={productData} />
    <LifecycleComponent/>

    </>
    
  )
}



export default ShopComponents


