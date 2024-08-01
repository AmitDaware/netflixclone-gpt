import React, { useEffect } from "react";
import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  //you can write it anywhere;

  //Firebase give us an API that api is onAuthStateChange, this api is called whenever an user sigIn or signUp or signOut or whenever there is an Authentication state change. "kind of and event listener".. What it will do is whenever user signIn or signUp it will add it to the store and whenever an user signsOut it will remove it from the store.
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed In
        const { uid, email, displayName, photoURL } = user;

        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );

        // to go to browser page
      } else {
        // User is signed out
        dispatch(removeUser());
        // () it is empty because we didn't have any state or action in out removeUser in userSlice..
      }
    });
  }, []);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
