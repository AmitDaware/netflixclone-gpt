import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[25%] px-12 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-5xl font-bold ">{title}</h1>
      <p className="py-6 text-sm w-1/4">{overview}</p>
      <div className="flex space-x-4 mt-4">
            <button className="bg-white text-black px-6 py-2 rounded-lg font-semibold hover:bg-opacity-80">
              ▷ Play
            </button>
            <button className="bg-gray-700 px-6 py-2 rounded-lg font-semibold bg-opacity-50 ">
              ⅰ More Info
            </button>
          </div>
    </div>
  );
};

export default VideoTitle;
