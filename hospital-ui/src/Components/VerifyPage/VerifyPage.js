import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
import axios from '../../helpers/axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useLocation} from "react-router-dom"



const VerifyPage = () => {

    const location = useLocation()

    const [id, setId] = useState('');
    const [email, setEmail] = useState('');

    const VerifyUser = (e) => {
        e.preventDefault();

        const user = {
            id,
            email
        }
        Verify(user);
        // Navigate('/signin');
    }


    const Verify = async (user) => {

        const res = await axios.post(`/verify`, {
            ...user
        });


        if (res.status === 201) {
            const { message } = res.data;
            console.log({ message });

            toast.success('User Veryfied Successfully...', {
                position: toast.POSITION.TOP_RIGHT
            });

            // location.push('/signin')


            // Navigate('/')

            // if (auth.authenticate) {
            //     return (<Navigate to='/' />)
            //   }

            // localStorage.setItem('token', token);
            // localStorage.setItem('user', JSON.stringify(user));


        } else {
            if (res.status === 400) {
                const { message } = res.data;
                console.log({ message });

                toast.error(message, {
                    position: toast.POSITION.TOP_CENTER
                });

            }
        }
    }

    // const token = localStorage.getItem('token');

    // if(token){
    //     return (<Navigate to='/signin' />)
    // }


    return (
        <div class="main-wrapper  account-wrapper">
             <ToastContainer />
            <div class="account-page">
                <div class="account-center">
                    <div class="account-box">
                        <form class="form-signin" onSubmit={VerifyUser}>
                            <div class="account-logo">
                                <a href="index-2.html"><img src="assets/img/logo-dark.png" alt="" /></a>
                            </div>
                            <div class="form-group">
                                <label>Id</label>
                                <input type="text" class="form-control" name="id"
                                    value={id}
                                    onChange={(e) => setId(e.target.value)} />
                            </div>
                            <div class="form-group">
                                <label>Email</label>
                                <input type="email" class="form-control" name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)} />
                            </div>


                            <div class="text-center login-link">
                                <button type="submit">Verify</button>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VerifyPage