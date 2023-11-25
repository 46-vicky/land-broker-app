import { Link } from 'react-router-dom'

const Nav = ({isLogin,setIsLogin}) => {
  const logoutUser = ()=>{
      localStorage.removeItem("login-status");
      setIsLogin(false)
  }
  return (
    <div className='login-link'>
      {isLogin ? <p onClick={()=>logoutUser()} className='logut-link'>Logout</p> : <p><Link to="login">Login</Link></p>}
    </div>
  )
}

export default Nav