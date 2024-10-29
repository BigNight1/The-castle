"use client"

import { createContext, useContext, useState, useEffect } from "react"

const ResourcesContext = createContext()

let INITIAL_RESOURCES = {
  base: [
    {
      type: "gold",
      display: "Gold",
      amount: 560,
    },
  ],
  explore: [
    {
      type: "ranger",
      display: "Rangers",
      amount: 5,
    },
  ],
  raid: [
    {
      type: "soldier",
      display: "Soldiers",
      amount: 20,
    },
    {
      type: "archer",
      display: "Archers",
      amount: 8,
    },
  ],
}

export function ResourcesProvider({ children }) {
  const [resources, setResources] = useState(INITIAL_RESOURCES)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    try {
      setResources(INITIAL_RESOURCES)
      setError(null)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setLoading(false)
    }
  }, [])

  const spendResources = (category, type, amount) => {
    const resourceToSpend = resources[category]?.find((r) => r.type === type)

    if (!resourceToSpend) {
      setError(`Resource ${type} not found in ${category}`)
      return false
    }

    if (resourceToSpend.amount < amount) {
      setError(`Not enough ${resourceToSpend.display}. Have: ${resourceToSpend.amount}, Need: ${amount}`)
      return false
    }

    setResources((prev) => ({
      ...prev,
      [category]: prev[category].map((resource) =>
        resource.type === type ? { ...resource, amount: resource.amount - amount } : resource
      ),
    }))

    setError(null)
    return true
  }

  const clearError = () => setError(null)

  return (
    <ResourcesContext.Provider value={{ resources, loading, error, spendResources, clearError }}>
      {children}
    </ResourcesContext.Provider>
  )
}

export function useResources() {
  const context = useContext(ResourcesContext)
  if (!context) {
    throw new Error("useResources must be used within a ResourcesProvider")
  }
  return context
}
