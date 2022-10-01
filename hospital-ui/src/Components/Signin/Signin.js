import React, { useEffect, useState } from 'react'
import './Signin.css'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { faceBookLogging, googleLogin, login, loginWithOtp, sendLoginOtp } from '../../actions'
import FacebookLogin from 'react-facebook-login';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import InstagramLogin from 'react-instagram-login';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';



const Signin = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const auth = useSelector(state => state.auth);
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  const [email2, setEmail2] = useState('')
  const [otp, setOtp] = useState('')

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const [loginForm, setLoginForm] = useState({
    email: '', otp: ''
  })



  const userLogin = (e) => {
    e.preventDefault();

    const user = {
      email,
      password
    }

    if (email === '' || password === '') {
      toast.warning('Please Fill All Form..!!', {
        position: toast.POSITION.TOP_CENTER
      });
    }
    else {
      dispatch(login(user));
      setEmail('')
      setPassword('')
    }

  }



  if (auth.authenticate) {
    return <Navigate to='/' />
  }


  if (user.loading) {
    return (<p>Loading....</p>)
  }

  const responseSuccessGoogle = (response) => {

    const user_Obj = jwt_decode(response.credential)
    console.log({ user_Obj })

    const data = {
      name: user_Obj.name,
      email: user_Obj.email

    }
    dispatch(googleLogin(data));
    // console.log(response.tokenId)
  }

  const responseErrorGoogle = (response) => {
    console.log({ response })
  }

  const responseFacebook = (response) => {
    console.log({ response });

    const data = {
      accessToken: response.accessToken,
      userID: response.userID,

    }

    dispatch(faceBookLogging(data));

  }

  const responseInstagram = (response) => {
    console.log(response)

  }

  const googleClientId = '293387942097-e9rkoc4bv2k45l813e7b92c5tpmnpls4.apps.googleusercontent.com'



  const sendOtp = () => {

    console.log({email2})

    dispatch(sendLoginOtp(email2))
    


  }

  const Login = () => {
    loginForm.email = email2;
    loginForm.otp = otp;
    console.log({loginForm})
    dispatch(loginWithOtp(loginForm))
    
    handleClose()

  }





  const OtpLoginModal = () => {
   

    return (
      <>
        {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Launch demo modal
        </button> */}


    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <input type="text" name="email" placeholder="Enter Your Email"
            value={email2}
            onChange={(e) => setEmail2(e.target.value)} />
             <input type="text" name="otp" placeholder="Enter Your Otp"
            value={otp}
            onChange={(e) => setOtp(e.target.value)} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={sendOtp}>
            Send Otp
          </Button>
          <Button variant="primary" onClick={Login}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
      </>
    )
  }

  return (
    <>
      {/* {console.log({auth})} */}
      {/* <div className="message" style={{ marginLeft: '900px', color: 'red', fontSize: '20px' }}>{auth.error}</div> */}
      <ToastContainer />
      <div className="login-form">
        <h1>Login Form</h1>
        <form onSubmit={userLogin}>
          <input type="email" name="email" placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
          <input type="password" name="password" placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
          <input type="submit" value="Log In" />
        </form>
        <br />

        <div class="d-grid gap-2">
          {/* <button onClick={OtpLoginModal()} >Otp Login</button> */}
          <Button type="button" onClick={handleShow} className="btn btn-primary btn-lg" style={{ width: '300px', textAlign: 'center', paddingLeft: '50px' }}>Otp Login</Button>

          {/* <div className="InstagramLogin">
          <InstagramLogin
            // clientId="9569b21ff9f8d5e799172f3e1aa75ea9"
            clientSecret='9569b21ff9f8d5e799172f3e1aa75ea9'
            clientId='422530439973064'
            scope='user_profile'
            redirect_uri='http://localhost:3000/signin'
            buttonText="Login With Instagram"
            onSuccess={responseInstagram}
            onFailure={responseInstagram}
          />,
        </div> */}
          {/* <br /> */}
          <div className="facebooklogin">

            <FacebookLogin
              buttonStyle={{ height: '40px', width: '300px', textAlign: 'center', paddingTop: '6px', borderRadius: '5px', marginTop: '10px' }}
              appId="1217984252387809"
              autoLoad={false}
              // fields="name,email,picture"
              // onClick={facebookSignin}
              callback={responseFacebook} />
          </div>
        </div>
        {/* <br /> */}
        <div className="btn googleLogin" style={{ width: '300px', textAlign: 'center', paddingLeft: '50px' }}>
          <GoogleOAuthProvider clientId={googleClientId}>
            <GoogleLogin
              // type="standard"
              // text="Log in with Google"
              // shape='square'
              onSuccess={responseSuccessGoogle}
              onFailure={responseErrorGoogle}
              cookiePolicy={'single_host_origin'}
            />
          </GoogleOAuthProvider>
        </div>

        <div>
          <a href="/signup">Sign Up</a>
          <br />
          <br />
          <a href="http://localhost:3000/resetpassword">Forget Password</a>
        </div>


        {OtpLoginModal()}
      </div>
    </>

  )
}

export default Signin