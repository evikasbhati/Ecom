import './SignUp.css'

const SignUp = () => {
  return (
    <div className="signup_container">
      <div className="signup">
        <div className="sign_title_contaier">
          <div className="sign_title">Sign up</div>
          <div className="fast_sign">It's fast and easy</div>
        </div>
        <div><hr className='sign_hr'/></div> 
        <div className="sign_name_container">
          <div className="name_conatiner">

            <input  className='sign_input_name' type="text" placeholder='First Name' />
          </div>
          <div className="name_container">
            <input className='sign_input_lname' type="text" placeholder='Last Name' />
          </div>
        </div>
        <div className="email_container">
          <input className='sign_input' type="text" placeholder='email address' />
        </div>
        <div className="phone_container">
          <input className='sign_input' type="text" placeholder='Phone number' />
        </div>
        <div className="password_container">
          <input className='sign_input' type="text" placeholder='Password' />
        </div>
        <div className="sign_sug">By clicking Sign Up, you agree to our Terms, Data Policy and Cookie Policy. You may receive SMS notifications from us and can opt out at any time.</div>
        <div className="signup_but"><button className='signup_button'>Sign up</button></div>
      </div>
    </div>
  )
}
export default SignUp