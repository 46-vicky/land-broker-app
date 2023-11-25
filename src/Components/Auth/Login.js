import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { authReducer } from '../../stores/authSlice';
import { useSelector } from 'react-redux';
import { loggedUserDetail } from '../../stores/authSlice';

const Login = () => {
    const userRef = useRef();
    const [userName,setUserName] = useState("");
    const [password,setPassword] = useState("");
    const [showPass,setShowPass] = useState(false)
    const [InvalidAuth,setInValidAuth] = useState(false)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const logInDetail = useSelector(loggedUserDetail)
    const status =  logInDetail.isLoggedIn;

    useEffect(()=>{
        userRef.current.focus();
        if(status){
         navigate("/")
        }
     },[])

     useEffect(()=>{
        setInValidAuth(false)
     },[userName,password])

     
    const submitForm = ()=>{
        if(userName === password && userName.trim() !== "" && password.trim() !== ""){
            dispatch(authReducer.loginUser({isLoggedIn : true,userName: userName.trim()}));
            navigate("/")
        } else{
            setInValidAuth(true);
        }    
    }

    const togglePass = ()=>{
       setShowPass(!showPass);
       console.log(!showPass);
    }

   return (
    <div className='login-pannel'>
        <div className='login-cont'>
            <h1>Login</h1>
            <p className={InvalidAuth ? 'error-msg show' : 'error-msg'}>Username and Password Must be Same!</p>
            <form className='login-form' onSubmit={(e)=>e.preventDefault()}>
                <ul>
                    <li>
                        <label htmlFor='u-name'>
                          Username :  
                        </label>
                        <input
                            type='text'
                            id='u-name'
                            value={userName}
                            onChange={(e)=>setUserName(e.target.value)}
                            required
                            ref={userRef}
                            autoComplete='off'
                        />
                    </li>
                    <li>
                        <label htmlFor='u-pass'>
                          Password :  
                        </label>
                        <input
                            type={showPass ? 'text':'password'}
                            id='u-pass'
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            required
                            autoComplete='off'
                        />
                        <button aria-label='toogle-btn' onClick={(e)=>togglePass()} className={showPass ? 'toggle-btn show' : 'toggle-btn'}></button>
                    </li>
                    <button className='login-btn' onClick={()=>submitForm()}>Login</button>
                </ul>
            </form>
        </div>
    </div>
  )
}

export default Login