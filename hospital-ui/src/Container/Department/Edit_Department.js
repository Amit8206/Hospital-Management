import React from 'react'
import Layout from '../../Components/Layout/Layout'
import SideBar from '../../Components/SideBar/SideBar'

const Edit_Department = () => {


    const renderEditDepartmentModal = () => {

        return (
            <>
                {<SideBar />}
                <div class="page-wrapper">
                    <div class="content">
                        <div class="row">
                            <div class="col-lg-8 offset-lg-2">
                                <h4 class="page-title">Update Department</h4>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-8 offset-lg-2">
                                {/* <% for (var i = 0; i < list.length; i++){ %> */}
                                <form action="" method="POST">

                                    <div class="form-group">
                                        <label>Department Name</label>
                                        <input class="form-control" type="text" name="dpt_name" value="<%=list[i].department_name%>" />
                                    </div>
                                    <div class="form-group">
                                        <label>Description</label>
                                        {/* <%=list[i].department_desc%> */}
                                        <textarea cols="30" rows="4" class="form-control" name="desc" ></textarea>
                                    </div>

                                    <div class="m-t-20 text-center">
                                        <button class="btn btn-primary submit-btn">Update Department</button>
                                    </div>
                                    {/* <% } %> */}
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
            {renderEditDepartmentModal()}
        </Layout>
    )
}

export default Edit_Department