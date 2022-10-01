import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addEmployee } from '../../actions';
import Layout from '../../Components/Layout/Layout'
import SideBar from '../../Components/SideBar/SideBar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const AddEmplyoee = () => {


    const [firstname, setfirstname] = useState('')
    const [lastname, setlastname] = useState('')
    const [email, setEmail] = useState('');
    const [dob, setdob] = useState('')
    const [gender, setgender] = useState('')
    const [address, setaddress] = useState('')
    const [department, setdepartment] = useState('')
    const [contact, setContact] = useState('');
    const [salary, setSalary] = useState('');
    const [joindate, setjoindate] = useState('');
    const [image, setimage] = useState([])
    const [role, setRole] = useState('');

    const dispatch = useDispatch();
    const departments = useSelector(state => state.department);


    const handleEmployeeImage = (e) => {
        setimage([
            ...image,
            e.target.files[0]
        ]);

    }


    const insertEmployee = (e) => {
        e.preventDefault();

        if (firstname === '' || lastname === '' || email === '' || dob === '' ||
            gender === '' || address === '' || department === '' || image === '' ||
            joindate === '' || role === '' || contact === '' || salary === ''

        ) {
            toast.warning('Please Fill All Form..!!', {
                position: toast.POSITION.TOP_CENTER
            });
        }
        // if (firstname === '') {
        //     toast.warning('Please Enter First Name..!!', {
        //         position: toast.POSITION.TOP_CENTER
        //     });
        // } if (lastname === '') {
        //     toast.warning('Please Enter Last Name..!!', {
        //         position: toast.POSITION.TOP_CENTER
        //     });
        // } if (email === '') {
        //     toast.warning('Please Enter email..!!', {
        //         position: toast.POSITION.TOP_CENTER
        //     });
        // }
        // if (dob === '') {
        //     toast.warning('Please Enter Dob..!!', {
        //         position: toast.POSITION.TOP_CENTER
        //     });
        // }
        // if (gender === '') {
        //     toast.warning('Please Select Gender..!!', {
        //         position: toast.POSITION.TOP_CENTER
        //     });
        // }
        // if (dob === '') {
        //     toast.warning('Please Enter Dob..!!', {
        //         position: toast.POSITION.TOP_CENTER
        //     });
        // }
        // if (address === '') {
        //     toast.warning('Please Enter Address..!!', {
        //         position: toast.POSITION.TOP_CENTER
        //     });
        // }
        // if (department === '') {
        //     toast.warning('Please Select Department..!!', {
        //         position: toast.POSITION.TOP_CENTER
        //     });
        // }
        // if (joindate === '') {
        //     toast.warning('Please Enter JoinDate..!!', {
        //         position: toast.POSITION.TOP_CENTER
        //     });
        // }
        // if (role === '') {
        //     toast.warning('Please Select Role..!!', {
        //         position: toast.POSITION.TOP_CENTER
        //     });
        // }
        // if (contact === '') {
        //     toast.warning('Please Enter Contact..!!', {
        //         position: toast.POSITION.TOP_CENTER
        //     });
        // }
        // if (salary === '') {
        //     toast.warning('Please Enter Salary..!!', {
        //         position: toast.POSITION.TOP_CENTER
        //     });
        // }
        // if (image === []) {
        //     toast.warning('Please Select Image..!!', {
        //         position: toast.POSITION.TOP_CENTER
        //     });
        // } 
        else {
            const form = new FormData();

            form.append('firstname', firstname);
            form.append('lastname', lastname);
            form.append('email', email);
            form.append('dob', dob);
            form.append('gender', gender);
            form.append('address', address);
            form.append('department', department);
            form.append('salary', salary);
            form.append('joindate', joindate);
            form.append('contact', contact);
            form.append('role', role);

            for (let pic of image) {
                form.append('image', pic);
            }

            console.log({ form });

            dispatch(addEmployee(form));
            toast.success('Employee Added Successfully...', {
                position: toast.POSITION.TOP_RIGHT
            });
            setTimeout(() => {

                setfirstname('');
                setlastname('');
                setEmail('');
                setdob('');
                setgender('');
                setaddress('');
                setdepartment('');
                setSalary('');
                setjoindate('');
                setContact('');
                setRole('');
                setimage('');
                // setError('');
            }, 2000);
        }
    }


    const renderAddEmployeeModal = () => {


        // const saveMedicine = () => {

        //     const form = new FormData();

        //     form.append('name', name);
        //     form.append('email', email);
        //     form.append('contact', contact);
        //     form.append('salary', salary);
        //     form.append('joindate', joindate);
        //     form.append('role', role);

        //     console.log({form});


        //     dispatch(addEmployee(form));
        // }



        return (
            <>
                {<SideBar />}
                <div className="page-wrapper">
                    <ToastContainer />
                    <div className="content">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <h4 className="page-title">Add Employee</h4>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">

                                <form onSubmit={insertEmployee}>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label>First Name <span className="text-danger">*</span></label>
                                                <input className="form-control" type="text" name="firstname"
                                                    value={firstname}
                                                    onChange={(e) => setfirstname(e.target.value)}

                                                />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label>Last Name</label>
                                                <input className="form-control" type="text" name="lastname"
                                                    value={lastname}
                                                    onChange={(e) => setlastname(e.target.value)} />
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label>Email <span className="text-danger">*</span></label>
                                                <input className="form-control" type="email" name="email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)} />
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label>Contact </label>
                                                <input className="form-control" type="text" name="contact"
                                                    value={contact}
                                                    onChange={(e) => setContact(e.target.value)} />
                                            </div>
                                        </div>


                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label>Date of Birth</label>
                                                <div className="cal-icon">
                                                    <input type="text" className="form-control datetimepicker" name="dob"
                                                        value={dob}
                                                        onChange={(e) => setdob(e.target.value)} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group gender-select">
                                                <label className="gen-label">Gender:</label>
                                                <div className="form-check-inline">
                                                    <label className="form-check-label">
                                                        <input type="radio" name="gender" className="form-check-input"
                                                            value='Male'
                                                            onChange={(e) => setgender(e.target.value)}
                                                        />Male
                                                    </label>
                                                </div>
                                                <div className="form-check-inline">
                                                    <label className="form-check-label">
                                                        <input type="radio" name="gender" className="form-check-input"
                                                            value='Female'
                                                            onChange={(e) => setgender(e.target.value)}
                                                        />Female
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <div className="form-group">
                                                        <label>Address</label>
                                                        <input type="text" className="form-control " name="address"
                                                            value={address}
                                                            onChange={(e) => setaddress(e.target.value)} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label>Department</label>

                                                <select className="" name="department"
                                                    value={department}
                                                    onChange={(e) => setdepartment(e.target.value)}>

                                                    <option selected>Select</option>

                                                    {departments.departments.length > 0 ? departments.departments.map(department =>

                                                        <option value={department.name}>{department.name}</option>

                                                    ) : null}

                                                </select>

                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label>Role</label>

                                                <select className="" name="role"
                                                    value={role}
                                                    onChange={(e) => setRole(e.target.value)}>

                                                    <option selected>Select</option>
                                                    <option value='Doctor'>Doctor</option>
                                                    <option value='Medicine'>Medicine</option>
                                                    <option value='Nursh'>Nursh</option>
                                                    <option value='Payroll'>Payroll</option>
                                                    <option value='Sweeper'>Sweeper</option>
                                                    <option value='Accountant'>Accountant</option>



                                                    {/* {department.departments.length > 0 ? department.departments.map(department =>

                                                        <option value={department.name}>{department.name}</option>

                                                    ) : null} */}

                                                </select>

                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label>Join Date</label>
                                                <div className="cal-icon">
                                                    <input type="text" className="form-control datetimepicker" name="joindate"
                                                        value={joindate}
                                                        onChange={(e) => setjoindate(e.target.value)} />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label>Salary </label>
                                                <input className="form-control" type="text" name="salary"
                                                    value={salary}
                                                    onChange={(e) => setSalary(e.target.value)} />
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label>Image</label>
                                                <div className="profile-upload">
                                                    <div className="upload-img">
                                                        <img alt="" src="/assets/img/user.jpg" />
                                                    </div>
                                                    <div className="upload-input">
                                                        {/* <img src="" alt="" srcset="" /> */}
                                                        <input type="file" className="form-control"
                                                            name="image" onChange={handleEmployeeImage} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="form-group">
                                        <label>Short Biography</label>
                                        <textarea className="form-control" rows="3" cols="30" name="biography"
                                            value={employees.biography}
                                            onChange={handleChange}></textarea>
                                    </div> */}

                                    <div className="m-t-20 text-center">
                                        <button className="btn btn-primary submit-btn">Add Employee</button>
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
            {renderAddEmployeeModal()}
        </Layout>
    )
}

export default AddEmplyoee