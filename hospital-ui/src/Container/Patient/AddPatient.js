import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addPatient } from '../../actions';
import Layout from '../../Components/Layout/Layout'
import SideBar from '../../Components/SideBar/SideBar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AddPatient = () => {

    const dispatch = useDispatch();
    const patient = useSelector(state => state.patient);
    const department = useSelector(state => state.department);
    const doctor = useSelector(state => state.doctor);


    const [message, setMessage] = useState('');


    const [patients, setPatients] = useState({
        patientName: '', age: '', admitDate: '', admitTime: '', address: '', contact: '', doctorName: ''
    })

    let name, value;

    const handleSave = (e) => {
        e.preventDefault();

        name = e.target.name;
        value = e.target.value;

        setPatients({ ...patients, [name]: value });

    }

    const insertEmployee = (e) => {
        e.preventDefault();

        if (patients.patientName === '' || patients.age === '' || patients.admitDate === '' || patients.dischargeDate === '' ||
         patients.address === '' || patients.contact === '' || patients.doctorName === '') {
            toast.warning('Please Fill All Form..!!', {
                position: toast.POSITION.TOP_CENTER
            });
        } else {
            console.log({ patients })
            dispatch(addPatient(patients));
            toast.success('Patient Added Successfully...', {
                position: toast.POSITION.TOP_RIGHT
            });
            // setPatients({
            //     patientName: '', age: '', admitDate: '', admitTime: '', address: '', contact: '', department: '', doctorName: ''
            // })
        }

        
    }

    // const showMessge = () => {

    //     setMessage(patient.message);
    //     // setError(department.error);

    //     setTimeout(() => {
    //         setMessage('');
    //         setPatients({
    //             patientName: '', age: '', admitDate: '', admitTime: '', address: '', contact: '', department: ''
    //         })
    //         // setError('');
    //     }, 3000);

    // }



    const renderAddPatientModal = () => {


        // const savePatient = () => {

        //     const form = new FormData();

        //     form.append('name', name);
        //     form.append('email', email);
        //     form.append('contact', contact);
        //     form.append('salary', salary);
        //     form.append('joinDate', joindate);
        //     form.append('role', role);

        //     console.log({form});
        //     dispatch(addEmployee(form));
        // }


        return (
            <>
                {<SideBar />}
                <div class="page-wrapper">
                <ToastContainer />
                    {/* <div style={{ marginLeft: '700px', color: 'green' }}><span>{message}</span></div> */}

                    <div class="content">
                        <div class="row">
                            <div class="col-lg-8 offset-lg-2">
                                <h4 class="page-title">Add Patient</h4>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-8 offset-lg-2">
                                <form onSubmit={insertEmployee}>
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <label> Patient Name <span class="text-danger">*</span></label>
                                                <input
                                                    class="form-control"
                                                    type="text"
                                                    name="patientName"
                                                    value={patients.patientName}
                                                    onChange={handleSave}
                                                />
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <label>Age</label>
                                                <input
                                                    class="form-control"
                                                    type="text"
                                                    name="age"
                                                    value={patients.age}
                                                    onChange={handleSave}
                                                />
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <label> Admit Date <span class="text-danger">*</span></label>
                                                <input
                                                    class="form-control"
                                                    type="text"
                                                    name="admitDate"
                                                    value={patients.admitDate}
                                                    onChange={handleSave}
                                                />
                                            </div>
                                        </div>

                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <label> Admit Time <span class="text-danger">*</span></label>
                                                <input
                                                    class="form-control"
                                                    type="text"
                                                    name="admitTime"
                                                    value={patients.admitTime}
                                                    onChange={handleSave}
                                                />
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <label>Address <span class="text-danger">*</span></label>
                                                <input
                                                    class="form-control"
                                                    type="text"
                                                    name="address"
                                                    value={patients.address}
                                                    onChange={handleSave}
                                                />
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <label>Contact <span class="text-danger">*</span></label>
                                                <input
                                                    class="form-control"
                                                    type="text"
                                                    name="contact"
                                                    value={patients.contact}
                                                    onChange={handleSave}
                                                />
                                            </div>
                                        </div>
                                        {/* <div class="col-sm-6">
                                            <div class="form-group">
                                                <label>Department <span class="text-danger">*</span></label>
                                                <select class="" name="department" 
                                                 value={patients.department}
                                                 onChange={handleSave}>

                                                    <option selected>Select</option>
                                                    {department.departments.length > 0 ? department.departments.map(department =>

                                                    <option value={department.name}>{department.name}</option>

                                                    ) : null }
                                                </select>
                                                
                                            </div>
                                        </div> */}
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <label>Doctor <span class="text-danger">*</span></label>
                                                <select class="" name="doctorName" 
                                                //  value={patients.doctor}
                                                 onChange={handleSave}>

                                                    <option value='' selected>Select</option>
                                                    {doctor.doctors.length > 0 ? doctor.doctors.map(doctor =>

                                                    <option value={doctor._id}>{doctor.firstname + ' ' + doctor.lastname}--------{doctor.department}</option>

                                                    ) : null }
                                                </select>
                                               
                                            </div>
                                        </div>

                                    </div>

                                    <div class="m-t-20 text-center">
                                        <button class="btn btn-primary submit-btn">Create Employee</button>
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
            {renderAddPatientModal()}
        </Layout>
    )
}

export default AddPatient