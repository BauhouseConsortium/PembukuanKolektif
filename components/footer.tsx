import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="text-sm text-muted-foreground">© 2025 Starter Kit Pembukuan Kolektif</p>
            <p className="text-xs text-muted-foreground/70 mt-1">by Bauhouse Concorxium</p>
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="https://github.com/your-org/beancount-starter-kit"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              GitHub
            </Link>
            <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Docs
            </Link>
            <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Community
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
