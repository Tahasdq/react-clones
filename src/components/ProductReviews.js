import React from 'react'
import Product from '../components/Product.js'
import  '../styles/ProductReviews.css'

const ProductReviews = ({productReviews}) => {
  return (
    <div className='ProductReviews'>
        {
            productReviews.map((item,index)=>(

                <Product  key={item.image} index={index} pimage={item.image} preview={item.preview} pname={item.name} pPrice={item.price}/>
            ))
        }
    </div>
  )
}

export default ProductReviews
