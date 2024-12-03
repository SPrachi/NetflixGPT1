// rafce boilerplate
import { checkValidData } from "../utils/validate";
import Header from "./Header";
import React, { useRef, useState } from "react";


const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errormessage,setErrorMessege]=useState(null);
    const email = useRef(null);
    const name =useRef(null);
    const password = useRef(null);
    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }

    const handleButtonClick = () => {
        //Validate the form data
        //Here you can use the useState or the direct reference for the validations.
        //so useRef comes into the picture.
        // checkValidData();
        console.log("email", email)
        console.log(email.current.value, "exact value")
        console.log(password.current.value, "Password")
        console.log(name.current.value,name);
        const messege = checkValidData(email.current.value, password.current.value);
        setErrorMessege(messege);
        //sign in or sign up

    }



    return (
        <>
            <div className="relative h-screen w-screen overflow-hidden">

                <Header />

                <div className="absolute inset-0">
                    <img
                        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f562aaf4-5dbb-4603-a32b-6ef6c2230136/dh0w8qv-9d8ee6b2-b41a-4681-ab9b-8a227560dc75.jpg/v1/fill/w_1192,h_670,q_70,strp/the_netflix_login_background__canada__2024___by_logofeveryt_dh0w8qv-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvZjU2MmFhZjQtNWRiYi00NjAzLWEzMmItNmVmNmMyMjMwMTM2XC9kaDB3OHF2LTlkOGVlNmIyLWI0MWEtNDY4MS1hYjliLThhMjI3NTYwZGM3NS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.LOYKSxIDqfPwWHR0SSJ-ugGQ6bECF0yO6Cmc0F26CQs"
                        alt="Background"
                        className="w-full h-full object-cover"
                    />

                </div>

                {/* Centered Form */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <form onSubmit={(e) => e.preventDefault()} className="bg-black bg-opacity-75 p-8 rounded-md shadow-lg">
                        <h2 className="text-white text-2xl font-semibold mb-6">
                            {isSignInForm ? "Sign In " : "Sign Up"}
                        </h2>
                        {!isSignInForm && (
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="w-full p-3 mb-4 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                            />)}
                        <input
                            ref={email}
                            type="text"
                            placeholder="Email Address"
                            className="w-full p-3 mb-4 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                        />
                        <input
                            ref={password}
                            type="password"
                            placeholder="Password"
                            className="w-full p-3 mb-6 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                        />
                        <p className="text-red-500 font-bold py-4 mx-3">{errormessage}</p>
                        <button
                            type="submit"
                            className="w-full py-2 bg-red-600 text-white font-bold rounded-md hover:bg-red-700 transition duration-200" onClick={() => {
                                handleButtonClick()
                            }}>
                            {isSignInForm ? "Sign In " : "Sign Up"}

                        </button>
                        <p className="text-white cursor-pointer py-3 " onClick={toggleSignInForm}>
                            {isSignInForm ? "New to netflix? Sign up now!" : "already Registerd"}
                        </p>
                    </form>

                </div>
            </div>
        </>
    );
};

export default Login;
