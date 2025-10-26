export function About() {
  return (
    <section id="about" className="border-b-4 border-foreground bg-background py-16 sm:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 border-4 border-foreground bg-muted p-8">
            <h2 className="text-balance text-3xl font-bold uppercase tracking-tight text-foreground sm:text-5xl">
              Apa itu Beancount?
            </h2>
          </div>

          <div className="space-y-8">
            {/* Introduction */}
            <div className="border-4 border-foreground bg-background p-6">
              <p className="text-lg leading-relaxed text-foreground">
                Beancount adalah sistem <strong>double-entry accounting</strong> berbasis plain text. Semua data
                keuangan disimpan dalam file teks biasa yang mudah dibaca manusia dan komputer.
              </p>
            </div>

            {/* Double-Entry Bookkeeping Explanation */}
            <div className="border-4 border-foreground bg-primary p-6">
              <h3 className="mb-4 text-2xl font-bold uppercase tracking-tight text-primary-foreground">
                Apa itu Double-Entry Bookkeeping?
              </h3>
              <div className="space-y-4 text-primary-foreground">
                <p className="leading-relaxed">
                  Double-entry (pembukuan berpasangan) adalah metode akuntansi di mana setiap transaksi dicatat dalam
                  dua akun: <strong>debit</strong> dan <strong>kredit</strong>. Ini memastikan bahwa total aset selalu
                  sama dengan total liabilitas plus ekuitas.
                </p>
                <p className="leading-relaxed">Contoh: Ketika kolektif menerima dana 10 juta rupiah, kita catat:</p>
                <ul className="ml-6 list-disc space-y-2">
                  <li>
                    <strong>Debit:</strong> Akun Bank bertambah 10 juta (aset naik)
                  </li>
                  <li>
                    <strong>Kredit:</strong> Akun Pendapatan bertambah 10 juta (pendapatan naik)
                  </li>
                </ul>
                <p className="leading-relaxed">
                  Sistem ini mencegah kesalahan karena setiap transaksi harus "balance" - jumlah debit harus sama dengan
                  jumlah kredit.
                </p>
              </div>
            </div>

            {/* Benefits Grid */}
            <div className="grid gap-6 md:grid-cols-2">
              {/* Recording Benefits */}
              <div className="border-4 border-foreground bg-accent p-6">
                <h3 className="mb-4 text-xl font-bold uppercase tracking-tight text-foreground">
                  Manfaat untuk Pencatatan
                </h3>
                <ul className="space-y-3 text-foreground">
                  <li className="flex gap-2">
                    <span className="font-bold">•</span>
                    <span>
                      <strong>Akurasi Tinggi:</strong> Sistem double-entry otomatis mendeteksi kesalahan input
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold">•</span>
                    <span>
                      <strong>Audit Trail Lengkap:</strong> Setiap transaksi tercatat dengan detail waktu, jumlah, dan
                      akun terkait
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold">•</span>
                    <span>
                      <strong>Transparansi Penuh:</strong> File plain text bisa dibaca siapa saja, ditrack dengan Git
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold">•</span>
                    <span>
                      <strong>Tidak Ada Vendor Lock-in:</strong> Data kamu tetap milik kamu, tidak tergantung software
                      berbayar
                    </span>
                  </li>
                </ul>
              </div>

              {/* Managerial Benefits */}
              <div className="border-4 border-foreground bg-secondary p-6">
                <h3 className="mb-4 text-xl font-bold uppercase tracking-tight text-secondary-foreground">
                  Manfaat untuk Manajerial
                </h3>
                <ul className="space-y-3 text-secondary-foreground">
                  <li className="flex gap-2">
                    <span className="font-bold">•</span>
                    <span>
                      <strong>Laporan Real-time:</strong> Generate balance sheet, income statement kapan saja
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold">•</span>
                    <span>
                      <strong>Budget Tracking:</strong> Monitor pengeluaran vs budget untuk setiap kategori
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold">•</span>
                    <span>
                      <strong>Analisis Keuangan:</strong> Lihat tren pengeluaran, identifikasi area yang perlu efisiensi
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold">•</span>
                    <span>
                      <strong>Pengambilan Keputusan:</strong> Data akurat membantu keputusan strategis kolektif
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Why for Collectives */}
            <div className="border-4 border-foreground bg-muted p-6">
              <h3 className="mb-4 text-2xl font-bold uppercase tracking-tight text-foreground">
                Kenapa Cocok untuk Kolektif?
              </h3>
              <div className="space-y-4 leading-relaxed text-foreground">
                <p>
                  Sangat cocok untuk kolektif yang menginginkan transparansi penuh: setiap anggota bisa melihat, audit,
                  dan berkontribusi pada pembukuan. Data bisa ditrack dengan Git seperti kode, sehingga ada history
                  lengkap siapa mengubah apa dan kapan.
                </p>
                <p>
                  Starter kit ini membuat Beancount lebih mudah diakses dengan template siap pakai, contoh transaksi
                  real dari studi kasus kolektif, dan dokumentasi lengkap dalam Bahasa Indonesia. Kamu tidak perlu jadi
                  akuntan untuk mulai menggunakannya.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
