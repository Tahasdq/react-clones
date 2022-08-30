import React from 'react'
import '../styles/starProducts.css'

const StarProducts = ({starProduct}) => {
  return (
    <div className='starProducts'>
        <div>
        <a href= {starProduct[0].url}> <img src={starProduct[0].image} alt="1st position" /></a>
        </div>
        <div>
            <a href={starProduct[1]}>
                <img src={starProduct[1].image} alt="" />
            </a>
            <a href={starProduct[1]}>
                <img src={starProduct[2].image} alt="" />
            </a>
            <a href={starProduct[1]}>
                <img src={starProduct[3].image} alt="" />
            </a>
        </div>
    </div>
  )
}

export default StarProducts
