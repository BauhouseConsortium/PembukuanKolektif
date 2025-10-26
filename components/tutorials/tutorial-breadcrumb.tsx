import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

interface TutorialBreadcrumbProps {
  tutorialTitle: string
  tutorialNumber: string
}

export function TutorialBreadcrumb({ tutorialTitle, tutorialNumber }: TutorialBreadcrumbProps) {
  return (
    <div className="border-b-4 border-foreground bg-muted">
      <div className="container mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-sm">
          <Link
            href="/"
            className="flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground"
          >
            <Home className="h-4 w-4" />
            <span>Home</span>
          </Link>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
          <Link
            href="/tutorials"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Tutorials
          </Link>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
          <span className="font-bold text-foreground">
            {tutorialNumber} · {tutorialTitle}
          </span>
        </nav>
      </div>
    </div>
  )
}
