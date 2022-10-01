import React from 'react'
import { useSelector } from 'react-redux';
import Layout from '../../Components/Layout/Layout';
import SideBar from '../../Components/SideBar/SideBar';


const Users = () => {

    const user = useSelector(state => state.user);
    const auth = useSelector(state => state.auth);


    const handleDelete = (id) => {

    }




    return (
        <Layout>
            <SideBar />
            <>
                <div className="page-wrapper">
                    <div className="content">
                        <div className="row">
                            <div className="col-sm-4 col-3">
                                <h4 className="page-title">All Users</h4>
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
                                                <th>User ID</th>
                                                <th>User Name</th>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Role</th>
                                                <th>DOB</th>
                                                <th>Address</th>
                                                <th>Gender</th>
                                                <th>email_status</th>

                                                {auth.user.role == 'Doctor' || auth.user.role == 'Admin' ? (

                                                    <th className="text-right">Action</th>) : null}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* <% for (var i = 0; i < list.length; i++){ %> */}
                                            {user.users.length > 0 ? user.users.map(user =>

                                                <tr>
                                                    <td>{user._id}</td>
                                                    <td>{user.username}</td>
                                                    <td>{user.name}</td>
                                                    <td>{user.email}</td>
                                                    <td>{user.role}</td>
                                                    <td>{user.dob}</td>
                                                    <td>{user.gender}</td>
                                                    <td>{user.address}</td>

                                                    { user.email_status == 'Not_Verified' ? 
                                                    (    <td style={{ color: 'red' }}>{user.email_status}</td>    ) :  (     <td style={{ color: 'green' }}>{user.email_status}</td>     )
                                                     }


                                                    {auth.user.role == 'Doctor' || auth.user.role == 'Admin' ? (

                                                        <td className="text-right">
                                                            <div className="dropdown dropdown-action">
                                                                <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v"></i></a>
                                                                <div className="dropdown-menu dropdown-menu-right">
                                                                    <a className="dropdown-item" href="/appointments/edit_appointment/<%= list[i].id %>"><i className="fa fa-pencil m-r-5"></i> Approve</a>
                                                                    <a className="dropdown-item" onClick={() => handleDelete(user._id)}><i className="fa fa-trash-o m-r-5"></i> Delete</a>
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
        </Layout>
    )
}

export default Users