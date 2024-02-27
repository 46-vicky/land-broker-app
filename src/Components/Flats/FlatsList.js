import React from 'react'
import { useSelector } from 'react-redux'
import { IoList } from "react-icons/io5";


const FlatsList = () => {
  const allFlats = useSelector(state => state.flats.allFlats)
  const flatCard = allFlats.map((flat)=>(
  <div className='flat-card' key={flat.id}>
    <div className='flat-preview'>
      <img src={flat.imageUrl ? require(`../../assets/images/${flat.imageUrl}.jpg`) : ""} alt='image=preview'/>
    </div>
    <div className='flat-detail'>
      <ul>
        <li><span>Owner Name</span><p className='flat-ownername'>{flat.ownerName}</p></li>
        <li><span>Area</span><p className='flat-area'>{flat.area}</p></li>
        <li><span>Amount</span><p className='flat-amount'>{flat.amount}</p></li>
        <li><span>Discount</span><p className='flat-discount'>{flat.discount} %</p></li>
        <li><span>Features</span><p className='flat-feature'>{flat.features}</p></li>
      </ul>
      
      
      
      
      
    </div>
  </div>))
  return (
    <div className='flat-part-cont'>
     {(allFlats.length) ? (<><h2 className='list-head'><span><IoList /></span>Available Flats</h2><div className='flat-cont'>{flatCard}</div></>) : (<h2>No Result</h2>)}
    </div>
    
  )
}

export default FlatsList