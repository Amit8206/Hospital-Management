import React from 'react'
import Layout from '../../Components/Layout/Layout'
import SideBar from '../../Components/SideBar/SideBar'

const Edit_Leave = () => {


    const renderEditLeaveModal = () => {

        return (
            <>
                {<SideBar />}
                <div class="page-wrapper">
                    <div class="content">
                        <div class="row">
                            <div class="col-lg-8 offset-lg-2">
                                <h4 class="page-title">Edit Leave</h4>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-8 offset-lg-2">
                                <form method="POST">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                {/* <% for (var i = 0; i < user.length; i++){ %> */}
                                                <label>Employee Name <span class="text-danger">*</span></label>
                                                <input class="form-control" type="text" name="name" value="<%= user[i].employee%>" />
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Employee Id <span class="text-danger">*</span></label>
                                                <input class="form-control" type="id" name="id" value="<%= user[i].emp_id%>" readonly />
                                            </div>
                                        </div>

                                    </div>


                                    <div class="form-group">
                                        <label>Leave Type <span class="text-danger">*</span></label>
                                        <select class="" name="leave_type">
                                            <option>Select Leave Type</option>
                                            <option value="Casual Leave">Casual Leave</option>
                                            <option value="Medical Leave">Medical Leave</option>

                                        </select>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>From <span class="text-danger">*</span></label>
                                                <div class="cal-icon">
                                                    <input class="form-control datetimepicker" type="text" name="from" value="<%= user[i].date_from%>" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>To <span class="text-danger">*</span></label>
                                                <div class="cal-icon">
                                                    <input class="form-control datetimepicker" type="text" name="to" value="<%= user[i].date_to%>" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label>Leave Reason <span class="text-danger">*</span></label>
                                        {/* <%= user[i].reason%> */}
                                        <textarea rows="4" cols="5" class="form-control" name="reason" value=""></textarea>
                                    </div>
                                    {/* <% } %> */}
                                    <div class="m-t-20 text-center">
                                        <button class="btn btn-primary submit-btn">Update Leave</button>
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
            {renderEditLeaveModal()}
        </Layout>
    )
}

export default Edit_Leave