import React from 'react'
import { useSelector } from 'react-redux'


const FlatsList = () => {
  const allFlats = useSelector(state => state.flats.allFlats)
<<<<<<< HEAD
  const flatCard = allFlats.map((flat)=>(
=======
  
  const flatCard = allFlats.map((flat)=>{
    let imageSrc = flat.imageUrl ? require(`../../assets/images/${flat.imageUrl}.jpg`) : '';
    console.log(imageSrc);
>>>>>>> f804fe3a20c79cc514df3beadffd884c7ac583ea
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
  console.log(flatCard)
  return (
    <div className='flat-part-cont'>
      {allFlats && <h2>Available Flats</h2>}
      <div className='flat-cont'>{flatCard}</div>
    </div>
    
  )
}

export default FlatsList