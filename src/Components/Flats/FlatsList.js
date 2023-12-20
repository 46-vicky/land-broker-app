import React from 'react'
import { useSelector } from 'react-redux'

const FlatsList = () => {
  const allFlats = useSelector(state => state.flats.allFlats)
  
  const flatCard = allFlats.map((flat)=>{
    let imageSrc = flat.imageUrl ? require(`../../assets/images/${flat.imageUrl}.jpg`) : '';
    console.log(imageSrc);
  <div className='flat-card' key={flat.id}>
    <div className='flat-preview'>
      <img src={imageSrc} alt='image=preview'/>
    </div>
    <div className='flat-detail'>
      <p>{flat.ownerName}</p>
      <p>{flat.area}</p>
      <p>{flat.Amount}</p>
      <p>{flat.discount}</p>
      <p>{flat.features}</p>
    </div>
  </div>})
  return (
    <div>{flatCard}</div>
  )
}

export default FlatsList