import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteAppointment } from '../../actions'
import Layout from '../../Components/Layout/Layout'
import SideBar from '../../Components/SideBar/SideBar'



const Appointment = () => {

    const appointment = useSelector(state => state.appointment);
    const dispatch = useDispatch();

    const auth = useSelector(state => state.auth);



    const handleDelete = (id) => {

        // console.log({id});
        dispatch(deleteAppointment(id));
    }


    const renderAppointmentModal = () => {


        return (
            <>
                {<SideBar />}
                <div class="page-wrapper">
                    <div class="content">
                        <div class="row">
                            <div class="col-sm-4 col-3">
                                <h4 class="page-title">Appointments</h4>
                            </div>
                            {auth.user.role == 'Medicine' || auth.user.role == 'Admin'  || auth.user.role == 'User' || auth.user.role == 'Sweeper' || auth.user.role == 'Nursh' || auth.user.role == 'Payrool' ? (
                            <div class="col-sm-8 col-9 text-right m-b-20">
                                <a href="/add_appointment" class="btn btn btn-primary btn-rounded float-right"><i class="fa fa-plus"></i> Add Appointment</a>
                            </div> ) : null }
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="table-responsive">
                                    <table class="table table-striped custom-table">
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


                                                {/* {auth.user.role == 'Admin' ? (     <th class="text-right">Action</th>  ) : null } */}


                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* <% for (var i = 0; i < list.length; i++){ %> */}
                                            {appointment.appointments.length > 0 ? appointment.appointments.map(appointment =>

                                            <tr>
                                                <td>{appointment._id}</td>
                                                <td>{appointment.patientname}</td>
                                                <td>{appointment.department}</td>
                                                <td>{appointment.doctorname}</td>
                                                <td>{appointment.date}</td>
                                                <td>{appointment.time}</td>
                                                <td>{appointment.email}</td>
                                                <td>{appointment.contact}</td>
                                                {/* <td style={{ color: 'red' }}>{appointment.appointment_status}</td> */}
                                                {
                                                    appointment.appointment_status == 'Not_Approved' ? (
                                                        <td style={{ color: 'red' }}>{appointment.appointment_status}</td>
                                                    ) : (
                                                        <td style={{ color: 'green' }}>{appointment.appointment_status}</td>
                                                    )
                                                }

                                                {/* {auth.user.role == 'Admin' ? (
                                                    <>

                                                <td class="text-right">
                                                    <div class="dropdown dropdown-action">
                                                        <a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a>
                                                        <div class="dropdown-menu dropdown-menu-right">
                                                            <a class="dropdown-item" href="/appointments/edit_appointment/<%= list[i].id %>"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                                                            <a class="dropdown-item" onClick={() => handleDelete(appointment._id)}><i class="fa fa-trash-o m-r-5"></i> Delete</a>
                                                        </div>
                                                    </div>
                                                </td>
                                                </>
                                                 ) : null} */}
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
        )
    }



    return (
        <Layout>

            {renderAppointmentModal()}

        </Layout>
    )
}

export default Appointment