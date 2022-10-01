import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signout } from '../actions'

const Doctors = () => {

    const doctors = useSelector(state => state.doctor);
    
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();
    
    // console.log({doctors})
    console.log("Doctors from Page", doctors)
   
  
  
  
    const logout = () => {
        dispatch(signout());
    }


    return (
        <div>
            <div class="main-wrapper">
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
                                <span>Admin</span>
                            </a>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="/home/profile">My Profile</a>
                                <a class="dropdown-item" href="/home/edit-profile">Edit Profile</a>

                                <a class="dropdown-item" href="/logout">Logout</a>
                            </div>
                        </li>
                    </ul>
                    <div class="dropdown mobile-user-menu float-right">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a>
                        <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="/home/profile">My Profile</a>
                            <a class="dropdown-item" href="/home/edit-profile">Edit Profile</a>

                            <a class="dropdown-item" href="/logout">Logout</a>
                        </div>
                    </div>
                </div>
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
                                    <ul style={{display: "none"}}>
                                        <li><a href="/receipt"> Employee Salary </a></li>

                                    </ul>
                                </li>


                                <li class="submenu">
                                    <a href="#"><i class="fa fa-envelope"></i> <span> Email</span> <span class="menu-arrow"></span></a>
                                    <ul style={{display: "none"}}>
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
            <div class="page-wrapper">
                <div class="content">
                    <div class="row">
                        <div class="col-sm-4 col-3">
                            <h4 class="page-title">Doctors</h4>
                        </div>
                        <div class="col-sm-8 col-9 text-right m-b-20">
                            <a href="http://localhost:3000/doctors/add_doctor" class="btn btn-primary btn-rounded float-right"><i class="fa fa-plus"></i> Add Doctor</a>
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
                    <div class="notification-box">
                        <div class="msg-sidebar notifications msg-noti">
                            <div class="topnav-dropdown-header">
                                <span>Messages</span>
                            </div>
                            <div class="drop-scroll msg-list-scroll" id="msg_list">
                                <ul class="list-box">
                                    <li>
                                        <a href="chat.html">
                                            <div class="list-item">
                                                <div class="list-left">
                                                    <span class="avatar">R</span>
                                                </div>
                                                <div class="list-body">
                                                    <span class="message-author">Richard Miles </span>
                                                    <span class="message-time">12:28 AM</span>
                                                    <div class="clearfix"></div>
                                                    <span class="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="chat.html">
                                            <div class="list-item new-message">
                                                <div class="list-left">
                                                    <span class="avatar">J</span>
                                                </div>
                                                <div class="list-body">
                                                    <span class="message-author">John Doe</span>
                                                    <span class="message-time">1 Aug</span>
                                                    <div class="clearfix"></div>
                                                    <span class="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="chat.html">
                                            <div class="list-item">
                                                <div class="list-left">
                                                    <span class="avatar">T</span>
                                                </div>
                                                <div class="list-body">
                                                    <span class="message-author"> Tarah Shropshire </span>
                                                    <span class="message-time">12:28 AM</span>
                                                    <div class="clearfix"></div>
                                                    <span class="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="chat.html">
                                            <div class="list-item">
                                                <div class="list-left">
                                                    <span class="avatar">M</span>
                                                </div>
                                                <div class="list-body">
                                                    <span class="message-author">Mike Litorus</span>
                                                    <span class="message-time">12:28 AM</span>
                                                    <div class="clearfix"></div>
                                                    <span class="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="chat.html">
                                            <div class="list-item">
                                                <div class="list-left">
                                                    <span class="avatar">C</span>
                                                </div>
                                                <div class="list-body">
                                                    <span class="message-author"> Catherine Manseau </span>
                                                    <span class="message-time">12:28 AM</span>
                                                    <div class="clearfix"></div>
                                                    <span class="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="chat.html">
                                            <div class="list-item">
                                                <div class="list-left">
                                                    <span class="avatar">D</span>
                                                </div>
                                                <div class="list-body">
                                                    <span class="message-author"> Domenic Houston </span>
                                                    <span class="message-time">12:28 AM</span>
                                                    <div class="clearfix"></div>
                                                    <span class="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="chat.html">
                                            <div class="list-item">
                                                <div class="list-left">
                                                    <span class="avatar">B</span>
                                                </div>
                                                <div class="list-body">
                                                    <span class="message-author"> Buster Wigton </span>
                                                    <span class="message-time">12:28 AM</span>
                                                    <div class="clearfix"></div>
                                                    <span class="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="chat.html">
                                            <div class="list-item">
                                                <div class="list-left">
                                                    <span class="avatar">R</span>
                                                </div>
                                                <div class="list-body">
                                                    <span class="message-author"> Rolland Webber </span>
                                                    <span class="message-time">12:28 AM</span>
                                                    <div class="clearfix"></div>
                                                    <span class="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="chat.html">
                                            <div class="list-item">
                                                <div class="list-left">
                                                    <span class="avatar">C</span>
                                                </div>
                                                <div class="list-body">
                                                    <span class="message-author"> Claire Mapes </span>
                                                    <span class="message-time">12:28 AM</span>
                                                    <div class="clearfix"></div>
                                                    <span class="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="chat.html">
                                            <div class="list-item">
                                                <div class="list-left">
                                                    <span class="avatar">M</span>
                                                </div>
                                                <div class="list-body">
                                                    <span class="message-author">Melita Faucher</span>
                                                    <span class="message-time">12:28 AM</span>
                                                    <div class="clearfix"></div>
                                                    <span class="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="chat.html">
                                            <div class="list-item">
                                                <div class="list-left">
                                                    <span class="avatar">J</span>
                                                </div>
                                                <div class="list-body">
                                                    <span class="message-author">Jeffery Lalor</span>
                                                    <span class="message-time">12:28 AM</span>
                                                    <div class="clearfix"></div>
                                                    <span class="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="chat.html">
                                            <div class="list-item">
                                                <div class="list-left">
                                                    <span class="avatar">L</span>
                                                </div>
                                                <div class="list-body">
                                                    <span class="message-author">Loren Gatlin</span>
                                                    <span class="message-time">12:28 AM</span>
                                                    <div class="clearfix"></div>
                                                    <span class="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="chat.html">
                                            <div class="list-item">
                                                <div class="list-left">
                                                    <span class="avatar">T</span>
                                                </div>
                                                <div class="list-body">
                                                    <span class="message-author">Tarah Shropshire</span>
                                                    <span class="message-time">12:28 AM</span>
                                                    <div class="clearfix"></div>
                                                    <span class="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="topnav-dropdown-footer">
                                <a href="chat.html">See all messages</a>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default Doctors