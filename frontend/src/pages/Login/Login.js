// pages/Login.js

import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import './login.css'
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

const URL = process.env.REACT_APP_BACKEND_URL + "/api/login";

const Login = (props) => {
      // State variables to hold username and password
  const [useremail, setUseremail] = useState('');
  const [password, setPassword] = useState('');


    let navigate = useNavigate();
    const { isLoggedIn, setIsLoggedIn, setName, setEmail } = props;


    const [isChecked, setIsChecked] = useState(false);
    const [isButtonEnabled, setIsButtonEnabled] = useState(false); // State to manage button enable/disable

    const handleCheckboxChange = (event) => {
      setIsChecked(event.target.checked);
      setIsButtonEnabled(event.target.checked); // Update button state when checkbox is changed
    };

    useEffect(() => {
        const storedUseremail = localStorage.getItem('useremail');
        const storedPassword = localStorage.getItem('password');
        if (storedUseremail && storedPassword) {
          setUseremail(storedUseremail);
          setPassword(storedPassword);
        //   setIsLoggedIn(true); // Corrected from false to true
          // Optionally, you can redirect the user to another page after auto-login
          navigate('/login');
        }
      }, [setIsLoggedIn, navigate]);
    //     if (isLoggedIn) navigate("/login");
    // });

    const handleLogin = async (ev) => {
        ev.preventDefault();
    
        // Store login details in local storage
        localStorage.setItem('useremail', useremail);
        localStorage.setItem('password', password); // Use the state variable
    
        const email = ev.target.email.value;
        // Remove the following line as it's unnecessary
        // const password = ev.target.password.value; 
    
        const formData = { email: email, password: password }; // Use the state variable
        const res = await axios.post(URL, formData);
        const data = res.data;
        console.log(data.name); // Assuming 'name' was intended to refer to the user's name from the response data

        if (data.success === true) {
            toast.success(data.message);
            setIsLoggedIn(true);
            setEmail(email);
            setName(data.name);
            navigate("/termscondition");
        } else toast.error(data.message);
    };

    return (
        <div className="w-full flex justify-center my-4 login-page">
            <div className="w-full max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                    Login to your account
                </h5>
                <form
                    className="w-full flex max-w-md flex-col gap-4"
                    onSubmit={handleLogin}
                >
                    <div>
                        <div className="mb-2 block">
                            <label htmlFor="email" className="text-sm font-medium required">
                                Email
                            </label>
                        </div>
                        <input
                            id="email"
                            type="email"
                            placeholder="Useremail"
                            value={useremail}
                            onChange={(e) => setUseremail(e.target.value)} 

                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
                            required
                        />
                    </div>
                    <div>
                        <div className="flex items-center justify-between mb-2 block">
                            <label
                                htmlFor="password"
                                className="text-sm font-medium required"
                            >
                                Password
                            </label>
                            {/* <div className="text-sm">
                                <a
                                    href="forgotPassword"
                                    className="font-semibold text-purple-600 hover:text-purple-500"
                                >
                                    Forgot password?
                                </a>
                            </div> */}
                        </div>
                        <input
                            id="password"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} 

                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
                            required
                        />
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                        <input
                            type="checkbox"
                            id="remember"
                            class="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor="remember" className="text-sm font-medium remenber-link" >
                            Remember me
                        </label>
                    </div>

                    <button
                        type="submit"
                        class={`focus:outline-none text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-purple-500 dark:hover:bg-purple-600 dark:focus:ring-purple-800 ${!isButtonEnabled && 'opacity-50 cursor-not-allowed'}`}
                        disabled={!isButtonEnabled}
                    >
                        Submit
                    </button>

                    <p className="text-center text-sm text-gray-500">
                        Not yet registered?{" "}
                        <Link
                            to={"/register"}
                            className="font-semibold leading-6 text-purple-600 hover:text-purple-500"
                        >
                            Register Here
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;