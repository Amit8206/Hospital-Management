import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteDoctor, getInitialData } from '../../actions'
import Layout from '../../Components/Layout/Layout'
import SideBar from '../../Components/SideBar/SideBar'
import { generatePubliucUrls } from '../../urlConfig'




const Doctors = () => {

    const doctor = useSelector(state => state.doctor);


    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();


    const handleDelete = (id) => {

        // console.log({id});

        dispatch(deleteDoctor(id));
        // dispatch(getInitialData());
    }




    const renderDoctorModal = () => {

        return (
            <>
                {<SideBar />}
                <div className="page-wrapper">
                    <div className="content">
                        <div className="row">
                            <div className="col-sm-4 col-3">
                                <h4 className="page-title">Doctors</h4>
                            </div>
                            <div className="col-sm-8 col-9 text-right m-b-20">
                            {/* { auth.user.role == 'Admin' ? (
                                <a href="/add_doctor" className="btn btn-primary btn-rounded float-right"><i className="fa fa-plus"></i> Add Doctor</a>
                                )  : null } */}
                            </div>  
                            <form action="" method="POST">
                                <div className="col-sm-6 col-md-12">
                                    <div className="form-group form-focus">
                                        <label className="focus-label" height=""></label>
                                        <input type="text" className="form-control floating" name="search" placeholder="" />

                                        <button formaction="/doctors/search" type="submit" className="btn btn-success">Search</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="table-responsive">
                                    <table className="table table-striped custom-table">
                                        <thead>
                                            <tr>
                                                <th style={{ MinWidth: "100px" }}>Image</th>
                                                {/* <th>ID</th> */}
                                                <th>First Name</th>
                                                <th>Last Name</th>
                                                <th>Email</th>
                                                <th>Patients</th>
                                                <th>DOB</th>
                                                <th>Gender</th>
                                                <th>Address</th>
                                                <th>Contact</th>
                                                <th>Department</th>

                                               {/* { auth.user.role=='Admin' ? (  <th className="text-right">Action</th> ) : null } */}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {doctor.doctors.length > 0 ? doctor.doctors.map((doctor, index)=>
                                                <tr key={index}>
                                                    <td>
                                                        {/* /assets/images/upload_images/<%= list[i].image %> */}
                                                        <img width="50" height="50" src={generatePubliucUrls(doctor.image)} className="rounded-circle" alt="" /> <h2></h2>
                                                    </td>


                                                    {/* <td>{doctor._id}</td> */}
                                                    <td>{doctor.firstname}</td>
                                                    <td>{doctor.lastname}</td>
                                                    <td>{doctor.email}</td>
                                                    <td style={{ textAlign: 'center' }}>{doctor.patients}</td>
                                                    <td>{doctor.dob}</td>
                                                    <td>{doctor.gender}</td>
                                                    <td>{doctor.address}</td>
                                                    <td>{doctor.contact}</td>
                                                    <td>{doctor.department}</td>

                                                    {/* { auth.user.role=='Admin' ? ( 
                                                         <td className="text-right">
                                                         <div className="dropdown dropdown-action">
                                                             <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v"></i></a>
                                                             <div className="dropdown-menu dropdown-menu-right">
                                                                 <a className="dropdown-item" href="/edit_doctor" ><i className="fa fa-pencil m-r-5"></i> Edit</a>
                                                                 <a className="dropdown-item" onClick={() => handleDelete(doctor._id)}><i className="fa fa-trash-o m-r-5"></i> Delete</a>
                                                             </div>
                                                         </div>
                                                     </td>
                                                     ) : null } */}
                                                   
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
            {renderDoctorModal()}
        </Layout>
    )
}

export default Doctors