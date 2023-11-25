import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { authReducer } from '../stores/authSlice';

const Nav = ({isLogin}) => {
  const dispatch = useDispatch()
  const logoutUser = ()=>{
    dispatch(authReducer.logoutUser())
  }
  return (
    <div className='auth-part'>
      {isLogin ? <p onClick={()=>logoutUser()} className='logut-link'>Logout</p> : <p><Link to="login">Login</Link></p>}
    </div>
  )
}

export default Nav