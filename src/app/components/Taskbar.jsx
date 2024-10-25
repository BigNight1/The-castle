import React from 'react';

const Taskbar = ({ setCurrentView }) => {
  return (
    <div className=" w-full bg-gray-800 ">
      <footer className="flex justify-around py-4 text-white">
        <div className="text-center cursor-pointer">
          <p className="text-lg font-semibold" onClick={() => setCurrentView("base")}>Base</p>
        </div>
        <div className="text-center cursor-pointer">
          <p className="text-lg font-semibold" onClick={() => setCurrentView("explore")}>Explore</p>
        </div>
        <div className="text-center cursor-pointer">
          <p className="text-lg font-semibold" onClick={() => setCurrentView("raid")}>Raid</p>
        </div>
      </footer>
    </div>
  );
}

export default Taskbar;
