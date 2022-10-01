import React from 'react'
import Layout from '../../Components/Layout/Layout'
import SideBar from '../../Components/SideBar/SideBar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addLeave } from '../../actions';


const AddLeave = () => {


    const doctor = useSelector(state => state.doctor);
    const dispatch = useDispatch();
  
  
    const [leave, setLeave] = useState({
      employeeName: '',employeeId: '', leaveType: '', dateFrom: '', dateTo: '', reason: ''
    })
  
    let name, value;
  
    const handleSave = (e) => {
      e.preventDefault();
  
      name = e.target.name;
      value = e.target.value;
  
      setLeave({ ...leave, [name]: value });
      console.log({leave})
  
    }
  
    const insertLeave = (e) => {
      e.preventDefault();
  
      console.log({ leave });
      dispatch(addLeave(leave));
      toast.success('Leave Added Successfully...', {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  


    const renderLeaveModal = () => {

        return (
            <>
                {<SideBar />}
                <div class="page-wrapper">
                <ToastContainer />
                    <div class="content">
                        <div class="row">
                            <div class="col-lg-8 offset-lg-2">
                                <h4 class="page-title">Add Leave</h4>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-8 offset-lg-2">
                                <form onSubmit={insertLeave} >
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Employee Name <span class="text-danger">*</span></label>
                                                <input class="form-control" type="text" name="employeeName"
                                                value={leave.employeeName}
                                                onChange={handleSave}
                                                />
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Employee Id <span class="text-danger">*</span></label>
                                                <input class="form-control" type="id" name="employeeId"
                                                value={leave.employeeId}
                                                onChange={handleSave}
                                                />
                                            </div>
                                        </div>

                                    </div>


                                    <div class="form-group">
                                        <label>Leave Type <span class="text-danger">*</span></label>
                                        <select class="" name="leaveType"
                                        value={leave.leaveType}
                                        onChange={handleSave}
                                        >
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
                                                    <input class="form-control datetimepicker" type="text" name="dateFrom"
                                                    value={leave.dateFrom}
                                                    onChange={handleSave}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>To <span class="text-danger">*</span></label>
                                                <div class="cal-icon">
                                                    <input class="form-control datetimepicker" type="text" name="dateTo"
                                                    value={leave.dateTo}
                                                    onChange={handleSave}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label>Leave Reason <span class="text-danger">*</span></label>
                                        <textarea rows="4" cols="5" class="form-control" name="reason"
                                        value={leave.reason}
                                        onChange={handleSave}
                                        ></textarea>
                                    </div>
                                    <div class="m-t-20 text-center">
                                        <button class="btn btn-primary submit-btn">ADD Leave</button>
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
            {renderLeaveModal() }

        </Layout>
    )
}

export default AddLeave
