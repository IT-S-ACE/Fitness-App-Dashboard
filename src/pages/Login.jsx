import Cookies from 'js-cookie';
import { useState } from 'react'
import React from 'react';
import { Button } from '../components';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from "react-query";
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';
import api from '../api/api'
import { useStateContext } from '../contexts/ContextProvider';
import { CoachLogin } from '../api/coachApi';


function handelclick() {
    const container = document.getElementById('container');
    const registerBtn = document.getElementById('register');
    const loginBtn = document.getElementById('login');

    registerBtn.addEventListener('click', () => {
        container.classList.add("active");
    });

    loginBtn.addEventListener('click', () => {
        container.classList.remove("active");
    });
}

function Login() {
    //useContext [TOKEN]
    const {adminToken , setAdminToken , setToken , setStorCoachID } = useStateContext();
    // hooks for admin login
    const [phone_number, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    // hook for navigate between the pages
    const navigate = useNavigate();
    // hooks for coach login
    const [coachPhoneNumber, setCoachPhoneNumber] = useState('')
    const [coachPassword, setCoachPassword] = useState('')
    // const [coachConfPassword, setCoachConfPassword] = useState('')
    const QueryClient = useQueryClient();


    //React Query code
    const coachLoginMutation = useMutation(CoachLogin, {
        onSuccess: (data) => {
            QueryClient.invalidateQueries("coachLogin")
            toast.success("Login Successfully")
            console.log(data.data.user.price)
            const coachID = data.data.user.id
            setStorCoachID(coachID)
            if(data.data.user.price != null){
                navigate('/Coach')
            }else{
                navigate("/introduction")
            }
            // {data.data.user.price !== 0 && navigate("/introduction")}
            // navigate("/introduction");
            // setTimeout(() => {navigate('/ecommerce')}, 1000);
            console.log("siiiiiiiiiiiii", data.data.status)
            console.log("token", data.data.token)
            console.log(data)
            // setCoachToken(data.data.token)
            Cookies.set('coachToken' , data.data.token , {expires: 7 , secure: true})
        },
        onError: (err) => {
            toast.error("Login Failed")
            console.log("noooooooooooooooooo", err.data)
        }
    })
    const handleCoachSubmit = (e) => {
        e.preventDefault()
        coachLoginMutation.mutate({
            phone_number: coachPhoneNumber,
            password: coachPassword,
            // confirm_password: coachConfPassword
        })
    }

    // passing Token

    // const config = {
    //     headers:{Authorization: `Bearer ${token}`}
    // }

    //Axios code (Admin Login)
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post("/admin/login", {
                phone_number,
                password,
            });

            console.log(response.data);
            // {toast.success(response.data.message) && setTimeout(() => {navigate("/home")}, 1000); }
            if (response.data.status) {
                toast.success(response.data.message);
                Cookies.set('adminToken' , response.data.token , {expires: 7 , secure: true})
                // localStorage.setItem('adminToken', response.data.token); // Save token to localStorage
                // setToken(response.data.token);
                navigate("/ecommerce");
                // setAdminToken(response.data.token)

            }

        } catch (err) {
            console.error("Error:", err);
            if (err.response.data.errors) {
                toast.error(err.response.data.errors.phone_number || err.response.data.errors.password);
            } else {
                toast.error("Phone Number & Password does not match with our record.")
            }
        }
    };

    return (
        <>
            <div className="containerr" id="container">
                <div className="form-container sign-up">
                    <form onSubmit={handleCoachSubmit}>
                        <h1 >{/*Create Account*/}Sign In</h1>
                        {/* <div className="social-icons">
                            <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
                            <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
                            <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
                            <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
                        </div> */}
                        <span>or use your email for registeration</span>
                        <input
                            type="tel"
                            placeholder="Phone number "
                            value={coachPhoneNumber}
                            onChange={(e) => setCoachPhoneNumber(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Number"
                            value={coachPassword}
                            onChange={(e) => setCoachPassword(e.target.value)}
                        />
                        {/* <input
                            type="password"
                            placeholder="Password"
                            value={coachConfPassword}
                            onChange={(e) => setCoachConfPassword(e.target.value)}
                        /> */}
                        <button 
                        
                        >Sign In</button>
                    </form>
                </div>
                <div className="form-container sign-in">
                    <form onSubmit={handleSubmit}>
                        <h1>Sign In</h1>

                        <span>or use your email password</span>
                        <input
                            type="phone_number" placeholder="Phone Number"
                            value={phone_number}
                            onChange={(e) => setPhoneNumber(e.target.value)} />
                        <input
                            type="password" placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                        {/* <a href="#">Forget Your Password?</a> */}
                        <button>Sign In</button> {/* <NavLink to='/ecommerce'></NavLink>*/}
                    </form>
                </div>
                <div className="toggle-container">
                    <div className="toggle">
                        <div className="toggle-panel toggle-left">
                            <h1>Welcome Coach!</h1>
                            <p>Enter your personal details to use all of site features</p>
                            <button className="hiddenn" id="login">ADMIN</button>
                        </div>
                        <div className="toggle-panel toggle-right">
                            <h1>Hello, Admin!</h1>
                            <p>Enter your personal details to use all of site features</p>

                            <button className="hiddenn" id="register" onClick={handelclick}>COACH</button>

                            {/* Edit the ClassName*/}
                        </div>
                    </div>
                </div>
            </div>
            <Toaster />
        </>
    )
}

export default Login
