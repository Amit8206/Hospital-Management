import './App.css';
import { Routes, Route } from 'react-router-dom'
import Footer from './Components/Footer';
import Home from './Components/Home';
import Signup from './Components/Signup';
import Signin from './Components/Signin';
import Dashboard from './Container/Dashboard';
import VerifyPage from './Components/VerifyPage';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getInitialData, isUserLoggedIn } from './actions'
import Doctors from './Container/Doctors';
import AddDoctor from './Components/AddDoctor';
import PrivateRoute from './Components/HOC/PrivateRoute'
import AddAppointment from './Container/AddAppointment';
import Appointments from './Container/Appointments';
import Departments from './Container/Departments';
import AddDepartment from './Container/AddDepartment';
import Employees from './Container/Employees';
import AddEmplyoee from './Container/AddEmplyoee';
import EmployeeLeave from './Container/EmployeeLeave';
import Store from './Container/Store';
import EmployeeSalary from './Container/EmployeeSalary';
import Layout from './Components/Layout/Layout';
import Test from './Components/Test';




function App() {

  const auth = useSelector(state => state.auth);

  const dispatch = useDispatch();


  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
    if(auth.authenticate){
      dispatch(getInitialData());
    }
  }, [auth.authenticate]);

  // if (!auth.authenticate) {
  //   return <Navigate to='/' />
  // }


  return (
    <div className="App">
      {/* <Navbar /> */}
      <Routes>
      <Route exact path="/" element={<PrivateRoute />} >
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/layout" element={<Test />} />

        <Route exact path="/doctors" element={<Doctors />} />
        <Route exact path="/appointments" element={<Appointments />} />
        <Route exact path="/departments" element={<Departments />} />
        <Route exact path="/employee" element={<Employees />} />
        <Route exact path="/store" element={<Store />} />
        <Route exact path="/receipt" element={<EmployeeSalary />} />
        <Route exact path="/employee/add" element={<AddEmplyoee />} />
        <Route exact path="/employee/leave" element={<EmployeeLeave />} />
        <Route exact path="/departments/add_department" element={<AddDepartment />} />
        <Route path="/doctors/add_doctor" element={<AddDoctor />} />
        <Route exact path="/appointments/add_appointment" element={<AddAppointment />} />
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
