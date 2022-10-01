import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addDoctor } from '../../actions'
import Layout from '../../Components/Layout/Layout'
import SideBar from '../../Components/SideBar/SideBar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const AddDoctor = () => {

    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [patient, setPatient] = useState('')
    const [dob, setDob] = useState('');
    const [gender, setGender] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [department, setDepartment] = useState('');
    const [biography, setBiography] = useState('');
    const [doctorImage, setDoctorImage] = useState([]);

    const [message, setMessage] = useState('');
    const doctor = useSelector(state => state.doctor);
    const departmentName = useSelector(state => state.department);


    const dispatch = useDispatch();

    const showMessage = () => {

        setMessage(doctor.message);
        // setError(department.error);

        setTimeout(() => {
            setMessage('');

            setFirstName('');
            setLastName('');
            setEmail('');
            setPatient('');
            setDob('');
            setGender('');
            setAddress('');
            setPhone('');
            setDepartment('');
            setBiography('');
            setDoctorImage('');
            // setError('');
        }, 3000);

    }



    const handleDoctorImage = (e) => {
        setDoctorImage([
            ...doctorImage,
            e.target.files[0]
        ]);
    }


    const handleSave = (e) => {
        e.preventDefault();



        const form = new FormData();

        form.append('firstname', firstname);
        form.append('lastname', lastname);
        form.append('email', email);
        form.append('patient', patient);
        form.append('dob', dob);
        form.append('gender', gender);
        form.append('address', address);
        form.append('phone', phone);
        form.append('department', department);
        form.append('biography', biography);

        for (let pic of doctorImage) {
            form.append('doctorImage', pic);
        }



        if (firstname === '' || lastname === '' || email === '' || patient === '' || dob === '' || gender === '' || address === '' || phone === '' || department === '' || biography === '' || doctorImage === '') {
            toast.warning('Please Fill All Form..!!', {
                position: toast.POSITION.TOP_CENTER
            });
        } else {

            dispatch(addDoctor(form));
            toast.success('Medicine Added Successfully...', {
                position: toast.POSITION.TOP_RIGHT
            });

            setTimeout(() => {
                setMessage('');

                setFirstName('');
                setLastName('');
                setEmail('');
                setPatient('');
                setDob('');
                setGender('');
                setAddress('');
                setPhone('');
                setDepartment('');
                setBiography('');
                setDoctorImage('');
                // setError('');
            }, 3000);
        }
    }




    const renderAddDoctorModal = () => {




        return (
            <>
                {<SideBar />}
                <div className="page-wrapper">
                    <ToastContainer />
                    <div style={{ marginLeft: '700px', color: 'green' }}><span>{message}</span></div>
                    <div className="content">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <h4 className="page-title">Add Doctor</h4>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                {/* method="POST" encType="multipart/form-data" */}
                                <form onSubmit={handleSave}>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label>First Name <span className="text-danger">*</span></label>
                                                <input className="form-control" type="text" name="firstname"
                                                    value={firstname} onChange={(e) => setFirstName(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label>Last Name</label>
                                                <input className="form-control" type="text" name="lastname"
                                                    value={lastname} onChange={(e) => setLastName(e.target.value)} />
                                            </div>
                                        </div>
                                        {/* <div className="col-sm-6">

                                        </div> */}
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label>Email <span className="text-danger">*</span></label>
                                                <input className="form-control" type="email" name="email"
                                                    value={email} onChange={(e) => setEmail(e.target.value)} />
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label>Number of Patients <span className="text-danger">*</span></label>
                                                <input className="form-control" type="text" name="patient"
                                                    value={patient} onChange={(e) => setPatient(e.target.value)} />
                                            </div>
                                        </div>


                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label>Date of Birth</label>
                                                <div className="cal-icon">
                                                    <input type="text" className="form-control datetimepicker" name="dob"
                                                        value={dob} onChange={(e) => setDob(e.target.value)} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group gender-select">
                                                <label className="gen-label">Gender:</label>
                                                <div className="form-check-inline">
                                                    <label className="form-check-label">
                                                        <input type="radio" name="gender" className="form-check-input"
                                                            value='Male' onChange={(e) => setGender(e.target.value)}
                                                        />Male
                                                    </label>
                                                </div>
                                                <div className="form-check-inline">
                                                    <label className="form-check-label">
                                                        <input type="radio" name="gender" className="form-check-input"
                                                            value='Female' onChange={(e) => setGender(e.target.value)}
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
                                                        <input type="text" className="form-control " name="address" value={address} onChange={(e) => setAddress(e.target.value)} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label>Phone </label>
                                                <input className="form-control" type="text" name="phone"
                                                    value={phone} onChange={(e) => setPhone(e.target.value)} />
                                            </div>
                                        </div>

                                        <div className="col-sm-6 col-md-6 col-lg-3">
                                            <div className="form-group">
                                                <label>Department</label>

                                                <select className="" name="department"
                                                    value={department} onChange={(e) => setDepartment(e.target.value)}>

                                                    <option selected>Select</option>

                                                    {departmentName.departments.length > 0 ? departmentName.departments.map(department =>

                                                        <option value={department.name}>{department.name}</option>

                                                    ) : null}
                                                    {/* <option value="Dentists">Dentists</option>
                                                    <option value="Neurology">Neurology</option>
                                                    <option value="Cardiology">Cardiology</option>
                                                    <option value="Opthalmology">Opthalmology</option>
                                                    <option value="Orthopedics">Orthopedics</option>
                                                    <option value="Cancer Department">Cancer Department</option>
                                                    <option value="ENT Department">ENT Department</option> */}
                                                </select>

                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label>Avatar</label>
                                                <div className="profile-upload">
                                                    <div className="upload-img">
                                                        <img alt="" src="/assets/img/user.jpg" />
                                                    </div>
                                                    <div className="upload-input">
                                                        {/* <img src="" alt="" srcset="" /> */}
                                                        <input type="file" className="form-control"
                                                            name="doctorImage" onChange={handleDoctorImage} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Short Biography</label>
                                        <textarea className="form-control" rows="3" cols="30" name="biography"
                                            value={biography} onChange={(e) => setBiography(e.target.value)}></textarea>
                                    </div>

                                    <div className="m-t-20 text-center">
                                        <button className="btn btn-primary submit-btn">Add Doctor</button>
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
            {renderAddDoctorModal()}
        </Layout>

    )
}

export default AddDoctor