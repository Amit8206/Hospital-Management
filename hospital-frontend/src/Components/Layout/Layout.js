import React from 'react'
import Header from '../Test/Header'

const Layout = (props) => {
    return (
        <div class="main-wrapper">
            <Header />

            {props.sidebar ?
                (
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


                ) : (props.children)}

            {/* <h2>Hello Welcome To  Layout</h2> */}


        </div>
    )
}

export default Layout