"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <header className="sticky top-0 z-50 w-full border-b-4 border-foreground bg-secondary">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-12">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-secondary-foreground">BC.</span>
          </Link>
          <nav className="hidden items-center gap-8 md:flex">
            <Link
              href="/"
              className={`border-b-2 text-sm ${
                isActive("/")
                  ? "border-primary bg-primary px-2 py-1 text-primary-foreground"
                  : "border-transparent text-secondary-foreground hover:border-secondary-foreground"
              }`}
            >
              Beranda
            </Link>
            <Link
              href="/install"
              className={`border-b-2 text-sm ${
                isActive("/install")
                  ? "border-primary bg-primary px-2 py-1 text-primary-foreground"
                  : "border-transparent text-secondary-foreground hover:border-secondary-foreground"
              }`}
            >
              Install
            </Link>
            <Link
              href="/tutorials"
              className={`border-b-2 text-sm ${
                isActive("/tutorials") || pathname?.startsWith("/tutorials/")
                  ? "border-primary bg-primary px-2 py-1 text-primary-foreground"
                  : "border-transparent text-secondary-foreground hover:border-secondary-foreground"
              }`}
            >
              Tutorials
            </Link>
            <Link
              href="/about"
              className={`border-b-2 text-sm ${
                isActive("/about")
                  ? "border-primary bg-primary px-2 py-1 text-primary-foreground"
                  : "border-transparent text-secondary-foreground hover:border-secondary-foreground"
              }`}
            >
              About
            </Link>
          </nav>
        </div>
        <div className="hidden items-center gap-2 md:flex">
          <input
            type="text"
            placeholder="Search"
            className="border-2 border-foreground bg-background px-3 py-1 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
          />
          <Button size="sm" className="border-2 border-foreground bg-background text-foreground hover:bg-muted">
            Search
          </Button>
        </div>
        <button
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`h-0.5 w-6 bg-secondary-foreground transition-all ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span className={`h-0.5 w-6 bg-secondary-foreground transition-all ${mobileMenuOpen ? "opacity-0" : ""}`} />
          <span
            className={`h-0.5 w-6 bg-secondary-foreground transition-all ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>
      {mobileMenuOpen && (
        <div className="border-t-4 border-foreground bg-secondary md:hidden">
          <nav className="container mx-auto flex flex-col px-4 py-4">
            <Link
              href="/"
              className={`border-b-2 border-foreground py-3 text-sm ${
                isActive("/") ? "font-bold text-primary" : "text-secondary-foreground"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Beranda
            </Link>
            <Link
              href="/install"
              className={`border-b-2 border-foreground py-3 text-sm ${
                isActive("/install") ? "font-bold text-primary" : "text-secondary-foreground"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Install
            </Link>
            <Link
              href="/tutorials"
              className={`border-b-2 border-foreground py-3 text-sm ${
                isActive("/tutorials") || pathname?.startsWith("/tutorials/") ? "font-bold text-primary" : "text-secondary-foreground"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Tutorials
            </Link>
            <Link
              href="/about"
              className={`py-3 text-sm ${
                isActive("/about") ? "font-bold text-primary" : "text-secondary-foreground"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
