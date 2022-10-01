import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signout, sendOtp, changePassword, modifyPassword } from '../../actions'
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Header = () => {

    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);

    // const [email, setEmail] = useState('')
    // const [otp, setOtp] = useState('')
    // const [password, setPassword] = useState('')
  
    const [show, setShow] = useState(false);
  
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const [btn1, setBtn1] = useState(true)
    const [btn2, setBtn2] = useState(true)
    const [btn3, setBtn3] = useState(false)
    const [btn4, setBtn4] = useState(true)

    const [changePassword, setChangePassword] = useState({
       email: '', otp: '', password: ''
    })


    const logout = () => {
        dispatch(signout());
    }

    let name, value;

    const handleSave = (e) => {
        e.preventDefault();

        name = e.target.name;
        value = e.target.value;

        setChangePassword({ ...changePassword, [name]: value });

    }



  const sendOneTimePassword = () => {
    setBtn1(false)
    setBtn2(false)
    setBtn3(true)
    setBtn4(false)
    const email = auth.user.email
    dispatch(sendOtp(email))
}

const changeWithPassword = () => {
   
    if(changePassword.otp === '' || changePassword.password === ''){
        toast.warn('Please Enter Otp and Password...', {
            position: toast.POSITION.TOP_RIGHT
        });
    }else {
        setBtn4(true)
        changePassword.email = auth.user.email
        dispatch(modifyPassword(changePassword))

        setTimeout(() => {
            setBtn3(false)
        }, 5000);

    }
}


    const changePasswordModal = () => {

        return (
            <>
            <ToastContainer />
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        
                        <input type="text" name="otp" placeholder="Enter Your Otp"
                            value={changePassword.otp} disabled={btn1}
                            onChange={handleSave} />
                            <input type="text" name="password" placeholder="Enter Your Password"
                            value={changePassword.password} disabled={btn2}
                            onChange={handleSave} />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" disabled={btn3} onClick={sendOneTimePassword}>
                            Send Otp
                        </Button>
                        <Button variant="primary" disabled={btn4} onClick={changeWithPassword}>
                            Change Password
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }


    return (
        <div className="main-wrapper">
            <div class="header">
                <div class="header-left">
                    <a href="/" class="logo">
                        <img src="/assets/img/logo.png" width="35" height="35" alt="" /> <span>Preclinic</span>
                    </a>
                </div>
                <a id="toggle_btn" href="javascript:void(0);"><i class="fa fa-bars"></i></a>
                <a id="mobile_btn" class="mobile_btn float-left" href="#sidebar"><i class="fa fa-bars"></i></a>
                <ul class="nav user-menu float-right">
                    <li class="nav-item dropdown d-none d-sm-block">
                        <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown"><i class="fa fa-bell-o"></i> <span class="badge badge-pill bg-danger float-right">3</span></a>
                        <div class="dropdown-menu notifications">
                            <div class="topnav-dropdown-header">
                                <span>Notifications</span>
                            </div>
                            <div class="drop-scroll">
                                <ul class="notification-list">
                                    <li class="notification-message">
                                        <a href="activities.html">
                                            <div class="media">
                                                <span class="avatar">
                                                    <img alt="John Doe" src="/assets/img/user.jpg" class="img-fluid" />
                                                </span>
                                                <div class="media-body">
                                                    <p class="noti-details"><span class="noti-title">John Doe</span> added new task <span class="noti-title">Patient appointment booking</span></p>
                                                    <p class="noti-time"><span class="notification-time">4 mins ago</span></p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="notification-message">
                                        <a href="activities.html">
                                            <div class="media">
                                                <span class="avatar">V</span>
                                                <div class="media-body">
                                                    <p class="noti-details"><span class="noti-title">Tarah Shropshire</span> changed the task name <span class="noti-title">Appointment booking with payment gateway</span></p>
                                                    <p class="noti-time"><span class="notification-time">6 mins ago</span></p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="notification-message">
                                        <a href="activities.html">
                                            <div class="media">
                                                <span class="avatar">L</span>
                                                <div class="media-body">
                                                    <p class="noti-details"><span class="noti-title">Misty Tison</span> added <span class="noti-title">Domenic Houston</span> and <span class="noti-title">Claire Mapes</span> to project <span class="noti-title">Doctor available module</span></p>
                                                    <p class="noti-time"><span class="notification-time">8 mins ago</span></p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="notification-message">
                                        <a href="activities.html">
                                            <div class="media">
                                                <span class="avatar">G</span>
                                                <div class="media-body">
                                                    <p class="noti-details"><span class="noti-title">Rolland Webber</span> completed task <span class="noti-title">Patient and Doctor video conferencing</span></p>
                                                    <p class="noti-time"><span class="notification-time">12 mins ago</span></p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="notification-message">
                                        <a href="activities.html">
                                            <div class="media">
                                                <span class="avatar">V</span>
                                                <div class="media-body">
                                                    <p class="noti-details"><span class="noti-title">Bernardo Galaviz</span> added new task <span class="noti-title">Private chat module</span></p>
                                                    <p class="noti-time"><span class="notification-time">2 days ago</span></p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="topnav-dropdown-footer">
                                <a href="activities.html">View all Notifications</a>
                            </div>
                        </div>
                    </li>
                    <li class="nav-item dropdown d-none d-sm-block">
                        <a href="javascript:void(0);" id="open_msg_box" class="hasnotifications nav-link"><i class="fa fa-comment-o"></i> <span class="badge badge-pill bg-danger float-right">8</span></a>
                    </li>
                    <li class="nav-item dropdown has-arrow">
                        <a href="#" class="dropdown-toggle nav-link user-link" data-toggle="dropdown">
                            <span class="user-img">
                                <img class="rounded-circle" src="/assets/img/user.jpg" width="24" alt="Admin" />
                                <span class="status online"></span>
                            </span>
                            <span>{auth.user.role}</span>
                        </a>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="/profile">My Profile</a>
                            {auth.user.signinWith === 'Default' ? (
                                <a class="dropdown-item" onClick={handleShow}>Change Password</a>
                            ) : null}
                            <a class="dropdown-item" style={{ cursor: 'pointer' }} onClick={logout}>Logout</a>
                        </div>
                    </li>
                </ul>
                <div class="dropdown mobile-user-menu float-right">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a>
                    <div class="dropdown-menu dropdown-menu-right">
                        <a class="dropdown-item" href="/profile">My Profile</a>

                        {auth.user.signinWith === 'Default' ? (
                            <a class="dropdown-item" onClick={handleShow}>Change Password</a>) : null}


                        <a class="dropdown-item" style={{ cursor: 'pointer' }} onClick={logout}>Logout</a>
                    </div>
                </div>
            </div>
            {changePasswordModal()}
        </div>

    )
}

export default Header