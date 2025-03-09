import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import Providers from "@/components/provider"
import Footer from "@/components/footer"
import ScrollToTopBtn from "@/components/scroll-to-top-btn"
import CvBtn from "@/components/cv-btn"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Valentino Copperi",
  description: "Portfolio of a Full Stack Developer specialized in React and Next.js",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.png" />

      </head>
      <Providers>
        <body className={`${inter.className} max-w-screen min-h-screen bg-background text-foreground flex overflow-x-hidden`}>
          <div className="flex-1 flex flex-col">
            <header className="sticky backdrop-blur-md z-50 top-0 right-0 w-full flex justify-around items-center  p-6 border-b border-border/50">
                <h1 className="font-semibold">Valentino Copperi</h1>
                <CvBtn/>
                <ScrollToTopBtn/>
            </header>
            <main className=" w-[98%] md:w-[85%] lg:w-[65%] mx-auto md:border-border/50 md:border-r md:border-l md:border-b">{children}</main>
            <Footer/>
          </div>
        </body>
      </Providers>
    </html>
  )
}

