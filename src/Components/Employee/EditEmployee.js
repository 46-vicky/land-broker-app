import React, { useEffect, useRef, useState } from 'react'
import { useFetchCollection } from '../../hooks/useFetchCollection';
import { useSelector,useDispatch } from 'react-redux'
import { employeeActions } from '../../stores/employeeSlice';
const employeeNameREGX = /^[A-z][A-z0-9-_ ]{2,23}$/;
const emailValueREGX =  /^[a-zA-Z0-9]+@[a-z]+\.[a-z]{2,3}$/;


const EditEmployee = ({editableEmployeeId,setOpenEditEmployeePopup}) => {
  const dispatch = useDispatch();
  let currentEmployeeObj;
  const employeeRef = useRef();
  const [employeeName,setEmployeeName] = useState("")
  const [isValidEmployeeName,setIsValidEmployeeName] = useState(true)
  const [employeeNameError,SetEmployeeNameError] = useState("")


  const [assignedPlan,setAssignedPlan] = useState("")
  const [validAssignedPlan,setIsValidAssignedPlan] = useState(true)
  const [assignedPlanErr,setAssignedPlanErr] = useState("")

  const [emailValue,setEmailValue] = useState("")
  const [isValidEmailValue,setIsValidEmailValue] = useState(true)   
  const [emailValueError,setEmailValueError] = useState("")

  const allEmployees = useSelector(state => state.employees.allEmployees);
  allEmployees.forEach(employee => {
   if(employee.id === editableEmployeeId) {
    currentEmployeeObj = employee
   }
   });
    const {updateData} = useFetchCollection()

    const allPlans = useSelector(state => state.plans.allPlans)
    const plansList = allPlans.map((plan, index) => <option value={plan.id} key={plan.id}>{plan.planName}</option>)


    useEffect(()=>{
        employeeRef.current.focus()
    },[])

    useEffect(()=>{
            setIsValidEmailValue(emailValueREGX.test(emailValue))
            if(emailValueREGX.test(emailValue)){
                setEmailValueError("")
            }else if(emailValue !== "" && !emailValueREGX.test(emailValue)){
                setEmailValueError("*Invalid Email")
            }   
    },[emailValue])

    useEffect(()=>{
        setIsValidEmployeeName(employeeNameREGX.test(employeeName))
        if(employeeNameREGX.test(employeeName)){
            SetEmployeeNameError("")
        }else if(employeeName !== "" && !employeeNameREGX.test(employeeName)){
            SetEmployeeNameError("*Should be Minimum 3 Charcters")
        }   
    },[employeeName])

    useEffect(()=>{
      setEmployeeName(currentEmployeeObj.employeeName);
      setAssignedPlan(currentEmployeeObj.assignedPlanId)
      setEmailValue(currentEmployeeObj.employeeMail)
    },[currentEmployeeObj])

    const validateEmployeeName = (employeeName)=>{
        if(employeeName.trim() === ""){
            SetEmployeeNameError("*Enter Employee Name")
            setIsValidEmployeeName(false)
        }
        setEmployeeName(employeeName.replace(/[^a-zA-Z0-9 ]/g, ""));
    }

    const validateEmailValue = (emailValue)=>{
        if(emailValue.trim() === ""){
            setEmailValueError("*Enter Valid Email")
            setIsValidEmailValue(false)
        }
        setEmailValue(emailValue);
    }

    const validateAssignedPlan = (assignedPlanId)=>{
        setAssignedPlan(assignedPlanId)
        if(assignedPlanId === ""){
            setIsValidAssignedPlan(false)
            setAssignedPlanErr("*Select a Plan")
        }else{
            setIsValidAssignedPlan(true)
            setAssignedPlanErr("")
        }
    }
    const updateEmployee = ()=>{
            const updatedEmployee = {
                id:editableEmployeeId, 
                employeeName,
                employeeMail:emailValue,
                assignedPlanId:assignedPlan
            }
            dispatch(employeeActions.editEmployee({
                id:editableEmployeeId, 
                employeeName,
                employeeMail:emailValue,
                assignedPlanId:assignedPlan}))
            const ResultFun = (response)=>{
                console.log(response)
            }
            if(updateEmployee){
              updateData('employees',updatedEmployee,ResultFun)
                setEmailValueError("")
                setIsValidEmailValue(false)
                setEmailValue("")
                SetEmployeeNameError("")
                setIsValidEmployeeName(false)
                setEmployeeName("")
                setOpenEditEmployeePopup(false)
            }
    }
  
  return (
    <div className='AddPlan-cont'>
        <div className='add-employee-box'>
            <h2>Edit Employeee</h2>
            <span className='close-btn' onClick={()=>setOpenEditEmployeePopup(false)}>&#x2716;</span>
            {/* {isPlanAdded ? <p className='successMsg'>Plan Added Successfully!</p> : ""} */}
            <form className='add-plan-form' onSubmit={(e)=>e.preventDefault()}>
                <ul>
                    <li>
                        <label htmlFor='employee-name'>Employee Name</label>
                        <div className='poup-input'>
                            {isValidEmployeeName === false  ? <p className="Err-field">{employeeNameError}</p>:""}
                            <input
                            type='text'
                            ref={employeeRef}
                            id='employee-name'
                            value={employeeName}
                            className='plan-name-input'
                            onChange={(e)=>validateEmployeeName(e.target.value)}
                            />
                        </div> 
                    </li>
                    <li>
                        <label htmlFor='emailValue'>
                            Email
                        </label>
                        <div className='poup-input'>
                            {isValidEmailValue === false  ? <p className="Err-field">{emailValueError}</p>:""}
                            <input
                            type='text'
                            id='emailValue'
                            value={emailValue}
                            onChange={(e)=>validateEmailValue(e.target.value)}
                            />
                        </div>                       
                    </li>
                    <li>
                        <label htmlFor='commision-typ'>Assigned Plan</label>
                        <div className='poup-input'>
                             {validAssignedPlan === false  ? <p className="Err-field">{assignedPlanErr}</p>:""}
                            <select 
                            id='commision-typ'
                            value={assignedPlan}
                            onChange={(e)=>validateAssignedPlan(e.target.value)}
                            >
                            <option value="">Select Plan</option>
                            {plansList}
                            </select>
                        </div>
                    </li>  
                </ul>
                <button type='button' className='creat-plan-btn' disabled={!isValidEmployeeName || !isValidEmailValue || employeeName === "" || emailValue === "" || !validAssignedPlan ?  true :false} onClick={(e)=>updateEmployee()}>Edit Employee</button>
            </form>
        </div>
    </div>
  )
}

export default EditEmployee