import React from 'react'
import { ThemeProvider } from './ui/theme-provider'
import { Analytics } from "@vercel/analytics/react"



const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      themes={["dark"]}
      enableSystem
      disableTransitionOnChange
    >
      {children}
      <Analytics/>
    </ThemeProvider>
  )
}

export default Providers