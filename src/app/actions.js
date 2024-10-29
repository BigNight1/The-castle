import toast from "react-hot-toast"

export const ACTIONS = {
  base: [
    {
      title: "Upgrade Castle",
      cost: "200 gold",
      callback: () => {
        toast.success("Upgrade complete")
      },
      metadata: {
        category: "base",
        type: "gold",
        amount: 200,
      },
    },
    {
      title: "Build Tower",
      cost: "150 gold",
      callback: () => {
        toast.success("Upgrade complete")
      },
      metadata: {
        category: "base",
        type: "gold",
        amount: 150,
      },
    },
    {
      title: "Train Soldiers",
      cost: "100 gold",
      callback: () => {
        toast.success("Upgrade complete")
      },
      metadata: {
        category: "base",
        type: "gold",
        amount: 100,
      },
    },
    {
      title: "Repair Wall",
      cost: "80 gold",
      callback: () => {
        toast.success("Upgrade complete")
      },
      metadata: {
        category: "base",
        type: "gold",
        amount: 80,
      },
    },
  ],
  explore: [
    {
      title: "Explore Caves",
      cost: "2 Rangers, 3 days",
      callback: () => {
        toast.success("Exploration party sent")
      },
      metadata: {
        category: "explore",
        type: "ranger",
        amount: 2,
      },
    },
    {
      title: "Explore Tidal Zone",
      cost: "1 Ranger, 1 day",
      callback: () => {
        toast.success("Exploration party sent")
      },
      metadata: {
        category: "explore",
        type: "ranger",
        amount: 1,
      },
    },
    {
      title: "Explore SMokey Mountain",
      cost: "3 Rangers, 7 days",
      callback: () => {
        toast.success("Exploration party sent")
      },
      metadata: {
        category: "explore",
        type: "ranger",
        amount: 3,
      },
    },
  ],
  raid: [],
}
