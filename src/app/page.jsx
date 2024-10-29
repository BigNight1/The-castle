"use client" // Esto indica que es un componente del cliente

import { useState } from "react"
import Actions from "./components/Actions/Actions.jsx"
import Taskbar from "./components/Taskbar.jsx"
import Image from "next/image"
import { Toaster } from "react-hot-toast"
import { ACTIONS } from "./actions.js"
import { HEADER_IMAGES } from "./images.js"
import { useResources } from "./context/ResourcesContext"

export default function Home() {
  const [currentView, setCurrentView] = useState("base")
  const { resources, loading, error } = useResources()

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
        <div className="p-2 border rounded-md border-slate-600 m-2 overflow-x-auto">
          <div className="flex flex-nowrap gap-4 min-w-min">
            {loading ? (
              <div>Loading...</div>
            ) : (
              resources[currentView]?.map((resource) => (
                <div key={resource.type} className="whitespace-nowrap">
                  {resource.display}: {resource.amount}
                </div>
              ))
            )}
          </div>
          <div className="text-red-500 whitespace-nowrap">{error}</div>
        </div>
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
