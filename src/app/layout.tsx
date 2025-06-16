import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import Providers from "@/components/provider"
import Footer from "@/components/footer"
import ScrollToTopBtn from "@/components/scroll-to-top-btn"
import CvBtn from "@/components/cv-btn"
import LoopCarga from "@/components/loop-carga"
import { FlickeringGrid } from "@/components/magicui/flickering-grid"

const inter = Inter({ subsets: ["latin"], preload: true })


export const metadata = {
  title: "Valentino Copperi - Full Stack Developer Portfolio",
  description: "Hire Valentino Copperi, a skilled Full Stack Developer specializing in React & Next.js. Explore my freelance portfolio for web development projects.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Valentino Copperi - Full Stack Developer",
    description: "Portfolio showcasing Valentino Copperi's expertise in React, Next.js, and freelance web development.",
    url: "https://www.valentinocopperi.com",
    siteName: "Valentino Copperi Portfolio",
    images: [
      {
        url: "https://www.valentinocopperi.com/logo-valentino.png", // Add a high-quality image
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Valentino Copperi - Full Stack Developer",
    description: "Explore the freelance portfolio of Valentino Copperi, specializing in React and Next.js.",
    images: ["https://www.valentinocopperi.com/logo-valentino.png"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Valentino Copperi",
              jobTitle: "Full Stack Developer",
              url: "https://www.valentinocopperi.com",
              sameAs: [
                "https://www.linkedin.com/in/valentinocopperi",
                "https://github.com/ValentinoCopperi",
                "https://x.com/valen_cm_",
              ],
              description:
                "Valentino Copperi is a freelance Full Stack Developer specializing in React, Next.js, and web development.",
            }),
          }}
        />
      </head>
      <Providers>

        <body className={`${inter.className} max-w-screen min-h-screen bg-background text-foreground flex overflow-x-hidden`}>

          <div className="flex-1 flex flex-col">
            <header className="sticky backdrop-blur-md z-50 top-0 right-0 w-full flex justify-around items-center  p-6 border-b border-border/50">
              <h1 className="font-semibold">Valentino Copperi</h1>
              <CvBtn />
              <ScrollToTopBtn />
            </header>
            <main className=" w-[98%] md:w-[85%] lg:w-[75%] mx-auto md:border-border/50 md:border-r md:border-l md:border-b">{children}</main>
            <Footer />
          </div>

        
        </body>
        <LoopCarga />
      </Providers>
    </html>
  )
}

