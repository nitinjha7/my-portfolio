import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geistSans = Geist({ 
  subsets: ["latin"],
  variable: "--font-sans",
})

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: "--font-mono",
})

export const viewport: Viewport = {
  themeColor: "#000000",
}

export const metadata: Metadata = {
  title: "Nitin Jha | Software Engineer",
  description: "Portfolio of Nitin Jha: Full Stack Developer specializing in Next.js, Distributed Systems, and AI Integration. Final Year Student at NSUT.",
  keywords: ["Nitin Jha", "Software Engineer","Full Stack Developer", "NSUT", "Next.js", "React", "Portfolio", "Software Engineer"],
  authors: [{ name: "Nitin Jha" }],
  creator: "Nitin Jha",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nitinjha.dev",
    title: "Nitin Jha | Software Engineer",
    description: "Building scalable digital experiences with code and creativity.",
    siteName: "Nitin Jha Portfolio",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body 
        className={`
          ${geistSans.variable} ${geistMono.variable} 
          font-sans antialiased 
          bg-black text-white 
          selection:bg-indigo-500 selection:text-white
          overflow-x-hidden
        `}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}