import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { deleteEmployee } from '../../actions'
import Layout from '../../Components/Layout/Layout'
import SideBar from '../../Components/SideBar/SideBar'
import { generatePubliucUrls } from '../../urlConfig'



const Employees = () => {

    const employee = useSelector(state => state.employee);
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);




    const handleDelete = (id) => {

        // console.log({id});
        dispatch(deleteEmployee(id));
    }





    const renderEmployeeModal = () => {

        return (
            <>
                {<SideBar />}
                <div className="page-wrapper">
                    <div className="content">
                        <div className="row">
                            <div className="col-sm-4 col-3">
                                <h4 className="page-title">Employee</h4>
                            </div>
                            <div className="col-sm-8 col-9 text-right m-b-20">
                            {auth.user.role == 'Admin' ? (

                                // <a href="/add_employee" className="btn btn-primary float-right btn-rounded"><i className="fa fa-plus"></i> Add Employee</a> ) : null }
                                 <NavLink to={"/add_employee"} className="btn btn-primary float-right btn-rounded"><i className="fa fa-plus"></i> Add Employee</NavLink> ) : null }

                                </div>
                        </div>
                        <form action="" method="POST">
                            <div className="row filter-row">

                                <div className="col-sm-6 col-md-3">
                                    <div className="form-group form-focus">
                                        <label className="focus-label">Employee Name / ID </label>
                                        <input type="text" className="form-control floating" name="search" />
                                    </div>
                                </div>

                                <div className="col-sm-6 col-md-3">
                                    <button formaction="/employee/search" className="btn btn-success btn-block">Search</button>
                                </div>
                            </div>
                        </form>

                        <div className="row">
                            <div className="col-md-12">
                                <div className="table-responsive">
                                    <table className="table table-striped custom-table">
                                        <thead>
                                            <tr>
                                            <th style={{ MinWidth: "100px" }}>Image</th>
                                                <th>ID</th>
                                                {/* <th>First Name</th>
                                                <th>Last Name</th> */}
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Dob</th>
                                                <th>Gender</th>
                                                <th>Contact</th>
                                                <th>Join Date</th>
                                                <th>Resign Date</th>
                                                <th>Department</th>
                                                <th>Salary</th>
                                                <th>Role</th>
                                                <th>Address</th>
                                                {auth.user.role == 'Admin' ? (<th className="text-right">Actions</th>) : null}
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {employee.employees.length > 0 ? employee.employees.map((employee, index) =>
                                            //  {doctor.doctors.length > 0 ? doctor.doctors.map((doctor, index)=>
                                                <tr key={index}>
                                                    <td>
                                                        {/* /assets/images/upload_images/<%= list[i].image %> */}
                                                        <img width="50" height="50" src={generatePubliucUrls(employee.image)} className="rounded-circle" alt="" /> <h2></h2>
                                                    </td>
                                                <td style={{ color: 'blue', textAlign: 'center' }}>
                                                    { employee._id }
                                                </td>
                                                <td>
                                                    { employee.firstname + ' ' + employee.lastname }
                                                </td>
                                                {/* <td>
                                                    { employee.lastname }
                                                </td> */}
                                                <td>
                                                    {employee.email}
                                                </td>
                                                <td>
                                                    {employee.dob}
                                                </td>
                                                <td>
                                                    {employee.gender}
                                                </td>
                                                <td>
                                                    {employee.contact}
                                                </td>
                                                <td>
                                                    {employee.joindate}
                                                </td>
                                                <td style={{ textAlign: 'center' }}>
                                                    {employee.resigndate}
                                                </td>
                                                <td>
                                                    {employee.department}
                                                </td>
                                                <td>
                                                    {employee.salary}
                                                </td>
                                                <td style={{ color: 'green' }}>
                                                    {employee.role}
                                                </td>
                                                <td>
                                                    {employee.address}
                                                </td>
                                                {auth.user.role == 'Admin' ? (

                                                <td className="text-right">
                                                    <div className="dropdown dropdown-action">
                                                        <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v"></i></a>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <a className="dropdown-item" href="/employee/edit_employee/<%= employee[i].id %>"><i className="fa fa-pencil m-r-5"></i> Edit</a>
                                                            <a className="dropdown-item" onClick={() => handleDelete(employee._id)} ><i className="fa fa-trash-o m-r-5"></i> Delete</a>
                                                        </div>
                                                    </div>
                                                </td> ) : null }
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
            {renderEmployeeModal()}
        </Layout>
    )
}

export default Employees
