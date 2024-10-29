"use client" // Esto indica que es un componente del cliente

import { useState } from "react"
import Actions from "./components/Actions/Actions.jsx"
import Taskbar from "./components/Taskbar.jsx"
import Image from "next/image"
import { Toaster } from 'react-hot-toast';
import { HEADER_IMAGES, ACTIONS } from "./actions.js"

export default function Home() {
  const [currentView, setCurrentView] = useState("base")
  return (
    <div className="h-[100vh] flex flex-col ">
      {/* Img Test */}
      <header className="flex justify-center">
        <Image
          src={HEADER_IMAGES[currentView]}
          alt={currentView}
          width={1920}
          height={360}
          className="h-[360px] w-full object-cover"
        />
      </header>
      {/* Actions and Taskbar */}
      <div className="w-full h-full flex flex-col">
        <div className="flex-grow py-2">
          <Actions actions={ACTIONS[currentView]} />
        </div>
        <div className="w-full">
          <Taskbar setCurrentView={setCurrentView} />
        </div>
      </div>
      <Toaster />
    </div>
  )
}
