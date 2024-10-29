import React from "react"
import { useResources } from "../context/ResourcesContext"

const Taskbar = ({ setCurrentView }) => {
  const { clearError } = useResources()
  return (
    <div className=" w-full bg-gray-800 ">
      <footer className="flex justify-around py-4 text-white">
        <div className="text-center cursor-pointer">
          <p
            className="text-lg font-semibold"
            onClick={() => {
              setCurrentView("base")
              clearError()
            }}
          >
            Base
          </p>
        </div>
        <div className="text-center cursor-pointer">
          <p
            className="text-lg font-semibold"
            onClick={() => {
              setCurrentView("explore")
              clearError()
            }}
          >
            Explore
          </p>
        </div>
        <div className="text-center cursor-pointer">
          <p
            className="text-lg font-semibold"
            onClick={() => {
              setCurrentView("raid")
              clearError()
            }}
          >
            Raid
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Taskbar
