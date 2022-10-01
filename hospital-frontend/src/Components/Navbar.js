import React from 'react'

const Navbar = (props) => {

    const renderLoggedInLinks = () => {
        return (
            <>
                <div class="header">
                    <div class="header-left">
                        <a href="/home" class="logo">
                            <img src="/assets/img/logo.png" width="35" height="35" alt="" /> <span>Preclinic</span>
                        </a>
                    </div>
                    <a id="toggle_btn" href="javascript:void(0);"><i class="fa fa-bars"></i></a>
                    <a id="mobile_btn" class="mobile_btn float-left" href="#sidebar"><i class="fa fa-bars"></i></a>
                    <ul class="nav user-menu float-right">
                        <li class="nav-item dropdown d-none d-sm-block">
                            <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">
                                <i class="fa fa-bell-o"></i> <span class="badge badge-pill bg-danger float-right">3</span></a>
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
            </>
        )
    }

    const renderNonLoggedInLinks = () => {
        return (

            <header className="main_menu home_menu">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <nav className="navbar navbar-expand-lg navbar-light">
                                <a className="navbar-brand" href="/"> <img src="img/logo.png" alt="logo" /> </a>
                                <button className="navbar-toggler" type="button" data-toggle="collapse"
                                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>

                                <div className="collapse navbar-collapse main-menu-item justify-content-center"
                                    id="navbarSupportedContent">
                                    <ul className="navbar-nav align-items-center">
                                        <li className="nav-item active">
                                            <a className="nav-link" href="/">Home</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/about">about</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/Doctor">Doctors</a>
                                        </li>

                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="blog.html" id="navbarDropdown"
                                                role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Pages
                                            </a>
                                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <a className="dropdown-item" href="services.html">services</a>
                                                <a className="dropdown-item" href="dep.html">depertments</a>
                                                <a className="dropdown-item" href="elements.html">Elements</a>
                                            </div>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="blog.html" id="navbarDropdown_1"
                                                role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                blog
                                            </a>
                                            <div className="dropdown-menu" aria-labelledby="navbarDropdown_1">
                                                <a className="dropdown-item" href="blog.html">blog</a>
                                                <a className="dropdown-item" href="single-blog.html">Single blog</a>
                                            </div>
                                        </li>

                                        <li className="nav-item">
                                            <a className="nav-link" href="/complain">Complain</a>
                                        </li>



                                        <li className="nav-item">
                                            <a className="nav-link" href="/signup">Sign Up</a>
                                        </li>

                                        <li className="nav-item">
                                            <a className="nav-link" href="/login">Log In</a>
                                        </li>
                                    </ul>
                                </div>
                                <a className="btn_2 d-none d-lg-block" href="#">HOT LINE- 09856</a>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>

        )
    }


    return (
        <div className="App">
            {/* {renderNonLoggedInLinks} */}
            <header className="main_menu home_menu">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-12">
                                <nav className="navbar navbar-expand-lg navbar-light">
                                    <a className="navbar-brand" href="/"> <img src="img/logo.png" alt="logo" /> </a>
                                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                        aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>

                                    <div className="collapse navbar-collapse main-menu-item justify-content-center"
                                        id="navbarSupportedContent">
                                        <ul className="navbar-nav align-items-center">
                                            <li className="nav-item active">
                                                <a className="nav-link" href="/">Home</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="/about">about</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="/Doctor">Doctors</a>
                                            </li>

                                            <li className="nav-item dropdown">
                                                <a className="nav-link dropdown-toggle" href="blog.html" id="navbarDropdown"
                                                    role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Pages
                                                </a>
                                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                    <a className="dropdown-item" href="services.html">services</a>
                                                    <a className="dropdown-item" href="dep.html">depertments</a>
                                                    <a className="dropdown-item" href="elements.html">Elements</a>
                                                </div>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <a className="nav-link dropdown-toggle" href="blog.html" id="navbarDropdown_1"
                                                    role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    blog
                                                </a>
                                                <div className="dropdown-menu" aria-labelledby="navbarDropdown_1">
                                                    <a className="dropdown-item" href="blog.html">blog</a>
                                                    <a className="dropdown-item" href="single-blog.html">Single blog</a>
                                                </div>
                                            </li>

                                            <li className="nav-item">
                                                <a className="nav-link" href="/complain">Complain</a>
                                            </li>



                                            <li className="nav-item">
                                                <a className="nav-link" href="/signup">Sign Up</a>
                                            </li>

                                            <li className="nav-item">
                                                <a className="nav-link" href="/login">Log In</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <a className="btn_2 d-none d-lg-block" href="#">HOT LINE- 09856</a>
                                </nav>
                            </div>
                        </div>
                    </div>
                </header>
        </div>

    )
}

export default Navbar