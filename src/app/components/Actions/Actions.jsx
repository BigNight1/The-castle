import ActionCard from "./ActionCard"

const Actions = ({ actions }) => {
  return (
    <div className="border rounded-md border-slate-600 h-[99%] mx-2">
      <div className="grid grid-cols-2 gap-4 p-4 overflow-y-auto max-h-[350px]">
        {actions.length === 0 ? (
          <p className="text-gray-500 text-center col-span-2">No available actions right now</p>
        ) : (
          actions.map((action, index) => (
            <ActionCard key={index} title={action.title} cost={action.cost} callback={action.callback} />
          ))
        )}
      </div>
    </div>
  )
}

export default Actions
