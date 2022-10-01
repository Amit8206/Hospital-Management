import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { addDoctor } from '../actions'


const AddDoctor = () => {

    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [dob, setDob] = useState('');
    const [gender, setGender] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [department, setDepartment] = useState('');
    const [biography, setBiography] = useState('');
    // const [productDetails, setProductDetails] = useState(null);
    const [doctorImage, setDoctorImage] = useState([]);

    const dispatch = useDispatch();


    const handleSave = () => {

        const form = new FormData();

        form.append('firstname', firstname);
        form.append('lastname', lastname);
        form.append('email', email);
        form.append('dob', dob);
        form.append('gender', gender);
        form.append('address', address);
        form.append('phone', phone);
        form.append('department', department);
        form.append('biography', biography);

        for (let pic of doctorImage) {
            form.append('doctorImage', pic);
        }

        dispatch(addDoctor(form));
        // setShow(false);
    }


    const handleDoctorImage = (e) => {
        setDoctorImage([
          ...doctorImage,
          e.target.files[0]
        ]);
      }

    return (
        <div>
            <div className="main-wrapper">
                <div className="header">
                    <div className="header-left">
                        <a href="/" className="logo">
                            <img src="/assets/img/logo.png" width="35" height="35" alt="" /> <span>Preclinic</span>
                        </a>
                    </div>
                    <a id="toggle_btn" href="javascript:void(0);"><i className="fa fa-bars"></i></a>
                    <a id="mobile_btn" className="mobile_btn float-left" href="#sidebar"><i className="fa fa-bars"></i></a>
                    <ul className="nav user-menu float-right">
                        <li className="nav-item dropdown d-none d-sm-block">
                            <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown"><i className="fa fa-bell-o"></i> <span className="badge badge-pill bg-danger float-right">3</span></a>
                            <div className="dropdown-menu notifications">
                                <div className="topnav-dropdown-header">
                                    <span>Notifications</span>
                                </div>
                                <div className="drop-scroll">
                                    <ul className="notification-list">
                                        <li className="notification-message">
                                            <a href="activities.html">
                                                <div className="media">
                                                    <span className="avatar">
                                                        <img alt="John Doe" src="/assets/img/user.jpg" className="img-fluid" />
                                                    </span>
                                                    <div className="media-body">
                                                        <p className="noti-details"><span className="noti-title">John Doe</span> added new task <span className="noti-title">Patient appointment booking</span></p>
                                                        <p className="noti-time"><span className="notification-time">4 mins ago</span></p>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="notification-message">
                                            <a href="activities.html">
                                                <div className="media">
                                                    <span className="avatar">V</span>
                                                    <div className="media-body">
                                                        <p className="noti-details"><span className="noti-title">Tarah Shropshire</span> changed the task name <span className="noti-title">Appointment booking with payment gateway</span></p>
                                                        <p className="noti-time"><span className="notification-time">6 mins ago</span></p>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="notification-message">
                                            <a href="activities.html">
                                                <div className="media">
                                                    <span className="avatar">L</span>
                                                    <div className="media-body">
                                                        <p className="noti-details"><span className="noti-title">Misty Tison</span> added <span className="noti-title">Domenic Houston</span> and <span className="noti-title">Claire Mapes</span> to project <span className="noti-title">Doctor available module</span></p>
                                                        <p className="noti-time"><span className="notification-time">8 mins ago</span></p>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="notification-message">
                                            <a href="activities.html">
                                                <div className="media">
                                                    <span className="avatar">G</span>
                                                    <div className="media-body">
                                                        <p className="noti-details"><span className="noti-title">Rolland Webber</span> completed task <span className="noti-title">Patient and Doctor video conferencing</span></p>
                                                        <p className="noti-time"><span className="notification-time">12 mins ago</span></p>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="notification-message">
                                            <a href="activities.html">
                                                <div className="media">
                                                    <span className="avatar">V</span>
                                                    <div className="media-body">
                                                        <p className="noti-details"><span className="noti-title">Bernardo Galaviz</span> added new task <span className="noti-title">Private chat module</span></p>
                                                        <p className="noti-time"><span className="notification-time">2 days ago</span></p>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="topnav-dropdown-footer">
                                    <a href="activities.html">View all Notifications</a>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item dropdown d-none d-sm-block">
                            <a href="javascript:void(0);" id="open_msg_box" className="hasnotifications nav-link"><i className="fa fa-comment-o"></i> <span className="badge badge-pill bg-danger float-right">8</span></a>
                        </li>
                        <li className="nav-item dropdown has-arrow">
                            <a href="#" className="dropdown-toggle nav-link user-link" data-toggle="dropdown">
                                <span className="user-img">
                                    <img className="rounded-circle" src="/assets/img/user.jpg" width="24" alt="Admin" />
                                    <span className="status online"></span>
                                </span>
                                <span>Admin</span>
                            </a>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="/home/profile">My Profile</a>
                                <a className="dropdown-item" href="/home/edit-profile">Edit Profile</a>

                                <a className="dropdown-item" href="/logout">Logout</a>
                            </div>
                        </li>
                    </ul>
                    <div className="dropdown mobile-user-menu float-right">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v"></i></a>
                        <div className="dropdown-menu dropdown-menu-right">
                            <a className="dropdown-item" href="/home/profile">My Profile</a>
                            <a className="dropdown-item" href="/home/edit-profile">Edit Profile</a>

                            <a className="dropdown-item" href="/logout">Logout</a>
                        </div>
                    </div>
                </div>
                <div className="sidebar" id="sidebar">
                    <div className="sidebar-inner slimscroll">
                        <div id="sidebar-menu" className="sidebar-menu">
                            <ul>
                                <li className="menu-title">Main</li>
                                <li >
                                    <a href="/"><i className="fa fa-dashboard"></i> <span>Dashboard</span></a>
                                </li>
                                <li className="active">
                                    <a href="/doctors"><i className="fa fa-user-md"></i> <span>Doctors</span></a>
                                </li>
                                <li>
                                    <a href="/patients"><i className="fa fa-wheelchair"></i> <span>Patients</span></a>
                                </li>
                                <li>
                                    <a href="/appointments"><i className="fa fa-calendar"></i> <span>Appointments</span></a>
                                </li>

                                <li>
                                    <a href="/departments"><i className="fa fa-hospital-o"></i> <span>Departments</span></a>
                                </li>
                                <li className="submenu">
                                    <a href="#"><i className="fa fa-user"></i> <span> Employees </span> <span className="menu-arrow"></span></a>
                                    <ul style={{ display: "none" }}>
                                        <li><a href="/employee">Employees List</a></li>
                                        <li><a href="/employee/leave">Leaves</a></li>

                                    </ul>
                                </li>

                                <li className="submenu">
                                    <a href="#"><i className="fa fa-book"></i> <span> Payroll </span> <span className="menu-arrow"></span></a>
                                    <ul style={{ display: "none" }}>
                                        <li><a href="/receipt"> Employee Salary </a></li>

                                    </ul>
                                </li>


                                <li className="submenu">
                                    <a href="#"><i className="fa fa-envelope"></i> <span> Email</span> <span className="menu-arrow"></span></a>
                                    <ul style={{ display: "none" }}>
                                        <li><a href="/compose">Compose Mail</a></li>
                                        <li><a href="/inbox">Inbox</a></li>

                                    </ul>
                                </li>

                                <li>
                                    <a href="/store"><i className="fa fa-cube"></i> <span>Medicine Store</span></a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
                <div className="page-wrapper">
                    <div className="content">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <h4 className="page-title">Add Doctor</h4>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                            {/* method="POST" encType="multipart/form-data" */}
                                <form onSubmit={ handleSave }>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label>First Name <span className="text-danger">*</span></label>
                                                <input className="form-control" type="text" name="firstname"
                                                value={firstname} onChange={(e) => setFirstName(e.target.value) } />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label>Last Name</label>
                                                <input className="form-control" type="text" name="lastname"
                                                  value={lastname} onChange={(e) => setLastName(e.target.value) }  />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">

                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label>Email <span className="text-danger">*</span></label>
                                                <input className="form-control" type="email" name="email"
                                                value={email} onChange={(e) => setEmail(e.target.value) } />
                                            </div>
                                        </div>


                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label>Date of Birth</label>
                                                <div className="cal-icon">
                                                    <input type="text" className="form-control datetimepicker" name="dob"
                                                    value={dob} onChange={(e) => setDob(e.target.value) } />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group gender-select">
                                                <label className="gen-label">Gender:</label>
                                                <div className="form-check-inline">
                                                    <label className="form-check-label">
                                                        <input type="radio" name="gender" className="form-check-input"
                                                            value='Male' onChange={(e) => setGender(e.target.value) }
                                                        />Male
                                                    </label>
                                                </div>
                                                <div className="form-check-inline">
                                                    <label className="form-check-label">
                                                        <input type="radio" name="gender" className="form-check-input"
                                                           value='Female' onChange={(e) => setGender(e.target.value) }
                                                        />Female
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <div className="form-group">
                                                        <label>Address</label>
                                                        <input type="text" className="form-control " name="address" value={address} onChange={(e) => setAddress(e.target.value) } />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label>Phone </label>
                                                <input className="form-control" type="text" name="phone" 
                                                value={phone} onChange={(e) => setPhone(e.target.value) } />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label>Avatar</label>
                                                <div className="profile-upload">
                                                    <div className="upload-img">
                                                        <img alt="" src="/assets/img/user.jpg" />
                                                    </div>
                                                    <div className="upload-input">
                                                        {/* <img src="" alt="" srcset="" /> */}
                                                        <input type="file" className="form-control"
                                                        name="doctorImage" onChange={handleDoctorImage} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-sm-6 col-md-6 col-lg-3">
                                            <div className="form-group">
                                                <label>Department</label>

                                                <select className="" name="department"
                                                 value={department} onChange={(e) => setDepartment(e.target.value) }>
                                                    {/* <% for (var i = 0; i < list.length; i++){ %>
                                            <option name="<%= list[i].department_name%>"><%= list[i].department_name%></option>
                                            <% } %> */}
                                            <option name="aurthopedics">aurthopedics</option>
                                            <option name="kardiologist">cardiologist</option>
                                                </select>


                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Short Biography</label>
                                        <textarea className="form-control" rows="3" cols="30" name="biography"
                                        value={biography} onChange={(e) => setBiography(e.target.value) }></textarea>
                                    </div>

                                    <div className="m-t-20 text-center">
                                        <button className="btn btn-primary submit-btn">Add Doctor</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="notification-box">
                        <div className="msg-sidebar notifications msg-noti">
                            <div className="topnav-dropdown-header">
                                <span>Messages</span>
                            </div>
                            <div className="drop-scroll msg-list-scroll" id="msg_list">
                                <ul className="list-box">
                                    <li>
                                        <a href="chat.html">
                                            <div className="list-item">
                                                <div className="list-left">
                                                    <span className="avatar">R</span>
                                                </div>
                                                <div className="list-body">
                                                    <span className="message-author">Richard Miles </span>
                                                    <span className="message-time">12:28 AM</span>
                                                    <div className="clearfix"></div>
                                                    <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>


                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddDoctor