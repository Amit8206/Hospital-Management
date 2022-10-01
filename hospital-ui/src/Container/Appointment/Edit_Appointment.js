import React from 'react'
import Layout from '../../Components/Layout/Layout'
import SideBar from '../../Components/SideBar/SideBar'

const Edit_Appointment = () => {

    const renderEditAppointmentModal = () => {

        return (
            <>
                {<SideBar />}
                <div class="page-wrapper">
                    <div class="content">
                        <div class="row">
                            <div class="col-lg-8 offset-lg-2">
                                <h4 class="page-title">Edit Appointment</h4>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-8 offset-lg-2">
                                <form method="POST">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                {/* <% for (var i = 0; i < list.length; i++){ %> */}
                                                <label>Patient Name </label>
                                                <input class="form-control" type="text" name="p_name" value="<%= list[i].patient_name %>" />
                                            </div>
                                        </div>

                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Department</label>
                                                <select class="select" name="department" value="<%= list[i].department %>">
                                                    <option value="">Select</option>
                                                    <option value="Dentists">Dentists</option>
                                                    <option value="Neurology">Neurology</option>
                                                    <option value="Cardiology">Cardiology</option>
                                                    <option value="Opthalmology">Opthalmology</option>
                                                    <option value="Orthopedics">Orthopedics</option>
                                                    <option value="Cancer Department">Cancer Department</option>
                                                    <option value="ENT Department">ENT Department</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Doctor Name</label>
                                                <input type="text" name="d_name" id="" value="<%= list[i].doctor_name %>" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Date</label>
                                                <div class="cal-icon">
                                                    <input type="text" class="form-control datetimepicker" name="date" value="<%= list[i].date %>" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Time</label>
                                                <div class="time-icon">
                                                    <input type="text" class="form-control" id="datetimepicker3" name="time" value="<%= list[i].time %>" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Patient Email</label>
                                                <input class="form-control" type="email" name="email" value="<%= list[i].email %>" />
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Patient Phone Number</label>
                                                <input class="form-control" type="text" name="phone" value="<%= list[i].phone %>" />
                                            </div>
                                        </div>
                                    </div>
                                    {/* <% } %> */}

                                    <div class="m-t-20 text-center">
                                        <button class="btn btn-primary submit-btn">Update Appointment</button>
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
            {renderEditAppointmentModal()}
        </Layout>
    )
}

export default Edit_Appointment