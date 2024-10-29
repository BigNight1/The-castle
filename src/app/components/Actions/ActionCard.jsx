import { GiArmorUpgrade } from "react-icons/gi"

const ActionCard = ({ title, cost, callback }) => {
  return (
    <button
      onClick={callback}
      className="border rounded-md flex items-center py-4 px-2 bg-gray-100 shadow-md h-[100px] w-auto flex-grow-0 flex-shrink-0 hover:bg-gray-200 active:bg-gray-300 transition-colors duration-200"
    >
      <div className="text-blue-500 text-2xl mr-2">
        <GiArmorUpgrade />
      </div>
      <div>
        <p className="text-[14px] font-semibold uppercase">{title}</p>
        <span className="text-sm text-gray-500">{cost}</span>
      </div>
    </button>
  )
}

export default ActionCard
