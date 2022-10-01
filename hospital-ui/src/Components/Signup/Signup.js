import React, { useState } from 'react'
import axios from '../../helpers/axios'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { signup } from '../../actions'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Signup = (props) => {

    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const auth = useSelector(state => state.auth);
    const signupData = useSelector(state => state.user);
    const dispatch = useDispatch();


    const userSignup = (e) => {
        e.preventDefault();

        const user = {
            username,
            email,
            password
        }

        if (username === '' || email === '' || password === '') {
            toast.warning('Please Fill All Form..!!', {
                position: toast.POSITION.TOP_CENTER
            });
        } else {
            // console.log({ user })
            dispatch(signup(user));
            toast.success(signupData.message, {
                position: toast.POSITION.TOP_RIGHT
            });
            setUserName('');
            setEmail('');
            setPassword('');
        }


    //   const dis =  dispatch(signup(user));
    //   console.log({dis})
    }

    

    // const showMessage = () => {
    //     setTimeout(function() {
    //         user.message = ''
    //     }, 3000);
    // }


    // console.log({user})
    // console.log({auth});

    // if (!auth.authenticate) {
    //     return <Navigate to='/signin' />
    //   }
    //   if(user.loading){
    //     return (<p>Loading....</p>)
    //   }
   

    return (

        <div className="main-wrapper  account-wrapper">
             <ToastContainer />
            <div className="account-page">
                <div className="account-center">
                {/* <div className="message" style={{ marginLeft: '815px', color: 'green', fontSize: '20px'}}>{user.message}</div> */}
                    <div className="account-box">
                        <form onSubmit={userSignup} className="form-signin">
                            <div className="account-logo">
                                <a href="/"><img src="assets/img/logo-dark.png" alt="" /></a>
                            </div>
                            <div className="form-group">
                                <label>Username</label>
                                <input type="text" className="form-control" name="username"
                                    placeholder="Enter Your Username"
                                    value={username}
                                    onChange={(e) => setUserName(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label>Email Address</label>
                                <input type="email" className="form-control" name="email" placeholder="Enter Your Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" name="password" placeholder="Enter Your Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)} />
                            </div>

                            <div className="form-group checkbox">
                                <label>
                                    <input type="checkbox" /> I have read and agree the Terms & Conditions
                                </label>
                            </div>
                            <div className="form-group text-center">
                                <button className="btn btn-primary account-btn" type="submit">Signup</button>
                            </div>
                            <div className="text-center login-link">
                                Already have an account? <a href="/signin">Login</a>
                                <br />
                                <a href="http://localhost:3000/resetpassword">Forget Password</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Signup