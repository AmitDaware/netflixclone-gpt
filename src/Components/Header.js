import React, { useEffect } from "react";
import { NET_LOGO, SUPPORTED_LANGUAGES } from "../Utils/constants";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";
import { toggleGptSearchView } from "../Utils/GptSearchSlice";
import { changeLanguage } from "../Utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //NOTE : useNavigate hook should always used on the children level and not on the parent level..
  // as we want to our user to go to the browser page after he signing In we use useNavigate hook which is given by react router dom
  const user = useSelector((store) => store.user);

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
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
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        // () it is empty because we didn't have any state or action in out removeUser in userSlice..

        navigate("/");
      }
    });

    //we know that our useEffect will be called only once because of the dependency array, but our header component can be loaded multiple times in a single session, so what will happen is header will keep attaching event listeners in my browsers, it will kind of put this onAuthStateChange code every time mu useEffect is called, but when my component unmounts it should also unsubscribe to this action. so we can do this by giving a clean up function ↓
    // The firebase documentation tells us that this onAuthStateChanged returns a unsubscribe function and when we call this unsubscribe function it will remove onAuthStateChanged from our browser.
    //so we will unsubscribe it when our Header component unloads.

    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    //? Toggle functionality here. onclick of the search button the search component will be visible.
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-full px-3 py-2 bg-gradient-to-b from-black z-10 flex justify-between ">
      <img className="w-44" src={NET_LOGO} alt="LOGO" />
      {user && (
        <div className="flex my-auto">
          {showGptSearch && (
            <select
              className=" bg-gradient-to-r from-emerald-300 to-blue-500 mx-1 px-6 py-3 text-white outline-none ring-blue-300 transition-all focus:ring hover:opacity-90 rounded-xl"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option
                  className="text-black"
                  key={lang.identifier}
                  value={lang.identifier}
                >
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <button
            className="bg-gradient-to-r from-emerald-300 to-blue-500 mx-1 px-6 py-3 text-white outline-none ring-blue-300 transition-all focus:ring hover:opacity-90 rounded-xl"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "HomePage" : " GPT Search"}
          </button>
          <button
            className=" bg-gradient-to-r from-emerald-300 to-blue-500 mx-1 px-6 py-3 text-white outline-none ring-blue-300 transition-all focus:ring hover:opacity-90 rounded-xl"
            onClick={handleSignOut}
          >
            SignOut
          </button>
          <img
            className="w-12 h-12 rounded-xl"
            src={user.photoURL}
            alt="User Icon"
          />
        </div>
      )}
    </div>
  );
};

export default Header;
