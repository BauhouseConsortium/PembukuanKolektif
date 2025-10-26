export function TutorialsHero() {
  return (
    <section className="relative border-b-4 border-foreground bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[2fr_1fr]">
          <div className="border-r-4 border-foreground py-16 pr-8 lg:py-24">
            <div className="mb-6">
              <span className="text-sm uppercase tracking-wider">Belajar Step-by-Step</span>
            </div>

            <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Tutorial Pembukuan Kolektif
            </h1>

            <div className="mt-8 space-y-4 text-lg leading-relaxed">
              <p>
                Pelajari pembukuan transparan untuk kolektif dengan berbagai studi kasus real. Dari basic setup hingga
                multi-currency accounting dan grant reporting.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="border-4 border-foreground bg-accent p-4">
                <p className="text-3xl font-bold text-foreground">5+</p>
                <p className="mt-1 text-sm uppercase tracking-wide text-foreground">Tutorial</p>
              </div>
              <div className="border-4 border-foreground bg-primary p-4">
                <p className="text-3xl font-bold text-primary-foreground">3</p>
                <p className="mt-1 text-sm uppercase tracking-wide text-primary-foreground">Level</p>
              </div>
              <div className="border-4 border-foreground bg-secondary p-4">
                <p className="text-3xl font-bold text-secondary-foreground">100%</p>
                <p className="mt-1 text-sm uppercase tracking-wide text-secondary-foreground">Gratis</p>
              </div>
            </div>
          </div>

          <div className="bg-primary py-16 px-8 lg:py-24">
            <h2 className="text-3xl font-bold text-primary-foreground">Yang Akan Kamu Pelajari</h2>
            <div className="mt-8 space-y-4 text-primary-foreground">
              <ul className="space-y-3 leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 bg-primary-foreground" />
                  <span>Setup bank account & Beancount</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 bg-primary-foreground" />
                  <span>Recording transaksi harian</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 bg-primary-foreground" />
                  <span>Multi-currency accounting</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 bg-primary-foreground" />
                  <span>Budget planning & tracking</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 bg-primary-foreground" />
                  <span>Generate laporan untuk donor</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
