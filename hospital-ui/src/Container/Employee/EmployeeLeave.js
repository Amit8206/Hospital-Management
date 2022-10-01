import React from 'react'
import Layout from '../../Components/Layout/Layout'
import SideBar from '../../Components/SideBar/SideBar'

const EmployeeLeave = () => {


    const renderemployeeLeaveModal = () => {

        return (
            <>
                {<SideBar />}
                <div class="page-wrapper">
                    <div class="content">
                        <div class="row">
                            <div class="col-sm-8 col-6">
                                <h4 class="page-title">Leave Request</h4>
                            </div>
                            <div class="col-sm-4 col-6 text-right m-b-30">
                                <a href="/add_leave" class="btn btn-primary btn-rounded float-right"><i class="fa fa-plus"></i> Add Leave</a>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-12">
                                <div class="table-responsive">
                                    <table class="table table-striped custom-table mb-0 datatable">
                                        <thead>
                                            <tr>
                                                <th>Leave Id</th>
                                                <th>Employee Name</th>
                                                <th>Employee ID</th>
                                                <th>Leave Type</th>
                                                <th>From</th>
                                                <th>To</th>

                                                <th>Reason</th>

                                                <th class="text-right">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* <% for (var i = 0; i < user.length; i++){ %> */}
                                            <tr>
                                                <td>
                                                    {/* <%= user[i].id %> */}
                                                </td>
                                                <td>
                                                    {/* <%= user[i].employee %> */}
                                                </td>
                                                <td>
                                                    {/* <%= user[i].emp_id %> */}
                                                </td>
                                                <td>
                                                    {/* <%= user[i].leave_type %> */}
                                                </td>
                                                <td>
                                                    {/* <%= user[i].date_from %> */}
                                                </td>
                                                <td>
                                                    {/* <%= user[i].date_to %> */}
                                                </td>
                                                <td>
                                                    {/* <%= user[i].reason %> */}
                                                </td>

                                                <td class="text-right">
                                                    <div class="dropdown dropdown-action">
                                                        <a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a>
                                                        <div class="dropdown-menu dropdown-menu-right">
                                                            <a class="dropdown-item" href="/employee/edit_leave/<%= user[i].id%>"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                                                            <a class="dropdown-item" href="/employee/delete_leave/<%= user[i].id%>" ><i class="fa fa-trash-o m-r-5"></i> Delete</a>
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
            {renderemployeeLeaveModal()}
        </Layout>
    )
}

export default EmployeeLeave