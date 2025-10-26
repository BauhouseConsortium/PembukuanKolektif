export function TutorialHero() {
  return (
    <section className="relative border-b-4 border-foreground bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[2fr_1fr]">
          <div className="border-r-4 border-foreground py-16 pr-8 lg:py-24">
            <div className="mb-6">
              <span className="text-sm uppercase tracking-wider">Tutorial Step-by-Step</span>
            </div>

            <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Pembukuan Pameran dengan Beancount
            </h1>

            <div className="mt-8 space-y-4 text-lg leading-relaxed">
              <p>
                Pelajari cara mencatat dan melacak dana pameran seni menggunakan Beancount. Tutorial lengkap dengan
                diagram alur keuangan.
              </p>
            </div>
          </div>

          <div className="bg-primary py-16 px-8 lg:py-24">
            <h2 className="text-3xl font-bold text-primary-foreground">Studi Kasus</h2>
            <div className="mt-8 space-y-4 text-primary-foreground">
              <p className="leading-relaxed">Kolektif menerima funding 10.000 Euro untuk pameran seni</p>
              <ul className="space-y-2 leading-relaxed">
                <li>• 2 Rekening Bank</li>
                <li>• CIMB Niaga & Bank Jago</li>
                <li>• Tracking Transparan</li>
                <li>• Laporan ke Donor</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
