import React from "react";
import { NET_LOGO, USER_ICON } from "../Utils/constants";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  return (
    <div className="absolute w-full px-3 py-2 bg-gradient-to-b from-black z-10 flex justify-between border border-black">
      <img className="w-44" src={NET_LOGO} alt="LOGO" />
      {user && <div className="flex my-auto">
        <img
          className="w-12 h-12 rounded-xl"
          src={user.photoURL}
          alt="User Icon"
        />
        <button onClick={handleSignOut}>SignOut</button>
      </div>}
    </div>
  );
};

export default Header;
