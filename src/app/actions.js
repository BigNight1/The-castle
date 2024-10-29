import toast from "react-hot-toast"

export const HEADER_IMAGES = {
  base: "/img/base.webp", // Ruta de la imagen para Base
  explore: "/img/explore.webp", // Ruta de la imagen para Explore
  raid: "/img/raid.webp", // Ruta de la imagen para Raid
}

export const ACTIONS = {
  base: [
    {
      title: "Upgrade Castle",
      cost: "200 gold",
      callback: () => {
        toast.success("Upgrade complete")
      },
    },
    {
      title: "Build Tower",
      cost: "150 gold",
      callback: () => {
        toast.success("Upgrade complete")
      },
    },
    {
      title: "Train Soldiers",
      cost: "100 gold",
      callback: () => {
        toast.success("Upgrade complete")
      },
    },
    {
      title: "Repair Wall",
      cost: "80 gold",
      callback: () => {
        toast.success("Upgrade complete")
      },
    },
  ],
  explore: [
    {
      title: "Explore Caves",
      cost: "3 day",
      callback: () => {
        toast.success("Exploration party sent")
      },
    },
    {
      title: "Explore Tidal Zone",
      cost: "1 day",
      callback: () => {
        toast.success("Exploration party sent")
      },
    },
    {
      title: "Explore SMokey Mountain",
      cost: "7 days",
      callback: () => {
        toast.success("Exploration party sent")
      },
    },
  ],
  raid: [],
}
