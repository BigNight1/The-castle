import ActionCard from "./ActionCard";

const Actions = () => {
  const actions = [
    { title: "Upgrade Castle", cost: "200 gold" },
    { title: "Build Tower", cost: "150 gold" },
    { title: "Train Soldiers", cost: "100 gold" },
    { title: "Repair Wall", cost: "80 gold" },
  ];
  return (
    <div className="border rounded-md border-slate-600 h-[99%] mx-2">
      <div className="grid grid-cols-2 gap-4 p-4">
        {actions.map((action, index) => (
          <ActionCard key={index} title={action.title} cost={action.cost} />
        ))}
      </div>
    </div>
  );
};

export default Actions;
