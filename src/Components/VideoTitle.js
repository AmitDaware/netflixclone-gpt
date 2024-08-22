import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 px-12">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="flex space-x-4 mt-4">
            <button className="bg-gray-700 text-black px-6 py-2 rounded-lg font-semibold bg-opacity-50">
              ▶ Play
            </button>
            <button className="bg-gray-700 px-6 py-2 rounded-lg font-semibold bg-opacity-50">
              ℹ More Info
            </button>
          </div>
    </div>
  );
};

export default VideoTitle;
