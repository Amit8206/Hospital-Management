import React from 'react'
import Layout from '../../Components/Layout/Layout'
import SideBar from '../../Components/SideBar/SideBar'

const Edit_Employee = () => {


    const renderEditEmployeeModal = () => {

        return (
            <>
                {<SideBar />}
                <div class="page-wrapper">
                    <div class="content">
                        <div class="row">
                            <div class="col-lg-8 offset-lg-2">
                                <h4 class="page-title">Edit Employee</h4>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-8 offset-lg-2">
                                <form method="POST">
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                {/* <% for (var i = 0; i < list.length; i++){ %> */}
                                                <label> Name <span class="text-danger">*</span></label>
                                                <input class="form-control" type="text" name="name" value="<%= list[i].name %>" />
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <label>Email</label>
                                                <input class="form-control" type="email" name="email" value="<%= list[i].email %>" />
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <label> Contact <span class="text-danger">*</span></label>
                                                <input class="form-control" type="text" name="contact" value="<%= list[i].contact %>" />
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <label>Join Date <span class="text-danger">*</span></label>
                                                <input class="form-control" type="text" name="date" value="<%= list[i].join_date %>" />
                                            </div>
                                        </div>





                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <label>Role</label>
                                                <select class="select" name="role" value="<%= list[i].role %>">

                                                    <option value="Nurse">Nurse</option>
                                                    <option value="Laboratorist">Laboratorist</option>
                                                    <option value="Pharmacist">Pharmacist</option>
                                                    <option value="Accountant">Accountant</option>
                                                    <option value="Receptionist">Receptionist</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <% } %> */}
                                    <div class="m-t-20 text-center">
                                        <button class="btn btn-primary submit-btn">Update Employee</button>
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
            {renderEditEmployeeModal()}
        </Layout>
    )
}

export default Edit_Employee