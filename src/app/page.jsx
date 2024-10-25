"use client"; // Esto indica que es un componente del cliente

import { useState } from "react";
import Actions from "./components/Actions/Actions.jsx";
import Taskbar from "./components/Taskbar.jsx";

export default function Home() {
  const [currentView, setCurrentView] = useState("base");

  const images = {
    base: "/img/base.jpg",      // Ruta de la imagen para Base
    explore: "/img/explore.jpg", // Ruta de la imagen para Explore
    raid: "/img/raid.jpg",       // Ruta de la imagen para Raid
  };
  return (
    <div className="h-[100vh] flex flex-col ">
      {/* Img Test */}
      <header className="flex justify-center">
      <img
          src={images[currentView]}
          alt={currentView}
          className="h-[360px] w-full"
        />
      </header>
      {/* Actions and Taskbar */}
      <div className="w-full h-full flex flex-col">
        <div className="flex-grow py-2">
          <Actions />
        </div>
        <div className="w-full">
          <Taskbar setCurrentView={setCurrentView}/>
        </div>
      </div>
    </div>
  );
}
