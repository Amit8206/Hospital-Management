import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteMedicine } from '../../actions'
import Layout from '../../Components/Layout/Layout'
import SideBar from '../../Components/SideBar/SideBar'



const Medicine = () => {


    const medicine = useSelector(state => state.medicine);
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);



    const handleDelete = (id) => {

        dispatch(deleteMedicine(id));
    }



    const renderMedicineModal = () => {

        return (
            <>
                {<SideBar />}
                <div class="page-wrapper">
                    <div class="content">
                        <div class="row">
                            <div class="col-sm-8 col-6">
                                <h4 class="page-title">Assets</h4>
                            </div>
                            {auth.user.role == 'Medicine' || auth.user.role == 'Admin' ? (
                            <div class="col-sm-4 col-6 text-right m-b-30">
                                <a href="/add_medicine" class="btn btn-primary btn-rounded float-right"><i class="fa fa-plus"></i> Add Medicine</a>
                            </div>
                            ) : null }
                        </div>
                        <form action="" method="POST">
                            <div class="row filter-row">

                                <div class="col-sm-6 col-md-3">
                                    <div class="form-group form-focus">
                                        <label class="focus-label">Medicine Name </label>
                                        <input type="text" class="form-control floating" name="search" />
                                    </div>
                                </div>

                                <div class="col-sm-6 col-md-3">
                                    <button formaction="/store/search" class="btn btn-success btn-block">Search</button>
                                </div>
                            </div>
                        </form>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="table-responsive">
                                    <table class="table table-striped custom-table mb-0 datatable">
                                        <thead>
                                            <tr>

                                                <th>Medicine id</th>
                                                <th>Medicine name</th>
                                                <th>Purchase Date</th>
                                                <th>Expire</th>
                                                <th>Expire End</th>
                                                <th>Price</th>
                                                <th>Quantity</th>


                                                {auth.user.role == 'Medicine' || auth.user.role == 'Admin' ? (<th class="text-right">Actions</th>) : null}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {medicine.medicines.length > 0 ? medicine.medicines.map(medicine =>

                                                <tr>

                                                    <td>  {medicine._id}             </td>
                                                    <td>  {medicine.name}            </td>
                                                    <td>  {medicine.purchaseDate}    </td>
                                                    <td>  {medicine.expire}          </td>
                                                    <td>  {medicine.expireDate}      </td>
                                                    <td>  {medicine.price}           </td>
                                                    <td> {medicine.quantity}    </td>

                                                    {auth.user.role == 'Medicine' || auth.user.role == 'Admin' ? (
                                                        <>
                                                            <td class="text-right">
                                                                <div class="dropdown dropdown-action">
                                                                    <a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a>
                                                                    <div class="dropdown-menu dropdown-menu-right">
                                                                        <a class="dropdown-item" href="/store/edit_med/<%= list[i].id%>"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                                                                        <a class="dropdown-item" onClick={() => handleDelete(medicine._id)}><i class="fa fa-trash-o m-r-5"></i> Delete</a>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </>
                                                    ) : null}
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
            {renderMedicineModal()}
        </Layout>
    )
}

export default Medicine