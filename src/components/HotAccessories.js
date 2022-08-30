import React from 'react'
import HotItemCard from '../components/HotItemCard.js'
import '../styles/HotAccessories.css'

const HotAccessories = ({music,musicCover,smartDevice,smartDeviceCover,home,homeCover,lifeStyle,lifeStyleCover,mobileAcc,mobileAccCover}) => {
  return (
    <div className='HotAccessories'>
      <div >
        <img src={musicCover || smartDeviceCover  || homeCover || lifeStyleCover || mobileAccCover} alt="Cover" />
      </div>

      <div>
        {
         music &&  music.map((item,index)=>(
                <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index}/>
            ))
        }
        {
         smartDevice &&   smartDevice.map((item,index)=>(
                <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index}/>
            ))
        }
        {
         home &&   home.map((item,index)=>(
                <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index}/>
            ))
        }
        {
         lifeStyle &&   lifeStyle.map((item,index)=>(
                <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index}/>
            ))
        }
        {
         mobileAcc &&   mobileAcc.map((item,index)=>(
                <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index}/>
            ))
        }
        
      </div>
    </div>
  )
}

export default HotAccessories
