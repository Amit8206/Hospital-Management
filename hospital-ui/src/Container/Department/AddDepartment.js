import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addDepartment } from '../../actions';
import Layout from '../../Components/Layout/Layout'
import SideBar from '../../Components/SideBar/SideBar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddDepartment = () => {

    // const [name, setName] = useState('');
    // const [description, setDescription] = useState('');

    const dispatch = useDispatch();
    const department = useSelector(state => state.department);
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');




    const [departments, setDepartments] = useState({
        name: '', description: ''
    })

    let name, value;

    const handleSave = (e) => {
        e.preventDefault();

        name = e.target.name;
        value = e.target.value;

        setDepartments({ ...departments, [name]: value });

    }

    const insertDepartment = (e) => {
        e.preventDefault();
        if (departments.name === '' || departments.description === '') {
            toast.warning('Please Fill All Form..!!', {
                position: toast.POSITION.TOP_CENTER
            });
        } else {
            console.log({ departments })
        dispatch(addDepartment(departments));
            toast.success('Department Added Successfully...', {
                position: toast.POSITION.TOP_RIGHT
            });
            setDepartments({
                name: '', description: ''
            })
        }

        
    }

    const showMessge = () => {

        setMessage(department.message);
        // setError(department.error);

        setTimeout(() => {
            setMessage('');
            setDepartments({
                name: '', description: ''
            })
            // setError('');
        }, 3000);

    }



    const renderAddDepartmentModal = () => {

        // const saveDepartment = (e) => {
        //     e.preventDefault();

        //     const form = new FormData();

        //     form.append('name', name);
        //     form.append('description', description);

        //     console.log({form})

        //     dispatch(addDepartment(form));
        // }


        return (
            <>
                {<SideBar />}
                <div className="page-wrapper">
                <ToastContainer />
                    {/* { department.messge ? (
                        <div style={{ marginLeft: '700px', color: 'green' }}><span>{department.message}</span></div>
                    ) : (<div style={{ marginLeft: '700px', color: 'red' }}><span>{department.error}</span></div>)} */}
                    <div style={{ marginLeft: '700px', color: 'green' }}><span>{message}</span></div>
                    {/* <div style={{ marginLeft: '700px', color: 'red' }}><span>{error}</span></div> */}
                    {/* <ToastContainer /> */}
                    <div className="content">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <h4 className="page-title">Add Department</h4>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <form onSubmit={insertDepartment}>
                                    <div className="form-group">
                                        <label>Department Name</label>
                                        <input className="form-control" type="text" name="name"
                                            value={departments.name} onChange={handleSave} />
                                    </div>
                                    <div className="form-group">
                                        <label>Description</label>
                                        <textarea cols="30" rows="4" className="form-control" name="description"
                                            value={departments.description} onChange={handleSave}></textarea>
                                    </div>

                                    <div className="m-t-20 text-center">
                                        <button onClick={showMessge} className="btn btn-primary submit-btn">Add Department</button>
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
            {renderAddDepartmentModal()}
        </Layout>
    )
}

export default AddDepartment
