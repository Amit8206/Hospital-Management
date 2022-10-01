import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteDepartment } from '../../actions'
import Layout from '../../Components/Layout/Layout'
import SideBar from '../../Components/SideBar/SideBar'






const Departments = () => {


    const department = useSelector(state => state.department);
    const auth = useSelector(state => state.auth);

    const dispatch = useDispatch();



    const handleDelete = (id) => {

        // console.log({id});
        dispatch(deleteDepartment(id));
    }


    const renderDepartmentModal = () => {


        return (
            <>
                {<SideBar />}
                <div className="page-wrapper">
                    <div className="content">
                        <div className="row">
                            <div className="col-sm-5 col-5">
                                <h4 className="page-title">Departments</h4>
                            </div>
                            <div className="col-sm-7 col-7 text-right m-b-30">
                                {auth.user.role == 'Admin' ? (
                                    <a href="/add_department" className="btn btn-primary btn-rounded"><i className="fa fa-plus"></i> Add Department</a>) : null}

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="table-responsive">
                                    <table className="table table-striped custom-table mb-0 datatable">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Department Id</th>
                                                <th>Department Name</th>
                                                <th>Total Patients</th>
                                                <th>Total Doctors</th>
                                                <th>Department description</th>
                                                {auth.user.role == 'Admin' ? (<th className="text-right">Action</th>) : null}

                                            </tr>
                                        </thead>
                                        <tbody>
                                            {department.departments.length > 0 ? department.departments.map(department =>
                                                <tr>
                                                    <td></td>
                                                    <td>{department._id}</td>
                                                    <td>{department.name}</td>
                                                    <td>{department.patients}</td>
                                                    <td>{department.doctors}</td>
                                                    <td>{department.description}</td>


                                                    {auth.user.role == 'Admin' ? (
                                                        <td className="text-right">
                                                            <div className="dropdown dropdown-action">
                                                                <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v"></i></a>
                                                                <div className="dropdown-menu dropdown-menu-right">
                                                                    <a className="dropdown-item" href="/edit_department"><i className="fa fa-pencil m-r-5"></i> Edit</a>
                                                                    <a className="dropdown-item" style={{ cursor: 'pointer' }} onClick={() => handleDelete(department._id)}><i className="fa fa-trash-o m-r-5"></i> Delete</a>
                                                                </div>
                                                            </div>
                                                        </td>) : null}
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
            {renderDepartmentModal()}
        </Layout>
    )
}

export default Departments