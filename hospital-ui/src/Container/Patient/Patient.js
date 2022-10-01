import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deletePatient } from '../../actions'
import Layout from '../../Components/Layout/Layout'
import SideBar from '../../Components/SideBar/SideBar'




const Patient = () => {

    const patient = useSelector(state => state.patient);
    const dispatch = useDispatch();

    const auth = useSelector(state => state.auth);



    const handleDelete = (id) => {
        dispatch(deletePatient(id));
    }


    const renderPatientModal = () => {

        return (
            <>
                {<SideBar />}
                <div className="page-wrapper">
                    <div className="content">
                        <div className="row">
                            <div className="col-sm-4 col-3">
                                <h4 className="page-title">Patient</h4>
                            </div>
                            { auth.user.role == 'Admin' || auth.user.role == 'Doctor' ? ( 
                            <div className="col-sm-8 col-9 text-right m-b-20">
                                <a href="/add_patient" className="btn btn btn-primary btn-rounded float-right"><i className="fa fa-plus"></i> Add Patient</a>
                            </div>  ) : null }
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="table-responsive">
                                    <table className="table table-striped custom-table">
                                        <thead>
                                            <tr>
                                                <th>Patient ID</th>
                                                <th>Patient Name</th>
                                                <th>Patient Age</th>
                                                <th>Admit Date</th>
                                                <th>Admit Time</th>
                                                <th>Discharge Date</th>
                                                <th>Discharge Time</th>
                                                <th>Address</th>
                                                <th>Contact</th>
                                                <th>doctor</th>
                                                <th>Department</th>
                                                <th>Patient State</th>
                                                {auth.user.role == 'Doctor' || auth.user.role == 'Admin' ? (

                                                <th className="text-right">Action</th> ) : null }
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* <% for (var i = 0; i < list.length; i++){ %> */}
                                            {patient.patients.length > 0 ? patient.patients.map(patient =>

                                            <tr>
                                                <td>{patient._id}</td>
                                                <td>{patient.patientName}</td>
                                                <td>{patient.age}</td>
                                                <td>{patient.admitDate}</td>
                                                <td>{patient.admitTime}</td>
                                                <td style={{ textAlign: 'center' }}>{patient.dischargeDate}</td>
                                                <td style={{ textAlign: 'center' }}>{patient.dischargeTime}</td>
                                                <td>{patient.address}</td>
                                                <td>{patient.contact}</td>
                                                <td>{patient.doctorName}</td>
                                                <td>{patient.department}</td>
                                                <td style={{ color: 'red' }}>Still Admited</td>

                                                {auth.user.role == 'Doctor' || auth.user.role == 'Admin' ? (

                                                <td className="text-right">
                                                    <div className="dropdown dropdown-action">
                                                        <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v"></i></a>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <a className="dropdown-item" href="/appointments/edit_appointment/<%= list[i].id %>"><i className="fa fa-pencil m-r-5"></i> Edit</a>
                                                            <a className="dropdown-item" onClick={() => handleDelete(patient._id)}><i className="fa fa-trash-o m-r-5"></i> Delete</a>
                                                        </div>
                                                    </div>
                                                </td>
                                                ) : null }
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

            {renderPatientModal()}

        </Layout>
    )
}

export default Patient