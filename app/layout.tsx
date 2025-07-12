import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Muhammad Afzal | Full Stack & AI Developer",
  description:
    "Portfolio of Muhammad Afzal, a Full Stack Web Developer and AI Engineer specializing in React, Next.js, and Machine Learning solutions.",
  keywords: "full stack developer, AI developer, web development, machine learning, React, Next.js",
  openGraph: {
    title: "Muhammad Afzal | Full Stack & AI Developer",
    description:
      "Portfolio of Muhammad Afzal, a Full Stack Web Developer and AI Engineer specializing in React, Next.js, and Machine Learning solutions.",
    url: "https://faizi-portfolio-website.vercel.app/",
    siteName: "Muhammad Afzal | Full Stack & AI Developer",
    images: [
      {
        url: "/faizi.jpg",
        width: 1200,
        height: 630,
        alt: "Muhammad Afzal",
      },
    ],
    locale: "en_US",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className} suppressHydrationWarning={true}>{children}</body>
    </html>
  )
}
