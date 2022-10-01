import React from 'react'
import Layout from '../../Components/Layout/Layout'
import SideBar from '../../Components/SideBar/SideBar'

const EmployeeSalary = () => {


    



    const renderEmployeeSalaryModal = () => {

        return (
            <>
                {<SideBar />}
                <div class="page-wrapper">
                    <div class="content">
                        <div class="row">
                            <div class="col-sm-4 col-3">
                                <h4 class="page-title">Employee</h4>
                            </div>
                            <div class="col-sm-8 col-9 text-right m-b-20">
                                <a href="/add_salary" class="btn btn-primary float-right btn-rounded"><i class="fa fa-plus"></i> Add Employee</a>
                            </div>
                        </div>
                        <form action="" method="POST">
                            <div class="row filter-row">

                                <div class="col-sm-6 col-md-3">
                                    <div class="form-group form-focus">
                                        <label class="focus-label">Employee Name / ID </label>
                                        <input type="text" class="form-control floating" name="search" />
                                    </div>
                                </div>

                                <div class="col-sm-6 col-md-3">
                                    <button formaction="/employee/search" class="btn btn-success btn-block">Search</button>
                                </div>
                            </div>
                        </form>

                        <div class="row">
                            <div class="col-md-12">
                                <div class="table-responsive">
                                    <table class="table table-striped custom-table">
                                        <thead>
                                            <tr>
                                                <th style={{ minWidth: "100px" }}>ID</th>
                                                <th>Employee Name</th>
                                                <th>Email</th>
                                                <th>Contact</th>
                                                <th style={{ minWidth: "110px" }}>Join Date</th>
                                                <th>Role</th>
                                                <th>Salary</th>
                                                <th>Payslip</th>
                                                <th class="text-right">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* <% for (var i = 0; i < employee.length; i++){ %> */}


                                            <tr>
                                                <td>
                                                    {/* <%= employee[i].id %> */}
                                                </td>
                                                <td>
                                                    {/* <%= employee[i].name %> */}
                                                </td>
                                                <td>
                                                    {/* <%= employee[i].email %> */}
                                                </td>
                                                <td>
                                                    {/* <%= employee[i].contact %> */}
                                                </td>
                                                <td>
                                                    {/* <%= employee[i].join_date %> */}
                                                </td>
                                                <td>
                                                    {/* <%= employee[i].role %> */}
                                                </td>
                                                <td>
                                                    {/* $<%= employee[i].salary %> */}
                                                </td>
                                                <td><a class="btn btn-sm btn-primary" href="/receipt/generateslip/<%= employee[0].id%>">Generate Slip</a></td>
                                                <td class="text-right">
                                                    <div class="dropdown dropdown-action">
                                                        <a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a>
                                                        <div class="dropdown-menu dropdown-menu-right">
                                                            <a class="dropdown-item" href="/employee/edit_employee/<%= employee[0].id %>"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                                                            <a class="dropdown-item" href="/employee/delete_employee/<%= employee[0].id %>" data-toggle="modal" data-target="#delete_employee"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
                                                        </div>
                                                    </div>
                                                </td>
                                                {/* <% } %> */}
                                            </tr>
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
            {renderEmployeeSalaryModal()}
        </Layout>
    )
}

export default EmployeeSalary