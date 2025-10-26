import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, Space_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-sans" })
const spaceMono = Space_Mono({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  title: "Starter Kit Pembukuan Kolektif - Pembukuan Transparan untuk Kolektif",
  description: "Plain text accounting untuk kolektif. Setup cepat, open source, dan mudah digunakan.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <body className={`${spaceGrotesk.variable} ${spaceMono.variable} font-sans antialiased`}>
        <div className="sticky top-0 z-50 border-b-4 border-foreground bg-accent px-4 py-2 text-center">
          <p className="font-mono text-sm font-bold uppercase tracking-wide text-foreground sm:text-base">
            🚧 Dalam Pengembangan / Under Construction 🚧
          </p>
        </div>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
