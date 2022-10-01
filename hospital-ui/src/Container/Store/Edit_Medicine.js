import React from 'react'
import Layout from '../../Components/Layout/Layout'
import SideBar from '../../Components/SideBar/SideBar'

const Edit_Medicine = () => {


    const renderEditMedicineModal = () => {

        return (
            <>
                {<SideBar />}
                <div class="page-wrapper">
                    <div class="content">
                        <div class="row">
                            <div class="col-lg-8 offset-lg-2">
                                <h4 class="page-title">Edit Medicine</h4>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-8 offset-lg-2">
                                {/* <% for (var i = 0; i < list.length; i++){ %> */}
                                <form method="POST" action="/store/edit_med/<%= list[i].id %>">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">

                                                <label>Medicine Name</label>
                                                <input class="form-control" type="text" name="name" value="<%= list[i].name %>" />
                                            </div>
                                        </div>

                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group ">

                                                <label>Purchase Date</label>
                                                <div class="cal-icon">
                                                    <input class="form-control  datetimepicker" type="text" name="p_date" value="<%= list[i].p_date %>" />
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div class="row">

                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Expire</label>
                                                <input class="form-control" type="text" name="expire" value="<%= list[i].expire %>" />
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Expire date</label>
                                                <div class="cal-icon">
                                                    <input class="form-control datetimepicker" type="text" name="e_date" value="<%= list[i].expire_end%>" /> </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Price</label>
                                                <input class="form-control" type="text" placeholder="$" name="price" value="<%= list[i].price %>" />
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Quantity</label>
                                                <input class="form-control" type="text" placeholder="" name="quantity" value="<%= list[i].quantity %>" />
                                            </div>
                                        </div>



                                    </div>
                                    <div class="m-t-20 text-center">
                                        <button class="btn btn-primary submit-btn">Edit Medicine</button>
                                        {/* <% } %> */}
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
            {renderEditMedicineModal()}
        </Layout>
    )
}

export default Edit_Medicine