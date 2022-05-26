import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/apicall'
import './Login.css'

const Login = () => {
  const [username,SetUsername]=useState('')
  const [password,SetPassword]=useState('')
  const dispatch=useDispatch()

  const handleLogin=(e)=>{
    e.preventDefault()
    login(dispatch,{username,password})
  }
  return (
    <div className="login_container">
      <div className="login">
        <div className="login_title_contaier">
          <div className="login_title">Login</div>
          <div className="fast_sign">It's simpler and faster</div>
         
        </div>
        <div><hr className='log_hr'/></div> 
        <div className="user_container">
          <input className='sign_input' type="text" placeholder='Username'
           onChange={(e)=>SetUsername(e.target.value)}/>
        </div>
        <div className="password_container">
          <input className='sign_input' type="password" placeholder='Password' onChange={(e)=>SetPassword(e.target.value)} />
        </div>
        <div className="login_but"><button className='login_button'onClick={handleLogin}>Login</button></div>
      </div>
    </div>
  )
}
export default Login