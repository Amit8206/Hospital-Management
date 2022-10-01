import React, { useEffect, useState } from 'react'
import './Signin.css'
import axios from '../helpers/axios'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { login } from '../actions'


const Signin = (props) => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const auth = useSelector(state => state.auth);
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();


  const userLogin = (e) => {
    e.preventDefault();

    const user = {
      username,
      password
    }
    dispatch(login(user));
   
  }


  if (auth.authenticate) {
    return <Navigate to='/' />
  }
  if(user.loading){
    return (<p>Loading....</p>)
  }


  return (

    <div className="login-form">
      <h1>Login Form</h1>
      <form onSubmit={userLogin}>
        <input type="text" name="username" placeholder="Username"
          value={username}
          onChange={(e) => setUserName(e.target.value)} />
        <input type="password" name="password" placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} />
        <input type="submit" value="Log In" />
      </form>
      <br />
      <div>
        <a href="/signup">Sign Up</a>
        <br />
        <br />
        <a href="http://localhost:3000/resetpassword">Forget Password</a>
      </div>



    </div>


  )
}

export default Signin