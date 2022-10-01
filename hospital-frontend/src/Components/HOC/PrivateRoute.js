import { Navigate, Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';



const PrivateRoute = ( ) => {
    const token = window.localStorage.getItem('token');
    const auth = useSelector(state => state.auth);


    
   
return  token ? (
                <Outlet />
    
      )  :  (   <Navigate to='/home' />       )
         
}


export default PrivateRoute;