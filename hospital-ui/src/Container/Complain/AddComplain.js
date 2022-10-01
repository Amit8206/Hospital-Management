import React from 'react'
import './complain.css'
import Layout from '../../Components/Layout/Layout'
import SideBar from '../../Components/SideBar/SideBar'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react'
import { addComplain } from '../../actions'


const AddComplain = () => {

  const doctor = useSelector(state => state.doctor);
  const dispatch = useDispatch();


  const [complain, setComplain] = useState({
    name: '', email: '', doctorid: '', subject: '', message: ''
  })

  let name, value;

  const handleSave = (e) => {
    e.preventDefault();

    name = e.target.name;
    value = e.target.value;

    setComplain({ ...complain, [name]: value });
    console.log({complain})

  }

  const insertComplain = (e) => {
    e.preventDefault();

    console.log({ complain });
    dispatch(addComplain(complain));
    toast.success('Complain Added Successfully...', {
      position: toast.POSITION.TOP_RIGHT
    });
  }




  const renderAddComplainModal = () => {



    return (
      <>
        {<SideBar />}
        <ToastContainer />
        <div class="container" style={{ marginTop: '30px' }}>
          <form onSubmit={insertComplain}>

            <div class="row">
              <div class="col-md-6">

                <label for="fname">Enter Name</label>
                <input type="text" id="fname" name="name" placeholder="Your name.."
                  value={complain.name}
                  onChange={handleSave} />
              </div>

              <div class="col-md-6">
                <label for="fname">Enter Email</label>
                <input type="text" id="" name="email" placeholder="Your email.."
                value={complain.email}
                onChange={handleSave}  />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label>Doctor</label>
                <select class="" name="doctorid"
                  value={complain.doctorid}
                  onChange={handleSave}>

                  <option selected>Select</option>
                  {doctor.doctors.length > 0 ? doctor.doctors.map(doctor =>

                    <option value={doctor._id}>{doctor.firstname + ' ' + doctor.lastname}</option>

                  ) : null}

                </select>
              </div>
            </div>

            <label for="subject">Subject</label>
            <textarea id="subject" name="subject" placeholder="Write something.." style={{ height: "200px" }}
            value={complain.subject}
            onChange={handleSave}></textarea>

            <label for="">Message</label>
            <textarea id="" name="message" placeholder="Write something.." style={{ height: "200px" }}
            value={complain.message}
            onChange={handleSave}></textarea>

            <input type="submit" value="Submit" />

          </form>
        </div>
      </>

    )
  }

  return (
    <Layout>
      {renderAddComplainModal()}
    </Layout>
  )
}

export default AddComplain