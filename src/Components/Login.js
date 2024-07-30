import React, { useState } from "react";
import Header from "./Header";
import { NET_BG } from "../Utils/constants";
import { Link } from "react-router-dom";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute w-full h-full object-cover">
        <img src={NET_BG} alt="BackgroundImage" />
      </div>
      <form className=" absolute p-12 bg-black my-24 mx-auto right-0 left-0 text-white w-3/12 flex flex-col py-4 bg-opacity-55 rounded">
        <h1 className="font-bold text-3xl">
          {isSignInForm ? "SignIn" : "SignUp"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="FullName"
            className="p-3 my-2 bg-gray-700 rounded"
          />
        )}
        <input
          type="Email"
          placeholder="Email Address"
          autoComplete="email"
          className="p-3 my-2 bg-gray-700 rounded"
        />
        <input
          type="Password"
          placeholder="Password"
          autoComplete="Password"
          className="p-3 my-2 bg-gray-700 rounded"
        />
        <button className="bg-red-600 py-3 my-6 rounded font-bold">
          {isSignInForm ? "SignIn" : "SignUp"}
        </button>
        <div className="flex justify-between items-center text-sm text-gray-600">
          <p>
            <input className="mr-2" type="checkbox" />
            Remember me
          </p>
          <p>Need Help?</p>
        </div>
        <p className="py-8">
          <span className="text-gray-500 mr-1">New to Netflix?</span>
          <Link onClick={toggleSignInForm}>
            {isSignInForm ? "SignUp" : "SignIn"}
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
