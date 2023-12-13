import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { authReducer } from '../stores/authSlice';

const Nav = ({isLogin}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const logoutUser = ()=>{
    dispatch(authReducer.logoutUser())
    navigate("/login")
  }
  return (
    <div className='auth-part'>
      {isLogin ? <p onClick={()=>logoutUser()} className='logut-link'>Logout</p> : <p><Link to="login">Login</Link></p>}
    </div>
  )
}

export default Nav