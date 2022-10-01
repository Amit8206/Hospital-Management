import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateProfile } from '../../actions'
import SideBar from '../../Components/SideBar/SideBar'
import Layout from '../Layout/Layout'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';




const Profile = () => {

    const auth = useSelector(state => state.auth);
    const user = useSelector(state => state.user);

    const [email, setEmail] = useState('')
    const [otp, setOtp] = useState('')

    const dispatch = useDispatch();

    const [show, setShow] = useState(false);
  
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    // const [firstname, setFirstName] = useState('');
    // const [lastname, setLastName] = useState('');
    // const [username, setUserName] = useState('');
    // const [email, setEmail] = useState('');
    // const [dob, setDob] = useState('');
    // const [gender, setGender] = useState('');
    // const [address, setAddress] = useState('');
    // const [password, setPassword] = useState('');
    // const [newPassword, setNewPassword] = useState('');



    const [profile, setProfile] = useState({
        name: '', username: '', email: '', dob: '', gender: '', address: ''
    })
    const [message, setMessage] = useState('');


    let name, value;

    const handleSave = (e) => {
        e.preventDefault();

        name = e.target.name;
        value = e.target.value;

        setProfile({ ...profile, [name]: value });

    }

    const handleUpdateData = (e) => {
        e.preventDefault();

        console.log({ profile })
        dispatch(updateProfile(profile));
        toast.success('Profile Updated Successfully...', {
            position: toast.POSITION.TOP_RIGHT
        });
    }





    useEffect(() => {
        if (auth.authenticate) {
            setProfile({
                // firstname: auth.user.firstname,
                // lastname: auth.user.lastname,
                name: auth.user.name,
                username: auth.user.username,
                email: auth.user.email,
                dob: auth.user.dob,
                gender: auth.user.gender,
                address: auth.user.address
            })
        }


    }, [auth.authenticate])



    const rederProfileModal = () => {



        // const handleUpdateData = (e) => {
        //     e.preventDefault();
        //     const form = new FormData();

        //     form.append('firstname', firstname);
        //     form.append('lastname', lastname);
        //     form.append('username', username);
        //     form.append('email', email);
        //     form.append('dob', dob);
        //     form.append('gender', gender);
        //     form.append('address', address);
        //     form.append('password', password);
        //     form.append('newpassword', newPassword);

        //     console.log({form});

        //     dispatch(updatePerson(form));
        // }



  const sendOtp = () => {
    
    

}

const ChangePassword = () => {

}





    const changePasswordModal = () => {

        return (
            <>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <input type="text" name="email" placeholder="Enter Your Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                        <input type="text" name="otp" placeholder="Enter Your Otp"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)} />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={sendOtp}>
                            Send Otp
                        </Button>
                        <Button variant="primary" onClick={ChangePassword}>
                            Login
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }


        return (
            <>
                {<SideBar />}
                <div class="page-wrapper">
                <ToastContainer />
                    <div class="content">
                        <div class="row">
                            <div class="col-sm-7 col-6">
                                <h4 class="page-title">My Profile</h4>
                            </div>

                            <div class="col-sm-5 col-6 text-right m-b-30">

                            </div>
                        </div>
                        <div class="card-box profile-header">
                            <div class="row">
                                <form onSubmit={handleUpdateData}>
                                    
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input className="form-control" type="text" name="name"
                                                value={profile.name} onChange={handleSave} />
                                        </div>
                                    
                                    <div class="form-group">
                                        <label for="">Username</label>
                                        <input class="form-control" type="text" name="username" value={profile.username}
                                            onChange={handleSave}
                                        />
                                    </div>
                                    <div class="form-group">
                                        <label for="">Email</label>
                                        <input class="form-control" type="email" name="email" value={profile.email}
                                            onChange={handleSave} />
                                    </div>
                                    {/* <div className="col-sm-6"> */}
                                        <div className="form-group">
                                            <label>Date of Birth</label>
                                            <div className="cal-icon">
                                                <input type="text" className="form-control datetimepicker" name="dob"
                                                    value={profile.dob} onChange={handleSave} />
                                            </div>
                                        </div>
                                    {/* </div> */}
                                    {/* <div className="col-sm-6"> */}
                                        <div className="form-group gender-select">
                                            <label className="gen-label">Gender:</label>
                                            <div className="form-check-inline">
                                                <label className="form-check-label">
                                                    <input type="radio" name="gender" className="form-check-input"
                                                        value='Male' onChange={handleSave}
                                                    />Male
                                                </label>
                                            </div>
                                            <div className="form-check-inline">
                                                <label className="form-check-label">
                                                    <input type="radio" name="gender" className="form-check-input"
                                                        value='Female' onChange={handleSave}
                                                    />Female
                                                </label>
                                            </div>
                                        </div>
                                    {/* </div> */}
                                    {/* <div className="col-sm-12"> */}
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <div className="form-group">
                                                    <label>Address</label>
                                                    <input type="text" className="form-control " name="address" value={profile.address} onChange={handleSave} />
                                                </div>
                                            </div>
                                        </div>
                                    {/* </div> */}

                                    {/* <div class="form-group">
                                        <label for="">password</label>
                                        <input class="form-control" type="text" name="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)} />
                                    </div>

                                    <div class="form-group">
                                        <label for="">New Password</label>
                                        <input class="form-control" type="text" name="new_password"
                                            value={newPassword}
                                            onChange={(e) => setNewPassword(e.target.value)} />
                                    </div> */}

                                    <Button class="btn btn-primary btn-rounded mx-5">Edit Profile</Button>
                                    
                                </form>
                                {/* <div>
                                { auth.user.signinWith === 'Default' ? (
                                        <Button class="btn btn-primary btn-sm btn-rounded mx-5">Change Password</Button>
                                    ) : null }
                                </div> */}
                               

                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }


    return (
        <Layout>
            {rederProfileModal()}
        </Layout>
    )
}

export default Profile