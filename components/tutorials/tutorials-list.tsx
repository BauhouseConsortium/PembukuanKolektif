import Link from "next/link"
import { ArrowRight, Clock, BookOpen, Award } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const tutorials = [
  {
    id: "01-exhibition-funding",
    title: "Pameran Seni dengan Funding Donor",
    description:
      "Studi kasus kolektif yang menerima funding 10,000 EUR untuk pameran. Belajar setup dual bank account (CIMB + Bank Jago), distribusi budget ke sub-akun, dan laporan ke donor.",
    level: "Beginner",
    duration: "30 menit",
    topics: ["Bank Setup", "Sub-Account", "Multi-Currency", "Donor Reporting"],
    slug: "/tutorials/01-exhibition-funding",
  },
  {
    id: "02-workshop-revenue",
    title: "Workshop Kolektif & Pembagian Revenue",
    description:
      "Kolektif mengadakan workshop berbayar. Pelajari cara mencatat pendapatan, biaya operasional, dan pembagian revenue antar anggota secara transparan dengan equity accounting.",
    level: "Beginner",
    duration: "25 menit",
    topics: ["Revenue Sharing", "Operational Costs", "Equity Distribution"],
    slug: "/tutorials/02-workshop-revenue",
    comingSoon: true,
  },
  {
    id: "03-merchandise-inventory",
    title: "Merchandise & Inventory Management",
    description:
      "Kolektif menjual merchandise (t-shirt, tote bag, zine). Belajar tracking inventory, cost of goods sold (COGS), dan profit margin dengan accounting yang proper.",
    level: "Intermediate",
    duration: "40 menit",
    topics: ["Inventory", "COGS", "Profit Margin", "Stock Management"],
    slug: "/tutorials/03-merchandise-inventory",
    comingSoon: true,
  },
  {
    id: "04-monthly-subscription",
    title: "Membership & Recurring Revenue",
    description:
      "Setup sistem membership dengan iuran bulanan. Pelajari recurring revenue accounting, tracking member contributions, dan automated reconciliation.",
    level: "Intermediate",
    duration: "35 menit",
    topics: ["Recurring Revenue", "Member Tracking", "Automated Recording"],
    slug: "/tutorials/04-monthly-subscription",
    comingSoon: true,
  },
  {
    id: "05-grant-reporting",
    title: "Multi-Grant Management & Reporting",
    description:
      "Kolektif mengelola beberapa grant dari berbagai donor dengan requirement reporting yang berbeda. Advanced techniques untuk fund accounting dan compliance.",
    level: "Advanced",
    duration: "60 menit",
    topics: ["Fund Accounting", "Multi-Grant", "Compliance", "Advanced Reporting"],
    slug: "/tutorials/05-grant-reporting",
    comingSoon: true,
  },
]

const levelColors = {
  Beginner: "bg-accent text-foreground border-foreground",
  Intermediate: "bg-primary text-primary-foreground border-primary-foreground",
  Advanced: "bg-secondary text-secondary-foreground border-secondary-foreground",
}

