import Layout from './Layout/Layout'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { addDoctor } from '../actions'
// import SideBar from './Test/SideBar'





const Test = (props) => {


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


    const renderAddDoctorModal = () => {


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
        }


        const handleDoctorImage = (e) => {
            setDoctorImage([
                ...doctorImage,
                e.target.files[0]
            ]);
        }


        return (
            <>
            {/* {renderSideBar()} */}
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
                                <form onSubmit={handleSave}>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label>First Name <span className="text-danger">*</span></label>
                                                <input className="form-control" type="text" name="firstname"
                                                    value={firstname} onChange={(e) => setFirstName(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label>Last Name</label>
                                                <input className="form-control" type="text" name="lastname"
                                                    value={lastname} onChange={(e) => setLastName(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">

                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label>Email <span className="text-danger">*</span></label>
                                                <input className="form-control" type="email" name="email"
                                                    value={email} onChange={(e) => setEmail(e.target.value)} />
                                            </div>
                                        </div>


                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label>Date of Birth</label>
                                                <div className="cal-icon">
                                                    <input type="text" className="form-control datetimepicker" name="dob"
                                                        value={dob} onChange={(e) => setDob(e.target.value)} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group gender-select">
                                                <label className="gen-label">Gender:</label>
                                                <div className="form-check-inline">
                                                    <label className="form-check-label">
                                                        <input type="radio" name="gender" className="form-check-input"
                                                            value='Male' onChange={(e) => setGender(e.target.value)}
                                                        />Male
                                                    </label>
                                                </div>
                                                <div className="form-check-inline">
                                                    <label className="form-check-label">
                                                        <input type="radio" name="gender" className="form-check-input"
                                                            value='Female' onChange={(e) => setGender(e.target.value)}
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
                                                        <input type="text" className="form-control " name="address" value={address} onChange={(e) => setAddress(e.target.value)} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label>Phone </label>
                                                <input className="form-control" type="text" name="phone"
                                                    value={phone} onChange={(e) => setPhone(e.target.value)} />
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
                                                    value={department} onChange={(e) => setDepartment(e.target.value)}>
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
                                            value={biography} onChange={(e) => setBiography(e.target.value)}></textarea>
                                    </div>

                                    <div className="m-t-20 text-center">
                                        <button className="btn btn-primary submit-btn">Add Doctor</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }



    const renderSideBar = () => {


        return (
            <>
                <div class="page-wrapper">
                    <div class="sidebar" id="sidebar">
                        <div class="sidebar-inner slimscroll">
                            <div id="sidebar-menu" class="sidebar-menu">
                                <ul>
                                    <li class="menu-title">Main</li>
                                    <li >
                                        <a href="/"><i class="fa fa-dashboard"></i> <span>Dashboard</span></a>
                                    </li>
                                    <li class="active">
                                        <a href="/doctors"><i class="fa fa-user-md"></i> <span>Doctors</span></a>
                                    </li>
                                    <li>
                                        <a href="/patients"><i class="fa fa-wheelchair"></i> <span>Patients</span></a>
                                    </li>
                                    <li>
                                        <a href="/appointments"><i class="fa fa-calendar"></i> <span>Appointments</span></a>
                                    </li>
                                    <li>
                                        <a href="/departments"><i class="fa fa-hospital-o"></i> <span>Departments</span></a>
                                    </li>
                                    <li class="submenu">
                                        <a href="#"><i class="fa fa-user"></i> <span> Employees </span> <span class="menu-arrow"></span></a>
                                        <ul style={{ display: "none" }}>
                                            <li><a href="/employee">Employees List</a></li>
                                            <li><a href="/employee/leave">Leaves</a></li>
                                        </ul>
                                    </li>
                                    <li class="submenu">
                                        <a href="#"><i class="fa fa-book"></i> <span> Payroll </span> <span class="menu-arrow"></span></a>
                                        <ul style={{ display: "none" }}>
                                            <li><a href="/receipt"> Employee Salary </a></li>
                                        </ul>
                                    </li>
                                    <li class="submenu">
                                        <a href="#"><i class="fa fa-envelope"></i> <span> Email</span> <span class="menu-arrow"></span></a>
                                        <ul style={{ display: "none" }}>
                                            <li><a href="/compose">Compose Mail</a></li>
                                            <li><a href="/inbox">Inbox</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="/store"><i class="fa fa-cube"></i> <span>Medicine Store</span></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }




    const renderDoctorModal = () => {

        return (
            <>
                <div class="page-wrapper">
                    <div class="content">
                        <div class="row">
                            <div class="col-sm-4 col-3">
                                <h4 class="page-title">Doctors</h4>
                            </div>
                            <div class="col-sm-8 col-9 text-right m-b-20">
                                <a href="/doctors/add_doctor" class="btn btn-primary btn-rounded float-right"><i class="fa fa-plus"></i> Add Doctor</a>
                            </div>
                            <form action="" method="POST">
                                <div class="col-sm-6 col-md-12">
                                    <div class="form-group form-focus">
                                        <label class="focus-label" height=""></label>
                                        <input type="text" class="form-control floating" name="search" placeholder="" />

                                        <button formaction="/doctors/search" type="submit" class="btn btn-success">Search</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="table-responsive">
                                    <table class="table table-striped custom-table">
                                        <thead>
                                            <tr>
                                                <th style={{ MinWidth: "100px" }}>Image</th>
                                                <th>ID</th>
                                                <th>First Name</th>
                                                <th>Last Name</th>

                                                <th>Email</th>
                                                <th>DOB</th>
                                                <th>Gender</th>
                                                <th>Address</th>
                                                <th>Phone</th>
                                                <th>Department</th>

                                                <th class="text-right">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* { for (var i = 0; i < list.length; i++){  */}
                                            {/* { doctors.doctors.length > 0 ? doctors.doctors.map(doctor => */}
                                            <tr>
                                                <td>
                                                    {/* /assets/images/upload_images/<%= list[i].image %> */}
                                                    <img width="50" height="50" src="" class="rounded-circle" alt="" /> <h2></h2>
                                                </td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>


                                                {/* <td>{ doctor.id }</td>
                                                <td>{ doctor.firstname }</td>
                                                <td>{ doctor.lastname }</td> */}

                                                {/* <td>{ list[i].id }</td>
                                                <td>{list[i].first_name }</td>
                                                <td><%= list[i].last_name %></td>
                                                <td><%= list[i].email %></td>
                                                <td><%= list[i].dob %></td>
                                                <td><%= list[i].gender %></td>
                                                <td><%= list[i].address %></td>
                                                <td><%= list[i].phone %></td>
                                                <td><%= list[i].department %></td> */}
                                                <td class="text-right">
                                                    <div class="dropdown dropdown-action">
                                                        <a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a>
                                                        <div class="dropdown-menu dropdown-menu-right">
                                                            <a class="dropdown-item" href="http://localhost:8080/doctors/edit_doctor/<%= list[i].id %>"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                                                            <a class="dropdown-item" href="http://localhost:8080/doctors/delete_doctor/<%= list[i].id %>" ><i class="fa fa-trash-o m-r-5"></i> Delete</a>
                                                        </div>
                                                    </div>
                                                </td>

                                                {/* <% } %> */}

                                            </tr>
                                            {/* ) : null } */}

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }



    return (
        <Layout>

            {renderSideBar()}
            {renderDoctorModal()}

        </Layout>
    )
}

export default Test