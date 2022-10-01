import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addAppointment } from '../../actions';
import Layout from '../../Components/Layout/Layout'
import SideBar from '../../Components/SideBar/SideBar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Appointments = () => {

    // const [patientname, setPatientName] = useState('');
    // const [department, setDepartment] = useState('');
    // const [doctorname, setDoctorName] = useState('');
    // const [email, setEmail] = useState('');
    // const [date, setDate] = useState('');
    // const [time, setTime] = useState('');
    // const [contact, setContact] = useState('');

    const dispatch = useDispatch();
    const [message, setMessage] = useState('');

    const appointment = useSelector(state => state.appointment);
    const department = useSelector(state => state.department);
    const doctor = useSelector(state => state.doctor);




    const [appointments , setAppointments ] = useState({
        patientname: '', doctorname: '', email: '', date: '', time: '', contact: ''
    })

    let name, value;

    const handleSave = (e) => {
        e.preventDefault();
        
        name = e.target.name;
        value = e.target.value;

        setAppointments({ ...appointments, [name]: value });

    }

    const insertAppointment = (e) => {
        e.preventDefault();

        console.log({appointments})
        dispatch(addAppointment(appointments));
        toast.success('Appointment Added Successfully...', {
            position: toast.POSITION.TOP_RIGHT
        });
    }

    const showMessge = () => {

        setMessage(appointment.message);
        // setError(department.error);

        setTimeout(() => {
            setMessage('');
            setAppointments({
                patientname: '', doctorname: '', email: '', date: '', time: '', contact: ''
            })
            // setError('');
        }, 3000);

    }




    const renderAddAppointmentModal = () => {

        // const handleSave = (e) => {
        //     e.preventDefault();

        //     console.log({appointments})
            
        //     const form = new FormData();
        //     const form = new FormData();
    
        //     form.append('patientname', patientname);
        //     form.append('department', department);
        //     form.append('doctorname', doctorname);
        //     form.append('email', email);
        //     form.append('date', date);
        //     form.append('time', time);
        //     form.append('contact', contact);

        //     console.log(form)
    
        //     dispatch(addAppointment(form));
        // }


        return (
            <>
                {<SideBar />}
                <div class="page-wrapper">
                    <ToastContainer />
                <div style={{ marginLeft: '700px', color: 'green' }}><span>{message}</span></div>
                    <div class="content">
                        <div class="row">
                            <div class="col-lg-8 offset-lg-2">
                                <h4 class="page-title">Add Appointment</h4>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-8 offset-lg-2">
                                <form onSubmit={insertAppointment}>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Patient Name </label>
                                                <input class="form-control" type="text" name="patientname"
                                                 value={appointments.patientname}
                                                 onChange={handleSave} />
                                            </div>
                                        </div>

                                    {/* </div>
                                    <div class="row"> */}
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Doctor</label>
                                                <select class="" name="doctorname" 
                                                 value={appointments.doctorname}
                                                 onChange={handleSave}>

                                                    <option selected>Select</option>
                                                    {doctor.doctors.length > 0 ? doctor.doctors.map(doctor =>

                                                    <option value={doctor._id}>{doctor.firstname + ' ' + doctor.lastname}</option>

                                                    ) : null }
                                                   
                                                </select>
                                            </div>
                                        </div>
                                        {/* <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Doctor Name</label>
                                                <input type="text" name="doctorname" id="" 
                                                 value={appointments.doctorname}
                                                 onChange={handleSave} />
                                            </div>
                                        </div> */}
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Date</label>
                                                <div class="cal-icon">
                                                    <input type="text" class="form-control datetimepicker" name="date"
                                                     value={appointments.date}
                                                     onChange={handleSave} />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Time</label>
                                                <div class="time-icon">
                                                    <input type="text" class="form-control" id="datetimepicker3" name="time"
                                                     value={appointments.time}
                                                     onChange={handleSave} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Patient Email</label>
                                                <input class="form-control" type="email" name="email"
                                                 value={appointments.email}
                                                 onChange={handleSave} />
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Patient Phone Number</label>
                                                <input class="form-control" type="text" name="contact"
                                                 value={appointments.contact}
                                                 onChange={handleSave} />
                                            </div>
                                        </div>
                                    </div>


                                    <div class="m-t-20 text-center">
                                        <button onClick={showMessge} class="btn btn-primary submit-btn">Create Appointment</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }


    return (
        <Layout>
            {renderAddAppointmentModal()}
        </Layout>

    )
}

export default Appointments