export function TutorialsList() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Filter/Category Section */}
        <div className="mb-12 border-4 border-foreground bg-muted p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold uppercase tracking-tight text-foreground">Semua Tutorial</h2>
              <p className="mt-2 text-sm text-muted-foreground">Pilih berdasarkan level kemampuan kamu</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge className="border-2 border-foreground bg-background px-4 py-2 text-sm font-bold uppercase tracking-wide text-foreground hover:bg-foreground hover:text-background">
                Semua
              </Badge>
              <Badge
                variant="outline"
                className="border-2 border-foreground bg-transparent px-4 py-2 text-sm uppercase tracking-wide text-foreground hover:bg-accent"
              >
                Beginner
              </Badge>
              <Badge
                variant="outline"
                className="border-2 border-foreground bg-transparent px-4 py-2 text-sm uppercase tracking-wide text-foreground hover:bg-primary hover:text-primary-foreground"
              >
                Intermediate
              </Badge>
              <Badge
                variant="outline"
                className="border-2 border-foreground bg-transparent px-4 py-2 text-sm uppercase tracking-wide text-foreground hover:bg-secondary hover:text-secondary-foreground"
              >
                Advanced
              </Badge>
            </div>
          </div>
        </div>

        {/* Tutorials Grid */}
        <div className="space-y-6">
          {tutorials.map((tutorial, index) => (
            <div
              key={tutorial.id}
              className={`group relative border-4 border-foreground bg-background transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] ${
                tutorial.comingSoon ? "opacity-75" : ""
              }`}
            >
              <div className="grid gap-6 p-6 lg:grid-cols-[1fr_auto]">
                {/* Content */}
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex flex-wrap items-start gap-3">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center border-4 border-foreground bg-accent">
                      <span className="font-mono text-xl font-bold text-foreground">{String(index + 1).padStart(2, "0")}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="mb-2 flex flex-wrap items-center gap-2">
                        <Badge
                          className={`border-2 px-3 py-1 text-xs font-bold uppercase tracking-wide ${
                            levelColors[tutorial.level as keyof typeof levelColors]
                          }`}
                        >
                          {tutorial.level}
                        </Badge>
                        {tutorial.comingSoon && (
                          <Badge className="border-2 border-foreground bg-muted px-3 py-1 text-xs font-bold uppercase tracking-wide text-foreground">
                            Coming Soon
                          </Badge>
                        )}
                      </div>
                      <h3 className="text-xl font-bold uppercase tracking-tight text-foreground sm:text-2xl">
                        {tutorial.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="leading-relaxed text-foreground">{tutorial.description}</p>

                  {/* Topics */}
                  <div className="flex flex-wrap gap-2">
                    {tutorial.topics.map((topic) => (
                      <span
                        key={topic}
                        className="border-2 border-foreground bg-background px-3 py-1 font-mono text-xs uppercase tracking-wide text-foreground"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{tutorial.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4" />
                      <span>Dengan Diagram & Code</span>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="flex items-center lg:items-start">
                  {tutorial.comingSoon ? (
                    <div className="border-4 border-foreground bg-muted px-6 py-4 text-center">
                      <p className="font-mono text-sm font-bold uppercase text-foreground">Segera Hadir</p>
                    </div>
                  ) : (
                    <Link
                      href={tutorial.slug}
                      className="inline-flex items-center gap-2 border-4 border-foreground bg-primary px-6 py-4 font-bold uppercase tracking-tight text-primary-foreground transition-all hover:bg-primary/90"
                    >
                      Mulai Tutorial
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  )}
                </div>
              </div>

              {/* Progress Indicator (for future enhancement) */}
              {!tutorial.comingSoon && (
                <div className="border-t-4 border-foreground bg-accent/20 px-6 py-3">
                  <p className="text-xs uppercase tracking-wide text-foreground">
                    💡 Tip: Siapkan laptop dan coba langsung sambil belajar
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 border-4 border-foreground bg-primary p-8 sm:p-12">
          <div className="text-center">
            <Award className="mx-auto mb-6 h-16 w-16 text-primary-foreground" />
            <h2 className="text-balance text-2xl font-bold uppercase leading-tight tracking-tight text-primary-foreground sm:text-4xl">
              Butuh Tutorial Khusus?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-primary-foreground">
              Punya studi kasus unik atau kebutuhan spesifik? Kami bisa bantu buat tutorial custom untuk kolektif kamu.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 border-4 border-primary-foreground bg-background px-8 py-4 font-bold uppercase tracking-tight text-foreground transition-all hover:translate-x-1 hover:translate-y-1"
              >
                Hubungi Kami
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="https://github.com"
                className="inline-flex items-center justify-center gap-2 border-4 border-primary-foreground bg-primary-foreground px-8 py-4 font-bold uppercase tracking-tight text-primary transition-all hover:bg-primary-foreground/90"
              >
                Contribute di GitHub
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
