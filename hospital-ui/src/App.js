import './App.css';
import { Routes, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getInitialData, isUserLoggedIn } from './actions'
import Home from './Components/Home/Home';
import Signup from './Components/Signup/Signup';
import Signin from './Components/Signin/Signin';
import Dashboard from './Container/Dashboard/Dashboard';
import VerifyPage from './Components/VerifyPage/VerifyPage';
import Doctors from './Container/Doctor/Doctors';
import AddDoctor from './Container/Doctor/AddDoctor';
import PrivateRoute from './Components/HOC/PrivateRoute'
import AddAppointment from './Container/Appointment/AddAppointment';
import Appointments from './Container/Appointment/Appointments';
import Departments from './Container/Department/Departments';
import AddDepartment from './Container/Department/AddDepartment';
import Employees from './Container/Employee/Employees';
import AddEmplyoee from './Container/Employee/AddEmplyoee';
import EmployeeLeave from './Container/Employee/EmployeeLeave';
import EmployeeSalary from './Container/Employee/EmployeeSalary';
import Test from './Components/Test/Test';
import AddLeave from './Container/Employee/AddLeave';
import Add_Medicine from './Container/Store/Add_Medicine';
import Profile from './Components/Signin/Profile';
import Complain from './Container/Complain/Complain';
import Medicine from './Container/Store/Medicine';
import Patient from './Container/Patient/Patient';
import Edit_Doctor from './Container/Doctor/Edit_Doctor';
import AddPatient from './Container/Patient/AddPatient';
import Requests from './Container/Requests/Requests';
import Users from './Container/Users/Users';
import AddComplain from './Container/Complain/AddComplain';




function App() {

  const auth = useSelector(state => state.auth);
  const doctor = useSelector(state => state.doctor);


  const dispatch = useDispatch();


  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
    if (auth.authenticate) {
      dispatch(getInitialData());
    }
  }, [auth.authenticate]);

  // if (!auth.authenticate) {
  //   return <Navigate to='/' />
  // }


  return (
    <div className="App">

      <Routes>
        <Route exact path="/" element={<PrivateRoute />} >
          <Route exact path="/" element={<Dashboard />} />
          {/* <Route exact path="/layout" element={<Test />} /> */}

          <Route exact path="/users" element={<Users />} />

          <Route exact path="/doctors" element={<Doctors />} />
          <Route exact path="/patients" element={<Patient />} />
          <Route exact path="/appointments" element={<Appointments />} />
          <Route exact path="/departments" element={<Departments />} />
          <Route exact path="/employees" element={<Employees />} />
          <Route exact path="/receipt" element={<EmployeeSalary />} />
          <Route exact path="/store" element={<Medicine />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/complains" element={<Complain />} />
          <Route exact path="/add_complain" element={<AddComplain />} />
          <Route exact path="/requests" element={<Requests />} />
          <Route exact path="/add_doctor" element={<AddDoctor />} />
          <Route exact path="/add_patient" element={<AddPatient />} />
          <Route exact path="/add_appointment" element={<AddAppointment />} />
          <Route exact path="/add_department" element={<AddDepartment />} />
          <Route exact path="/add_employee" element={<AddEmplyoee />} />
          <Route exact path="/add_leave" element={<AddLeave />} />
          <Route exact path="/add_salary" element={<AddLeave />} />
          <Route exact path="/add_medicine" element={<Add_Medicine />} />
          <Route exact path="/employeeleave" element={<EmployeeLeave />} />
          <Route exact path="/edit_doctor" element={<Edit_Doctor />} />


        </Route>
        <Route exact path="/verify" element={<VerifyPage />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/signin" element={<Signin />} />
        <Route exact path="/signup" element={<Signup />} />



      </Routes>

    </div>
  );
}

export default App;
