import React, { useEffect, useRef, useState } from 'react'
import { useFetchCollection } from '../../hooks/useFetchCollection';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';

const ownerNameREGX = /^[a-zA-Z][a-zA-Z]{2,23}$/;
const areaNameREGX = /^[a-zA-Z][a-zA-Z]{2,23}$/;
const imageUrlREGX = /^[a-z0-9]{2,23}.*\.jpg$/;

const AddFlats = ({setOpenPoup}) => {
    const navigate = useNavigate()
    const ownerRef = useRef();

    const [ownerName,setOwnerName] = useState("")
    const [isValidOwnerName,setIsValidOwnerName] = useState(false)
    const [ownerNameError,SetOwnerNameError] = useState("")

    const [flatType,setFlatType] = useState("2BHK")

    const [area,setArea] = useState("")
    const [areaNameErr,setAreaNameErr] = useState("")
    const [isValidAreaName,setIsValidAreaName] = useState(false)

    const [amount,setAmount] = useState("")
    const [isValidAmount,setIsValidAmount] = useState(false)
    const [amountErr,setAmountErr] = useState("")

    const [discount,setDiscount] = useState("")
    const [isValidDiscount,setIsValidDiscount] = useState(false)   
    const [discountErr,setDiscountErr] = useState("")

    const [imageUrl,setImageUrl] = useState("")
    const [imageErr,setImageErr] = useState("")
    const [isValidImage,setIsValidImage] = useState(false)

    const [feature,setFeature] = useState("")
    const [featureErr,setFeatureErr] = useState("")
    const [isValidFeature,setIsValidFeature] = useState(false)

    const [featuresArr,setFeatureArr] = useState([])

    const {createData} = useFetchCollection()

    const allPlans = useSelector(state => state.plans.allPlans)
    const plansList = allPlans.map((plan, index) => <option value={plan.id} key={plan.id}>{plan.planName}</option>)

  
    useEffect(()=>{
        ownerRef.current.focus()
    },[])

    useEffect(()=>{
            setIsValidAreaName(areaNameREGX.test(area))
            if(areaNameREGX.test(area)){
                setAreaNameErr("")
            }else if(area !== "" && !areaNameREGX.test(area)){
                setAreaNameErr("*Invalid Area Name")
            }   
    },[area])

    useEffect(()=>{
        setIsValidOwnerName(ownerNameREGX.test(ownerName))
        if(ownerNameREGX.test(ownerName)){
            SetOwnerNameError("")
        }else if(ownerName !== "" && !ownerNameREGX.test(ownerName)){
            SetOwnerNameError("*Should be Minimum 3 Charcters")
        }   
    },[ownerName])

    useEffect(()=>{
        setIsValidImage(imageUrlREGX.test(imageUrl))
        console.log(imageUrlREGX.test(imageUrl))
        if(imageUrlREGX.test(imageUrl)){
            setImageErr("")
        }else if(imageUrl !== "" && !imageUrlREGX.test(imageUrl)){
            setImageErr("*Invalid URL")
        }  
    },[imageUrl])

    const validateOwnerName = (ownerName)=>{
        if(ownerName.trim() === ""){
            SetOwnerNameError("*Enter Owner Name")
            setIsValidOwnerName(false)
        }
        setOwnerName(ownerName.replace(/[^a-zA-Z0-9 ]/g, ""));
    }

    const validateArea = (area)=>{
        if(area.trim() === ""){
            setAreaNameErr("*Enter Area")
            setIsValidAreaName(false)
        }
        setArea(area);
    }

    const validateAmount = (amount)=>{
        if(amount.trim() == ""){
            setAmountErr("*Enter Amount")
            setIsValidAmount(false)
            setAmount("")
        }else{
            setAmount(Number(amount.replace(/[^0-9]/g, "")));
            setIsValidAmount(true)
        }  
    }

    const validateDiscount = (discount)=>{
        if(discount.trim()==""){
            setDiscountErr("*Enter Discount")
            setIsValidDiscount(false)
            setDiscount("")
        }else{
            setDiscount(Number(discount.replace(/[^0-9.]/g, "")));
            setIsValidDiscount(true);
        }
        
    }

    const validateImageUrl = (value)=>{
        console.log(value)
        if(value.trim()==""){
            setImageErr("")
            setIsValidImage(false)
            setImageUrl("")
        }
        setImageUrl(value.replace(/[^a-zA-Z0-9.]/g, ""))
    }

    const validateFeatures = (feature)=>{
        if(feature.trim()==""){
            setFeatureErr("*Enter Features")
            setIsValidFeature(false)
            setFeature("")
        }else{
            setFeature(feature)
            setFeatureErr("")
        }
        
    }

    const createFeature = ()=>{
        if(feature !== ""){
            setFeatureArr(featuresArr => [...featuresArr,feature]);
            setFeatureErr("");
            setIsValidFeature(true);
            setFeature("")
        }  
    } 

    const removeTag = (value)=>{
        const featuresVal = featuresArr.filter((feature)=>feature !== value);
        setFeatureArr(featuresVal)
        if(featuresVal.length == 0){           
            setFeatureErr("*Enter Features")
            setIsValidFeature(false)
        }
    }

    const createNewFlat = ()=>{
        if(featuresArr.length < 0){
            setFeatureErr("*Enter Features")
            setIsValidFeature(false)
        }else{
            setFeatureErr("")
            setIsValidFeature(true)

            const newFlat = {
                ownerName,
                flatType,
                area,
                amount,
                discount,
                imageUrl,
                features : featuresArr.toString()
            }
            console.log(newFlat);
           
            const ResultFun = (response)=>{
                console.log(response)
            }
            if(newFlat){
                createData('flats',newFlat,ResultFun)
            }
        }
    }
  return (
    <div className='AddPlan-cont'>
        <div className='add-flat-box'>
            <h2>Add New Flat</h2>
            <span className='close-btn' onClick={()=>setOpenPoup(false)}>&#x2716;</span>
            {/* {isPlanAdded ? <p className='successMsg'>Plan Added Successfully!</p> : ""} */}
            <form className='add-plan-form' onSubmit={(e)=>e.preventDefault()}>
                <ul>
                    <li>
                        <label htmlFor='owner-name'>Owner Name</label>
                        <div className='poup-input'>
                            {isValidOwnerName === false  ? <p className="Err-field">{ownerNameError}</p>:""}
                            <input
                            type='text'
                            ref={ownerRef}
                            id='owner-name'
                            value={ownerName}
                            className='plan-name-input'
                            onChange={(e)=>validateOwnerName(e.target.value)}
                            />
                        </div> 
                    </li>
                    <li>
                        <label htmlFor='flat-typ'>Flat Type</label>
                        <div className='poup-input'>
                            <select 
                            id='flat-typ'
                            value={flatType}
                            onChange={(e)=>setFlatType(e.target.value)}
                            >
                            <option value="2BHK">2BHK</option>
                            <option value="3BHK">3BHK</option>
                            <option value="4BHK">4BHK</option>                       
                            </select>
                        </div>
                    </li> 
                    <li>
                        <label htmlFor='area'>
                            Area
                        </label>
                        <div className='poup-input'>
                            {isValidAreaName === false  ? <p className="Err-field">{areaNameErr}</p>:""}
                            <input
                            type='text'
                            id='area'
                            value={area}
                            onChange={(e)=>validateArea(e.target.value)}
                            />
                        </div>                       
                    </li>
                    <li>
                        <label htmlFor='amount'>
                            Amount
                        </label>
                        <div className='poup-input'>
                            {isValidAmount === false  ? <p className="Err-field">{amountErr}</p>:""}
                            <input
                            type='text'
                            id='amount'
                            value={amount}
                            onChange={(e)=>validateAmount(e.target.value)}
                            />
                        </div>                       
                    </li>
                    <li>
                        <label htmlFor='discount'>
                            Discount
                        </label>
                        <div className='poup-input'>
                            {isValidDiscount === false  ? <p className="Err-field">{discountErr}</p>:""}
                            <input
                            type='text'
                            id='discount'
                            value={discount}
                            onChange={(e)=>validateDiscount(e.target.value)}
                            />
                        </div>                       
                    </li>  
                    <li>
                        <label htmlFor='image'>
                            Image
                        </label>
                        <div className='poup-input'>
                            {isValidImage === false  ? <p className="Err-field">{imageErr}</p>:""}
                            <input
                            type='text'
                            id='image'
                            value={imageUrl}
                            onChange={(e)=>validateImageUrl(e.target.value)}
                            />
                        </div>
                    </li>
                    <li className='feature-part'>
                            <div className='feature-input-part'>
                                <label htmlFor='features'>
                                    Features
                                </label>
                                <div className='feature-cnt'>
                                    {isValidDiscount === false  ? <p className="Err-field">{featureErr}</p>:""}
                                    <div className='feature-box'>
                                        <input
                                        type='text'
                                        id='features'
                                        value={feature}
                                        onChange={(e)=>validateFeatures(e.target.value)}
                                        />
                                        <button type="btn" className='add-feature-btn' onClick={()=>createFeature()}>+</button>
                                    </div>
                                </div>
                            </div>    
                            <ul className='fetaurs-Cont'>
                                {featuresArr.map((feature, index) => (
                                    <li className='feature-tag' key={index}>{feature}<button aria-label='remove-tag' onClick={()=>removeTag(feature)}></button></li>
                                ))}
                            </ul>
                                               
                    </li>  
                </ul>
                <button type='button' className='creat-plan-btn' disabled={!isValidOwnerName || !isValidAreaName  || !isValidAmount || !isValidDiscount || !isValidImage ||!isValidFeature ?  true : false} onClick={(e)=>createNewFlat()}>Create Flat</button>
            </form>
        </div>
    </div>
  )
}


export default AddFlats