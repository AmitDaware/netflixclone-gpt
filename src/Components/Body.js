import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const Body = () => {

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
 

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
