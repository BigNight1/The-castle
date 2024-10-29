import "./globals.css"
import { ResourcesProvider } from "./context/ResourcesContext"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ResourcesProvider>{children}</ResourcesProvider>
      </body>
    </html>
  )
}