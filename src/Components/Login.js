import React, { useRef, useState } from "react";
import Header from "./Header";
import { NET_BG, USER_AVATAR } from "../Utils/constants";
import { Link } from "react-router-dom";
import { checkValidData } from "../Utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../Utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const nameRef = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    // validate the form data
    const message = checkValidData(email.current.value, password.current.value);

    setErrorMessage(message);

    //signIn signUp Logic OR AUTHENTICATION
    if (message) return;
    if (!isSignInForm) {
      // signUp Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          // eslint-disable-next-line no-unused-vars
          const user = userCredential.user;
          updateProfile(user, {
            displayName: nameRef.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser; //here if we do by user then it will show null because it isn't got updated yet,
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              // Profile updated!
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(errorMessage);
            });
          // console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //signIn Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
    //Now we have to implement one more thing if the user sign up or if the user signIn then we get a USER OBJECT (in if else) and we will have to keep this user object with us because i can need this user objet anywhere in my app, so what we will do is as soon as the user signIn or signUp we will just add all that data to our redux store and navigate our user to the BROWSE page.
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute w-full h-full object-cover">
        <img src={NET_BG} alt="BackgroundImage" />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className=" absolute p-12 bg-black my-24 mx-auto right-0 left-0 text-white w-3/12 flex flex-col py-4 bg-opacity-55 rounded"
      >
        <h1 className="font-bold text-3xl">
          {isSignInForm ? "SignIn" : "SignUp"}
        </h1>
        {!isSignInForm && (
          <input
            ref={nameRef}
            type="text"
            placeholder="FullName"
            className="p-3 my-2 bg-gray-700 rounded"
          />
        )}
        <input
          ref={email}
          type="Email"
          placeholder="Email Address"
          autoComplete="email"
          className="p-3 my-2 bg-gray-700 rounded"
        />
        <input
          ref={password}
          type="Password"
          placeholder="Password"
          autoComplete="Password"
          className="p-3 my-2 bg-gray-700 rounded"
        />

        <p className="text-red-700 font-bold text-lg py-2">{errorMessage}</p>

        <button
          className="bg-red-600 py-3 my-6 rounded font-bold"
          onClick={handleButtonClick}
        >
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
