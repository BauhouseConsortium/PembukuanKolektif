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
        <div className="sticky top-0 z-50 border-b-4 border-foreground bg-accent">
          <div className="container mx-auto flex items-center justify-between gap-4 px-4 py-3 sm:justify-center">
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="text-lg sm:text-xl">🚧</span>
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-foreground sm:text-sm">
                  Dalam Pengembangan
                </span>
                <span className="hidden font-mono text-xs font-bold text-foreground/60 sm:inline">•</span>
                <span className="font-mono text-xs uppercase tracking-wide text-foreground/80 sm:text-sm">
                  Under Construction
                </span>
              </div>
              <span className="text-lg sm:text-xl">🚧</span>
            </div>
            <div className="flex items-center gap-2 sm:hidden">
              <div className="h-2 w-2 animate-pulse rounded-full bg-primary"></div>
            </div>
          </div>
        </div>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
