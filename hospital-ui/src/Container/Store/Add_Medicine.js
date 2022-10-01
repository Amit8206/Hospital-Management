import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addMedicine } from '../../actions'
import Layout from '../../Components/Layout/Layout'
import SideBar from '../../Components/SideBar/SideBar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Add_Medicine = () => {

    // const [name, setName] = useState('');
    // const [purchaseDate, setPurchaseDate] = useState('');
    // const [expire, setExpire] = useState('');
    // const [expireDate, setExpireDate] = useState('');
    // const [price, setPrice] = useState('');
    // const [quantity, setQuantity] = useState('');

    const dispatch = useDispatch();


    const [medicines, setMedicines] = useState({
        name: '', purchaseDate: '', expire: '', expireDate: '', price: '', quantity: ''
    })

    let name, value;

    const handleSave = (e) => {
        e.preventDefault();

        name = e.target.name;
        value = e.target.value;

        setMedicines({ ...medicines, [name]: value });

    }

    const insertMedicine = (e) => {
        e.preventDefault();

        if (medicines.name === '' || medicines.purchaseDate === '' || medicines.expire === '' || medicines.expireDate === '' || medicines.price === '' || medicines.quantity === '' ) {
            toast.warning('Please Fill All Form..!!', {
                position: toast.POSITION.TOP_CENTER
            });
        } else {
            dispatch(addMedicine(medicines));
            console.log({ medicines })
            toast.success('Medicine Added Successfully...', {
                position: toast.POSITION.TOP_RIGHT
            });
            setMedicines({
                name: '', purchaseDate: '', expire: '', expireDate: '', price: '', quantity: ''
            })
        }

    }

    const showToastMessage = () => {
        toast.success('Medicine Added Successfully...', {
            position: toast.POSITION.TOP_RIGHT
            // position: toast.POSITION.TOP_CENTER
            // position: toast.POSITION.TOP_LEFT
            // position: toast.POSITION.BOTTOM_RIGHT
            // position: toast.POSITION.BOTTOM_LEFT
            // position: toast.POSITION.BOTTOM_CENTER
        });

        // toast.success('Success Notification !', {
        //     position: toast.POSITION.TOP_RIGHT
        // });
        // toast.error('Error Notification !', {
        //     position: toast.POSITION.TOP_CENTER
        // });
        // toast.warning('Warning Notification !', {
        //     position: toast.POSITION.TOP_LEFT
        // });
        // toast.info('Information Notification !', {
        //     position: toast.POSITION.BOTTOM_CENTER
        // });
        // toast('Default Notification !', {
        //     position: toast.POSITION.BOTTOM_LEFT
        // });
        // toast('Custom Style Notification with css class!', {
        //      position: toast.POSITION.BOTTOM_RIGHT,
        // className: 'foo-bar'
        // });

    };



    const renderAddMedicineModal = () => {

        // const handleSave = () => {

        //     const form = new FormData();

        //     form.append('name', name);
        //     form.append('purchaseDate', purchaseDate);
        //     form.append('expire', expire);
        //     form.append('expireDate', expireDate);
        //     form.append('price', price);
        //     form.append('quantity', quantity);

        //     console.log({form});


        //     dispatch(addMedicine(form));
        // }


        return (
            <>
                {<SideBar />}
                <div class="page-wrapper">
                    <ToastContainer />
                    <div class="content">
                        <div class="row">
                            <div class="col-lg-8 offset-lg-2">
                                <h4 class="page-title">Add Medicine</h4>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-8 offset-lg-2">
                                <form onSubmit={insertMedicine}>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Medicine Name</label>
                                                <input class="form-control" type="text" name="name"
                                                    value={medicines.name}
                                                    onChange={handleSave} />
                                            </div>
                                        </div>

                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group ">

                                                <label>Purchase Date</label>
                                                <div class="cal-icon">
                                                    <input class="form-control  datetimepicker" type="text" name="purchaseDate"
                                                        value={medicines.purchaseDate}
                                                        onChange={handleSave} />
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div class="row">

                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Expire</label>
                                                <input class="form-control" type="text" name="expire"
                                                    value={medicines.expire}
                                                    onChange={handleSave} />
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Expire date</label>
                                                <div class="cal-icon">
                                                    <input class="form-control datetimepicker" type="text" name="expireDate"
                                                        value={medicines.expireDate}
                                                        onChange={handleSave} />
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Price</label>
                                                <input class="form-control" type="text" placeholder="$" name="price"
                                                    value={medicines.price}
                                                    onChange={handleSave} />
                                            </div>
                                        </div>

                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Quantity</label>
                                                <input class="form-control" type="text" placeholder="" name="quantity"
                                                    value={medicines.quantity}
                                                    onChange={handleSave} />
                                            </div>
                                        </div>

                                    </div>
                                    <div class="m-t-20 text-center">
                                        <button class="btn btn-primary submit-btn">Add Medicine</button>
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
            {renderAddMedicineModal()}
        </Layout>
    )
}

export default Add_Medicine