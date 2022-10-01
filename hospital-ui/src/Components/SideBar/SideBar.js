import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './sidebar.css'



const SideBar = () => {

    // const [name, setname] = useState('')

    // const handleClick = () => {
    //     setname('active')
    // }


    const auth = useSelector(state => state.auth);



    return (
        <div className="page-wrapper">
            <div className="sidebar" id="sidebar">
                <div className="sidebar-inner slimscroll">
                    <div id="sidebar-menu" className="sidebar-menu">
                        <ul>
                            <li className="menu-title">Main</li>
                            <li>
                                {/* <a href="/"><i className="fa fa-dashboard"></i> <span>Dashboard</span></a> */}
                                <NavLink to={'/'}> <i className="fa fa-dashboard"></i>&nbsp;&nbsp; Dashboard</NavLink>
                            </li>
                            {
                                auth.user.role === 'Admin' ?
                                    (
                                        <li>
                                            {/* <a href="/users"><i className="fa fa-user-md"></i> <span>Users</span></a> */}
                                            <NavLink to={'/users'}><i className="fa fa-user-md"> </i>&nbsp;&nbsp; Users</NavLink>
                                        </li>
                                    ) : null
                            }

                            {auth.user.role === 'Admin' || auth.user.role === 'User' || auth.user.role === 'Doctor' || auth.user.role === 'Employee' ? (
                                <>
                                    <li>
                                        {/* <a href="/doctors"><i className="fa fa-user-md"></i> <span>Doctors</span></a> */}
                                        <NavLink to={'/doctors'}><i className="fa fa-user-md"></i>&nbsp;&nbsp; Doctors</NavLink>
                                    </li>
                                    <li>
                                        {/* <a href="/patients"><i className="fa fa-wheelchair"></i> <span>Patients</span></a> */}
                                        <NavLink to={'/patients'}><i className="fa fa-wheelchair"></i>&nbsp;&nbsp; Patients</NavLink>

                                    </li>

                                    <li>
                                        {/* <a href="/appointments"><i className="fa fa-calendar"></i> <span>Appointments</span></a> */}
                                        <NavLink to={'/appointments'}><i className="fa fa-calendar"></i> &nbsp;&nbsp; Appointments</NavLink>

                                    </li>
                                    <li>
                                        {/* <a href="/departments"><i className="fa fa-hospital-o"></i> <span>Departments</span></a> */}
                                        <NavLink to={'/departments'}><i className="fa fa-hospital-o"></i> <span>Departments</span></NavLink>

                                    </li>
                                </>
                            ) : null}



                            {/* <li className="submenu"> */}
                            {/* <a href="#"><i className="fa fa-user"></i> <span> Employees </span> <span className="menu-arrow"></span></a> */}
                            {/* <NavLink to={'#'}><i className="fa fa-user"></i> <span> Employees </span> <span className="menu-arrow"></span></NavLink> */}

                            {/* <ul style={{ display: "none" }}>*/}




                            {auth.user.role === 'Admin' || auth.user.role === 'Doctor' || auth.user.role === 'Employee' ? (
                                <>

                                    <li>
                                        {/* <a href="/employees">Employees List</a> */}
                                        <NavLink to={'/employees'}><i class="fa fa-user" aria-hidden="true"></i>&nbsp;&nbsp; Employees List</NavLink>
                                    </li>
                                    <li>
                                        {/* <a href="/employeeleave">Leaves</a> */}
                                        <NavLink to={'/employeeleave'}><i class="fa fa-user" aria-hidden="true"></i>&nbsp;&nbsp; Employee Leaves</NavLink>

                                    </li>
                                </>) : null}


                            {/* </ul>
                            </li> */}
                            {/* <li className="submenu"> */}
                            {/* <a href="#"><i className="fa fa-book"></i> <span> Payroll </span> <span className="menu-arrow"></span></a> */}
                            {/* <NavLink to={'#'}><i className="fa fa-book"></i> <span> Payroll </span><span className="menu-arrow"></span></NavLink> */}

                            {/* <ul style={{ display: "none" }}> */}


                            {auth.user.role === 'Admin' ? (
                                <li>
                                    {/* <a href="/receipt"> Employee Salary </a> */}
                                    <NavLink to={'/receipt'}><i class="fa fa-user" aria-hidden="true"></i>&nbsp;&nbsp; Employee Salary</NavLink>
                                </li>) : null}


                            {/* </ul>
                            </li> */}
                            {/* <li className="submenu"> */}
                            {/* <a href="#"><i className="fa fa-envelope"></i> <span> Email</span> <span className="menu-arrow"></span></a> */}
                            {/* <NavLink to={'#'}><i className="fa fa-envelope"></i> <span> Email</span> <span className="menu-arrow"></span></NavLink> */}

                            {/* <ul style={{ display: "none" }}> */}
                            {/* <li> */}
                            {/* <a href="/compose">Compose Mail</a> */}
                            {/* <NavLink to={'/add_mail'}><i class="fa fa-envelope" aria-hidden="true"></i>&nbsp;&nbsp; Compose Mail</NavLink> */}
                            {/* </li> */}

                            {auth.user.role === 'Admin' || auth.user.role === 'Doctor' || auth.user.role === 'Medicine' || auth.user.role === 'User' || auth.user.role === 'Sweeper' || auth.user.role === 'Nursh' || auth.user.role === 'Payrool' ? (

                                <li>
                                    {/* <a href="/inbox">Inbox</a> */}

                                    <NavLink to={'/complains'}><i class="fa fa-envelope-o" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;Inbox</NavLink>
                                </li>) : null}


                            {/* </ul>
                            </li> */}


                            {auth.user.role === 'Admin' || auth.user.role === 'Doctor' || auth.user.role === 'Medicine' || auth.user.role === 'User' || auth.user.role === 'Sweeper' || auth.user.role === 'Nursh' || auth.user.role === 'Payrool' ? (

                                <li>
                                    {/* <a href="/store"><i className="fa fa-cube"></i> <span>Medicine Store</span></a> */}
                                    <NavLink to={'/store'}><i className="fa fa-cube"></i> <span>Medicine Store</span></NavLink>
                                </li>) : null}

                            {auth.user.role === 'Admin' ? (
                                <li>
                                    {/* <a href="/requests"><i className="fa fa-hospital-o"></i> <span>Requests</span></a> */}
                                    <NavLink to={'/requests'}><i className="fa fa-hospital-o"></i> <span>Requests</span></NavLink>

                                </li>) : null}

                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SideBar