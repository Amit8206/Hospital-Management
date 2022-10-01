import React from 'react'
import { Bar } from 'react-chartjs-2'
import Barchart from './Barchart'
// import './Dashboard.css'
import { useDispatch, useSelector } from 'react-redux'
import { signout } from '../actions'


const Dashboard = (props) => {

  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const doctor = useSelector(state => state.doctor);
  const appointment = useSelector(state => state.appointment);
 



  const logout = () => {
      dispatch(signout());
  }



  return (
    <div className='bar'>
      {/* <Barchart /> */}

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
                <a className="dropdown-item" style={{ cursor: 'pointer' }} onClick={logout}>Logout</a>
              </div>
            </li>
          </ul>
          <div className="dropdown mobile-user-menu float-right">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v"></i></a>
            <div className="dropdown-menu dropdown-menu-right">
              <a className="dropdown-item" href="/home/profile">My Profile</a>
              <a className="dropdown-item" href="/home/edit-profile">Edit Profile</a>
              <a className="dropdown-item" style={{ cursor: 'pointer' }} onClick={logout}>Logout</a>
            </div>
          </div>
        </div>
        <div className="sidebar" id="sidebar">
          <div className="sidebar-inner slimscroll">
            <div id="sidebar-menu" className="sidebar-menu">
              <ul>
                <li className="menu-title">Main</li>
                <li className="active">
                  <a href="/"><i className="fa fa-dashboard"></i> <span>Dashboard</span></a>
                </li>
                <li>
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
                  <ul style={{ display: "none"}}>
                    <li><a href="/employee">Employees List</a></li>
                    <li><a href="/employee/leave">Leaves</a></li>

                  </ul>
                </li>

                <li className="submenu">
                  <a href="#"><i className="fa fa-book"></i> <span> Payroll </span> <span className="menu-arrow"></span></a>
                  <ul style={{ display: "none"}}>
                    <li><a href="/receipt"> Employee Salary </a></li>

                  </ul>
                </li>


                <li className="submenu">
                  <a href="#"><i className="fa fa-envelope"></i> <span> Email</span> <span className="menu-arrow"></span></a>
                  <ul style={{ display: "none"}}>
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
              <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                <div className="dash-widget">
                  <span className="dash-widget-bg1"><i className="fa fa-stethoscope" aria-hidden="true"></i></span>
                  <div className="dash-widget-info text-right">
                    <h3>{ doctor.doctors.length }</h3>
                    {/* <%= doc %> */}
                    <span className="widget-title1">Doctors <i className="fa fa-check" aria-hidden="true"></i></span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                <div className="dash-widget">
                  <span className="dash-widget-bg2"><i className="fa fa-user-o"></i></span>
                  <div className="dash-widget-info text-right">
                    <h3>{ appointment.appointments.length }</h3>
                    {/* <%=appointment%> */}
                    <span className="widget-title2">Appointments <i className="fa fa-check" aria-hidden="true"></i></span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                <div className="dash-widget">
                  <span className="dash-widget-bg3"><i className="fa fa-user-md" aria-hidden="true"></i></span>
                  <div className="dash-widget-info text-right">
                    <h3>72</h3>
                    <span className="widget-title3">Attend <i className="fa fa-check" aria-hidden="true"></i></span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                <div className="dash-widget">
                  <span className="dash-widget-bg4"><i className="fa fa-heartbeat" aria-hidden="true"></i></span>
                  <div className="dash-widget-info text-right">
                    <h3>618</h3>
                    <span className="widget-title4">Pending <i className="fa fa-check" aria-hidden="true"></i></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                <div className="card">
                  <div className="card-body">
                    <div className="chart-title">
                      <h4>Patient Total</h4>
                      <span className="float-right"><i className="fa fa-caret-up" aria-hidden="true"></i> 15% Higher than Last Month</span>
                    </div>
                    <canvas id="linegraph"></canvas>
                    {/* <Barchart />  */}
                    {/* { Bar } */}
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                <div className="card">
                  <div className="card-body">
                    <div className="chart-title">
                      <h4>Patients In</h4>
                      <div className="float-right">
                        <ul className="chat-user-total">
                          <li><i className="fa fa-circle current-users" aria-hidden="true"></i>ICU</li>
                          <li><i className="fa fa-circle old-users" aria-hidden="true"></i> OPD</li>
                        </ul>
                      </div>
                    </div>
                    <canvas id="bargraph"></canvas>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6 col-lg-8 col-xl-8">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title d-inline-block">Upcoming Appointments number </h4> <a href="/appointments" className="btn btn-primary float-right">View all</a>
                    {/* <%= appointment%> */}
                  </div>
                  <div className="card-body p-0">
                    <div className="table-responsive">
                      <table className="table mb-0">
                        <thead className="d-none">
                          <tr>
                            <th>Patient Name</th>
                            <th>Doctor Name</th>
                            <th>Timing</th>

                          </tr>
                        </thead>
                        <tbody>
                          {/* <% for (var i = 0; i < applist.length; i++){ %> */}
                            <tr>
                              <td style={{ minWidth: "200px"}}>
                                <h5 className="time-title p-0">Patient Name</h5>
                                <p>Mr SK</p>
                                {/* <%= applist[i].patient_name%> */}
                              </td>
                              <td>
                                <h5 className="time-title p-0">Appointment With</h5>
                                <p>Mr AK</p>
                                {/* <%= applist[i].doctor_name%> */}
                              </td>
                              <td>
                                <h5 className="time-title p-0">Timing</h5>
                                <p>8pm</p>  
                                {/* <%= applist[i].time%> */}
                              </td>
                              <td className="text-right">
                                <a href="/appointments" className="btn btn-outline-primary take-btn">Take up</a>
                              </td>
                              {/* <% } %> */}
                            </tr>
											
											
											
										
										</tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 col-xl-4">
                <div className="card member-panel">
                  <div className="card-header bg-white">
                    <h4 className="card-title mb-0">Doctors</h4>
                  </div>
                  <div className="card-body">
                    <ul className="contact-list">
                      {/* <% for (var i = 0; i < doclist.length; i++){ %> */}
                                    <li>
                                        <div className="contact-cont">
                                            <div className="float-left user-img m-r-10">
                                                <a href="profile.html" title="John Doe"><img src="" alt="" className="w-40 rounded-circle" /><span className="status online"></span></a>
                                                {/* /assets/images/upload_images/<%= doclist[i].image %> */}
                                            </div>
                                            <div className="contact-info">
                                                <span className="contact-name text-ellipsis"></span>
                                                {/* <%= doclist[i].first_name%> <%= doclist[i].last_name%> */}
                                                <span className="contact-date">MBBS, MD</span>
                                            </div>
                                        </div>
                                    </li>
                                    {/* <% } %> */}




                    </ul>
                  </div>
                  <div className="card-footer text-center bg-white">
                    <a href="/doctors" className="text-muted">View all Doctors</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6 col-lg-8 col-xl-8">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title d-inline-block">New Patients </h4> <a href="patients.html" className="btn btn-primary float-right">View all</a>
                  </div>
                  <div className="card-block">
                    <div className="table-responsive">
                      <table className="table mb-0 new-patient-table">
                        <tbody>
                          <tr>
                            <td>
                              <img width="28" height="28" className="rounded-circle" src="/assets/img/user.jpg" alt="" />
                                <h2>John Doe</h2>
                            </td>
                            <td>Johndoe21@gmail.com</td>
                            <td>+1-202-555-0125</td>
                            <td><button className="btn btn-primary btn-primary-one float-right">Fever</button></td>
                          </tr>
                          <tr>
                            <td>
                              <img width="28" height="28" className="rounded-circle" src="/assets/img/user.jpg" alt="" />
                                <h2>Richard</h2>
                            </td>
                            <td>Richard123@yahoo.com</td>
                            <td>202-555-0127</td>
                            <td><button className="btn btn-primary btn-primary-two float-right">Cancer</button></td>
                          </tr>
                          <tr>
                            <td>
                              <img width="28" height="28" className="rounded-circle" src="/assets/img/user.jpg" alt="" />
                                <h2>Villiam</h2>
                            </td>
                            <td>Richard123@yahoo.com</td>
                            <td>+1-202-555-0106</td>
                            <td><button className="btn btn-primary btn-primary-three float-right">Eye</button></td>
                          </tr>
                          <tr>
                            <td>
                              <img width="28" height="28" className="rounded-circle" src="/assets/img/user.jpg" alt="" />
                                <h2>Martin</h2>
                            </td>
                            <td>Richard123@yahoo.com</td>
                            <td>776-2323 89562015</td>
                            <td><button className="btn btn-primary btn-primary-four float-right">Fever</button></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 col-xl-4">
                <div className="hospital-barchart">
                  <h4 className="card-title d-inline-block">Hospital Management</h4>
                </div>
                <div className="bar-chart">
                  <div className="legend">
                    <div className="item">
                      <h4>Level1</h4>
                    </div>

                    <div className="item">
                      <h4>Level2</h4>
                    </div>
                    <div className="item text-right">
                      <h4>Level3</h4>
                    </div>
                    <div className="item text-right">
                      <h4>Level4</h4>
                    </div>
                  </div>
                  <div className="chart clearfix">
                    <div className="item">
                      <div className="bar">
                        <span className="percent">16%</span>
                        <div className="item-progress" data-percent="16">
                          <span className="title">OPD Patient</span>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="bar">
                        <span className="percent">71%</span>
                        <div className="item-progress" data-percent="71">
                          <span className="title">New Patient</span>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="bar">
                        <span className="percent">82%</span>
                        <div className="item-progress" data-percent="82">
                          <span className="title">Laboratory Test</span>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="bar">
                        <span className="percent">67%</span>
                        <div className="item-progress" data-percent="67">
                          <span className="title">Treatment</span>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="bar">
                        <span className="percent">30%</span>
                        <div className="item-progress" data-percent="30">
                          <span className="title">Discharge</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
                  <li>
                    <a href="chat.html">
                      <div className="list-item new-message">
                        <div className="list-left">
                          <span className="avatar">J</span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">John Doe</span>
                          <span className="message-time">1 Aug</span>
                          <div className="clearfix"></div>
                          <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="chat.html">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">T</span>
                        </div>
                        <div className="list-body">
                          <span className="message-author"> Tarah Shropshire </span>
                          <span className="message-time">12:28 AM</span>
                          <div className="clearfix"></div>
                          <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="chat.html">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">M</span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">Mike Litorus</span>
                          <span className="message-time">12:28 AM</span>
                          <div className="clearfix"></div>
                          <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="chat.html">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">C</span>
                        </div>
                        <div className="list-body">
                          <span className="message-author"> Catherine Manseau </span>
                          <span className="message-time">12:28 AM</span>
                          <div className="clearfix"></div>
                          <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="chat.html">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">D</span>
                        </div>
                        <div className="list-body">
                          <span className="message-author"> Domenic Houston </span>
                          <span className="message-time">12:28 AM</span>
                          <div className="clearfix"></div>
                          <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="chat.html">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">B</span>
                        </div>
                        <div className="list-body">
                          <span className="message-author"> Buster Wigton </span>
                          <span className="message-time">12:28 AM</span>
                          <div className="clearfix"></div>
                          <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="chat.html">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">R</span>
                        </div>
                        <div className="list-body">
                          <span className="message-author"> Rolland Webber </span>
                          <span className="message-time">12:28 AM</span>
                          <div className="clearfix"></div>
                          <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="chat.html">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">C</span>
                        </div>
                        <div className="list-body">
                          <span className="message-author"> Claire Mapes </span>
                          <span className="message-time">12:28 AM</span>
                          <div className="clearfix"></div>
                          <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="chat.html">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">M</span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">Melita Faucher</span>
                          <span className="message-time">12:28 AM</span>
                          <div className="clearfix"></div>
                          <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="chat.html">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">J</span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">Jeffery Lalor</span>
                          <span className="message-time">12:28 AM</span>
                          <div className="clearfix"></div>
                          <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="chat.html">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">L</span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">Loren Gatlin</span>
                          <span className="message-time">12:28 AM</span>
                          <div className="clearfix"></div>
                          <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="chat.html">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">T</span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">Tarah Shropshire</span>
                          <span className="message-time">12:28 AM</span>
                          <div className="clearfix"></div>
                          <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="topnav-dropdown-footer">
                <a href="chat.html">See all messages</a>
              </div>
            </div>
          </div>
        </div>
      </div>




    </div>
  )
}

export default Dashboard