import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { approveAppointment, ApproveUser, deleteAppointment, deleteUser } from '../../actions'
import Layout from '../../Components/Layout/Layout'
import SideBar from '../../Components/SideBar/SideBar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react'



const Requests = () => {

    const leave = useSelector(state => state.leave);
    const user = useSelector(state => state.user);

    const patient = useSelector(state => state.patient);
    const appointment = useSelector(state => state.appointment);
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);

    const handleUserApprove = (id) => {
        console.log(id)
        dispatch(ApproveUser(id));
        toast.success('User Approved Successfully...', {
            position: toast.POSITION.TOP_CENTER
        });
    }

    const handleUserDelete = (id) => {
        console.log({id});
        dispatch(deleteUser(id));
        toast.warn('User Deleted Successfully...', {
            position: toast.POSITION.TOP_CENTER
        });
    }


    const handleAppointmentApprove = (id) => {
        console.log(id)
        dispatch(approveAppointment(id));
        toast.success('Appointment Approved Successfully...', {
            position: toast.POSITION.TOP_CENTER
        });
    }

    const handleAppointmentDelete = (id) => {
        console.log({id});
        dispatch(deleteAppointment(id));
        toast.warn('Appointment Deleted Successfully...', {
            position: toast.POSITION.TOP_CENTER
        });
    }

    const handleLeaveApprove = (id) => {
        console.log(id)
        dispatch(approveAppointment(id));
        toast.success('Leave Approved Successfully...', {
            position: toast.POSITION.TOP_CENTER
        });
    }


    const handleLeaveDelete = (id) => {
        console.log({id});
        dispatch(deleteAppointment(id));
        toast.warn('Leave Deleted Successfully...', {
            position: toast.POSITION.TOP_CENTER
        });
    }





    const renderRequestModal = () => {

        return (
            <>
                {<SideBar />}
                <>
                <ToastContainer />
                    <div className="page-wrapper">
                        <div className="content">
                            <div className="row">
                                <div className="col-sm-4 col-3">
                                    <h4 className="page-title">Signup Requests</h4>
                                </div>
                                {/* {auth.user.role == 'Admin' || auth.user.role == 'Doctor' ? (
                                <div className="col-sm-8 col-9 text-right m-b-20">
                                    <a href="/add_patient" className="btn btn btn-primary btn-rounded float-right"><i className="fa fa-plus"></i> Add Patient</a>
                                </div>) : null} */}
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="table-responsive">
                                        <table className="table table-striped custom-table">
                                            <thead>
                                                <tr>
                                                    <th>Id</th>
                                                    <th>Name</th>
                                                    <th>User Name</th>
                                                    <th>Email</th>
                                                    <th>Role</th>
                                                    <th>Email Status</th>

                                                    {/* { auth.user.role == 'Admin' ? ( */}

                                                    <th className="text-right">Action</th>
                                                    {/*  ) : null} */}
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {/* <% for (var i = 0; i < list.length; i++){ %> */}
                                                {/* {patient.patients.length > 0 ? patient.patients.map(patient => */}
                                                {user.pendingUsers.length > 0 ? user.pendingUsers.map(user =>

                                                    <tr>
                                                        <td>{user._id}</td>
                                                        <td>{user.name}</td>
                                                        <td>{user.username}</td>
                                                        <td>{user.email}</td>
                                                        <td>{user.role}</td>
                                                        <td style={{ color: 'red' }}>{user.email_status}</td>
                                                        {/* <td></td>
                                                    <td>{patient.address}</td>
                                                    <td>{patient.contact}</td>
                                                    <td>{patient.department}</td>
                                                    <td style={{ color: 'red' }}>Still Admited</td> */}

                                                        {auth.user.role == 'Admin' ? (

                                                            <td className="text-right">
                                                                <div className="dropdown dropdown-action">
                                                                    <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v"></i></a>
                                                                    <div className="dropdown-menu dropdown-menu-right">
                                                                        <a className="dropdown-item" style={{ cursor: 'pointer' }} onClick={() => handleUserApprove(user._id)}><i className="fa fa-pencil m-r-5"></i> Approve</a>
                                                                        <a className="dropdown-item" style={{ cursor: 'pointer' }} onClick={() => handleUserDelete(user._id)}><i className="fa fa-trash-o m-r-5"></i> Delete</a>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        ) : null}
                                                    </tr>
                                                ) : null}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
                <>
                    <div className="page-wrapper">
                        <div className="content">
                            <div className="row">
                                <div className="col-sm-4 col-3">
                                    <h4 className="page-title">Leave Requests</h4>
                                </div>
                                {/* {auth.user.role == 'Admin' || auth.user.role == 'Doctor' ? (
                                <div className="col-sm-8 col-9 text-right m-b-20">
                                    <a href="/add_patient" className="btn btn btn-primary btn-rounded float-right"><i className="fa fa-plus"></i> Add Patient</a>
                                </div>) : null} */}
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="table-responsive">
                                        <table className="table table-striped custom-table">
                                            <thead>
                                                <tr>
                                                    <th>Leave ID</th>
                                                    <th>Employee Name</th>
                                                    <th>Leave Type</th>
                                                    <th>Date from</th>
                                                    <th>Date To</th>
                                                    <th>Reason</th>
                                                    <th>Leave Status</th>
                                    

                                                    {auth.user.role == 'Admin' ? (

                                                        <th className="text-right">Action</th>) : null}
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {/* <% for (var i = 0; i < list.length; i++){ %> */}
                                                {leave.pendingLeaves.length > 0 ? leave.pendingLeaves.map(leave =>

                                                    <tr>
                                                        <td>{leave._id}</td>
                                                        <td>{leave.employeeName}</td>
                                                        <td>{leave.leaveType}</td>
                                                        <td>{leave.dateFrom}</td>
                                                        <td>{leave.dateTo}</td>
                                                        <td>{leave.reason}</td>
                                                        <td>{leave.leave_status}</td>
                                                        
                                                        <td>{user.email_status}</td>


                                                        {auth.user.role == 'Doctor' || auth.user.role == 'Admin' ? (

                                                            <td className="text-right">
                                                                <div className="dropdown dropdown-action">
                                                                    <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v"></i></a>
                                                                    <div className="dropdown-menu dropdown-menu-right">
                                                                        <a className="dropdown-item" style={{ cursor: 'pointer' }} onClick={() => handleLeaveApprove(leave._id)}><i className="fa fa-pencil m-r-5"></i> Approve</a>
                                                                        <a className="dropdown-item" style={{ cursor: 'pointer' }} onClick={() => handleLeaveDelete(leave._id)}><i className="fa fa-trash-o m-r-5"></i> Delete</a>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        ) : null}
                                                    </tr>
                                                ) : null}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
                <>
                    <div className="page-wrapper">
                        <div className="content">
                            <div className="row">
                                <div className="col-sm-4 col-3">
                                    <h4 className="page-title">Appointment Requests</h4>
                                </div>
                                {/* {auth.user.role == 'Admin' || auth.user.role == 'Doctor' ? (
                                <div className="col-sm-8 col-9 text-right m-b-20">
                                    <a href="/add_patient" className="btn btn btn-primary btn-rounded float-right"><i className="fa fa-plus"></i> Add Patient</a>
                                </div>) : null} */}
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="table-responsive">
                                        <table className="table table-striped custom-table">
                                            <thead>
                                                <tr>
                                                    <th>Appointment ID</th>
                                                    <th>Patient Name</th>
                                                    <th>Department</th>
                                                    <th>Doctor Name</th>
                                                    <th>Appointment Date</th>
                                                    <th>Appointment Time</th>
                                                    <th>Patient Email</th>
                                                    <th>Patient Phone</th>
                                                    <th>Apply State</th>


                                                    {auth.user.role == 'Admin' ? (<th className="text-right">Action</th>) : null}


                                                </tr>
                                            </thead>
                                            <tbody>
                                                {/* <% for (var i = 0; i < list.length; i++){ %> */}
                                                {appointment.pendingAppointments.length > 0 ? appointment.pendingAppointments.map(appointment =>

                                                    <tr>
                                                        <td>{appointment._id}</td>
                                                        <td>{appointment.patientname}</td>
                                                        <td>{appointment.department}</td>
                                                        <td>{appointment.doctorname}</td>
                                                        <td>{appointment.date}</td>
                                                        <td>{appointment.time}</td>
                                                        <td>{appointment.email}</td>
                                                        <td>{appointment.contact}</td>
                                                        <td style={{ color: 'red' }}>{appointment.appointment_status}</td>


                                                        {auth.user.role == 'Admin' ? (
                                                            <>
                                                                <td className="text-right">
                                                                    <div className="dropdown dropdown-action">
                                                                        <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v"></i></a>
                                                                        <div className="dropdown-menu dropdown-menu-right">
                                                                            <a className="dropdown-item" style={{ cursor: 'pointer' }} onClick={() => handleAppointmentApprove(appointment._id)}><i className="fa fa-pencil m-r-5"></i> Approved</a>
                                                                            <a className="dropdown-item" style={{ cursor: 'pointer' }} onClick={() => handleAppointmentDelete(appointment._id)}><i className="fa fa-trash-o m-r-5"></i> Delete</a>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                            </>
                                                        ) : null}
                                                    </tr>
                                                ) : null}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            </>
        )
    }


    return (
        <Layout>
            {renderRequestModal()}
        </Layout>
    )
}

export default Requests
