import React, { useEffect, useRef, useState } from 'react'
const planNameREGX = /^[A-z][A-z0-9-_ ]{3,23}$/;
const commisionValueREGX = /^[0-9]+$/;

const AddPlan = ({setOpenPoup}) => {
    const planRef = useRef();
    const [planName,setPlanName] = useState("")
    const [isValidPlanName,setIsValidPlanName] = useState(true)
    const [planNameError,SetPlanNameError] = useState("")

    const [commisionType,setCommisionType] = useState("Amount")

    const [planValue,setPlanValue] = useState("")
    const [isValidPlanValue,setIsValidPlanValue] = useState(true)   
    const [planValueError,setPlanValueError] = useState("")
    useEffect(()=>{
        planRef.current.focus()
    },[])
    useEffect(()=>{
            setIsValidPlanName(planNameREGX.test(planName))
            if(planNameREGX.test(planName)){
                SetPlanNameError("")
            }else if(planName !== "" && !planNameREGX.test(planName)){
                SetPlanNameError("*Should be Minimum 3 Charcters")
            }   
    },[planName])

    useEffect(()=>{
        setIsValidPlanValue(commisionValueREGX.test(planValue))
        if(commisionValueREGX.test(planValue)){
            setPlanValueError("")
        }else{

        }
    },[planValue])


    const validatePlanName = (planName)=>{
        if(planName.trim() === ""){
            SetPlanNameError("*Enter Plan Name")
            setIsValidPlanName(false)
        }
        setPlanName(planName.replace(/[^a-zA-Z0-9 ]/g, ""));
    }

    const validateCommisionValue = (planValue)=>{
        if(planValue.trim() === ""){
            setPlanValueError("*Enter Commision Value")
            setIsValidPlanValue(false)
        }
        setPlanValue(planValue.replace(/[^0-9]/g, ""));
    }

    const createPlan = ()=>{

    }

  return (
    <div className='AddPlan-cont'>
        <div className='add-plan-box'>
            <h2>Add New Paln</h2>
            <span className='close-btn' onClick={()=>setOpenPoup(false)}>&#x2716;</span>
            <form className='add-plan-form' onSubmit={(e)=>e.preventDefault()}>
                <ul>
                    <li>
                        <label htmlFor='plan-name'>Plan Name :</label>
                        <div className='poup-input'>
                            {isValidPlanName === false  ? <p className="Err-field">{planNameError}</p>:""}
                            <input
                            type='text'
                            ref={planRef}
                            id='plan-name'
                            value={planName}
                            className='plan-name-input'
                            onChange={(e)=>validatePlanName(e.target.value)}
                            />
                        </div> 
                    </li>
                    <li>
                        <label htmlFor='commision-typ'>Commision Type :</label>
                        <div className='poup-input'>
                            <select 
                            id='commision-typ'
                            value={commisionType}
                            onChange={(e)=>setCommisionType(e.target.value)}
                            >
                                    <option value="Amount">
                                        Amount
                                    </option>
                                    <option value="percentage">
                                    percentage
                                    </option>
                            </select>
                        </div>
                    </li>
                    <li>
                        <label htmlFor='commisionValue'>
                            {commisionType === "Amount" ? "Amount :" : "Percenteage :"} 
                        </label>
                        <div className='poup-input'>
                            {isValidPlanValue === false  ? <p className="Err-field">{planValueError}</p>:""}
                            <input
                            type='text'
                            id='commisionValue'
                            value={planValue}
                            onChange={(e)=>validateCommisionValue(e.target.value)}
                            />
                        </div>                       
                    </li>
                </ul>
                <button type='button' className='creat-plan-btn' disabled={!isValidPlanName || !isValidPlanValue || planName === "" || planValue === "" ? true :false} onClick={(e)=>createPlan()}>Create Plan</button>
            </form>
        </div>
    </div>
  )
}

export default AddPlan