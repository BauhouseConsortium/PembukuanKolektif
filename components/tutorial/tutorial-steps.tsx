"use client"

import { useEffect } from "react"
import { Check, Users, Shield, Eye, Target, TrendingUp, FileText } from "lucide-react"

export function TutorialSteps() {
  useEffect(() => {
    // Load Mermaid.js
    const script = document.createElement("script")
    script.src = "https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js"
    script.async = true
    script.onload = () => {
      // @ts-ignore
      if (window.mermaid) {
        // @ts-ignore
        window.mermaid.initialize({ startOnLoad: true, theme: "base" })
        // @ts-ignore
        window.mermaid.run()
      }
    }
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Step 0 - Persiapan */}
        <div className="mb-16 border-4 border-foreground">
          <div className="border-b-4 border-foreground bg-accent p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center border-2 border-foreground">
                <span className="text-2xl font-bold text-foreground">0</span>
              </div>
              <h2 className="text-2xl font-bold uppercase tracking-tight text-foreground">
                Persiapan: Setup Rekening Bank
              </h2>
            </div>
          </div>
          <div className="space-y-8 bg-background p-6">
            {/* Concept Section */}
            <div className="border-4 border-foreground bg-primary p-8">
              <h3 className="mb-6 text-2xl font-bold uppercase tracking-tight text-primary-foreground">
                Konsep: Apa yang Mau Kita Lakukan & Kenapa?
              </h3>
              <div className="space-y-6">
                <div className="border-4 border-primary-foreground bg-background p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <Target className="h-8 w-8 text-foreground" />
                    <h4 className="text-lg font-bold uppercase text-foreground">Tujuan Utama</h4>
                  </div>
                  <p className="mb-4 text-sm leading-relaxed text-foreground">
                    Kita ingin membuat sistem pembukuan yang <strong>transparan</strong>, <strong>mudah diaudit</strong>
                    , dan <strong>bisa diakses oleh semua anggota tim</strong> secara real-time. Bukan hanya untuk
                    keperluan internal, tapi juga untuk membangun kepercayaan dengan donor dan stakeholder.
                  </p>
                  <p className="text-sm leading-relaxed text-foreground">
                    Dengan sistem ini, setiap orang tahu kemana uang pergi, siapa yang bertanggung jawab, dan bagaimana
                    dana digunakan - tanpa perlu menunggu laporan bulanan atau spreadsheet yang ribet.
                  </p>
                </div>

                <div className="grid gap-6 lg:grid-cols-3">
                  <div className="border-4 border-primary-foreground bg-background p-6">
                    <div className="mb-4 flex items-center gap-3">
                      <TrendingUp className="h-8 w-8 text-foreground" />
                      <h4 className="text-base font-bold uppercase text-foreground">Kenapa 2 Bank?</h4>
                    </div>
                    <ul className="space-y-2 text-sm leading-relaxed text-foreground">
                      <li>
                        <strong>CIMB Niaga:</strong> Untuk menerima dana dari donor/funding (rekening utama yang formal)
                      </li>
                      <li>
                        <strong>Bank Jago:</strong> Untuk operasional dengan fitur sub-akun yang bisa di-share ke tim
                      </li>
                      <li>Pemisahan ini memudahkan tracking dan audit</li>
                    </ul>
                  </div>

                  <div className="border-4 border-primary-foreground bg-background p-6">
                    <div className="mb-4 flex items-center gap-3">
                      <Users className="h-8 w-8 text-foreground" />
                      <h4 className="text-base font-bold uppercase text-foreground">Kenapa Sub-Akun?</h4>
                    </div>
                    <ul className="space-y-2 text-sm leading-relaxed text-foreground">
                      <li>Setiap PIC punya akses ke budget mereka sendiri</li>
                      <li>Tidak perlu minta transfer ke bendahara terus-menerus</li>
                      <li>Transparansi otomatis - semua transaksi tercatat real-time</li>
                      <li>Mengurangi bottleneck dan mempercepat kerja</li>
                    </ul>
                  </div>

                  <div className="border-4 border-primary-foreground bg-background p-6">
                    <div className="mb-4 flex items-center gap-3">
                      <FileText className="h-8 w-8 text-foreground" />
                      <h4 className="text-base font-bold uppercase text-foreground">Kenapa Beancount?</h4>
                    </div>
                    <ul className="space-y-2 text-sm leading-relaxed text-foreground">
                      <li>Double-entry bookkeeping yang akurat</li>
                      <li>Plain text = mudah di-backup dan version control</li>
                      <li>Struktur akun Bank Jago langsung mapping ke Beancount</li>
                      <li>Generate laporan profesional untuk donor</li>
                    </ul>
                  </div>
                </div>

                <div className="border-4 border-primary-foreground bg-accent p-6">
                  <h4 className="mb-3 text-lg font-bold uppercase text-foreground">Alur Kerja yang Kita Bangun:</h4>
                  <ol className="space-y-2 text-sm leading-relaxed text-foreground">
                    <li>
                      <strong>1. Dana masuk</strong> ke CIMB Niaga dari donor
                    </li>
                    <li>
                      <strong>2. Transfer</strong> ke Bank Jago Main Account
                    </li>
                    <li>
                      <strong>3. Distribusi</strong> ke sub-akun sesuai budget (Venue, Materials, Marketing, Artist)
                    </li>
                    <li>
                      <strong>4. Setiap PIC</strong> kelola budget mereka sendiri dari sub-akun
                    </li>
                    <li>
                      <strong>5. Semua transaksi</strong> dicatat di Beancount untuk laporan
                    </li>
                    <li>
                      <strong>6. Generate laporan</strong> profesional untuk donor dan audit
                    </li>
                  </ol>
                </div>
              </div>
            </div>

            {/* Bank Setup Section */}
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <h3 className="mb-4 text-xl font-bold uppercase tracking-tight text-foreground">
                  1. Buat Rekening CIMB Niaga
                </h3>
                <div className="border-4 border-foreground bg-muted p-6">
                  <ul className="space-y-3 text-sm leading-relaxed text-foreground">
                    <li className="flex items-start gap-3">
                      <Check className="mt-1 h-5 w-5 flex-shrink-0" />
                      <span>Kunjungi cabang CIMB Niaga atau daftar online via aplikasi OCTO Mobile</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="mt-1 h-5 w-5 flex-shrink-0" />
                      <span>Pilih rekening tabungan untuk organisasi/kolektif</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="mt-1 h-5 w-5 flex-shrink-0" />
                      <span>Siapkan dokumen: KTP, NPWP, dan dokumen legalitas kolektif</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="mt-1 h-5 w-5 flex-shrink-0" />
                      <span>Rekening ini untuk menerima dana dari donor/funding</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="mb-4 text-xl font-bold uppercase tracking-tight text-foreground">
                  2. Buat Rekening Bank Jago
                </h3>
                <div className="border-4 border-foreground bg-muted p-6">
                  <ul className="space-y-3 text-sm leading-relaxed text-foreground">
                    <li className="flex items-start gap-3">
                      <Check className="mt-1 h-5 w-5 flex-shrink-0" />
                      <span>Download aplikasi Jago dari Play Store/App Store</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="mt-1 h-5 w-5 flex-shrink-0" />
                      <span>Daftar dengan KTP dan verifikasi video call</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="mt-1 h-5 w-5 flex-shrink-0" />
                      <span>Buat akun utama (Main Account) terlebih dahulu</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="mt-1 h-5 w-5 flex-shrink-0" />
                      <span>Rekening ini untuk distribusi dana ke tim</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Bank Jago Sub-Account Concept */}
            <div className="border-4 border-foreground bg-primary p-8">
              <h3 className="mb-6 text-2xl font-bold uppercase tracking-tight text-primary-foreground">
                Konsep Sub-Akun Bank Jago
              </h3>
              <div className="grid gap-6 lg:grid-cols-3">
                <div className="border-4 border-primary-foreground bg-background p-6">
                  <Users className="mb-4 h-8 w-8 text-foreground" />
                  <h4 className="mb-3 text-lg font-bold uppercase text-foreground">Seperti Group WhatsApp</h4>
                  <p className="text-sm leading-relaxed text-foreground">
                    Sub-akun Bank Jago bisa di-share ke anggota tim. Seperti group WhatsApp, tapi untuk rekening bank.
                    Setiap PIC bisa akses dan kelola budget mereka sendiri.
                  </p>
                </div>

                <div className="border-4 border-primary-foreground bg-background p-6">
                  <Eye className="mb-4 h-8 w-8 text-foreground" />
                  <h4 className="mb-3 text-lg font-bold uppercase text-foreground">Transparansi Real-Time</h4>
                  <p className="text-sm leading-relaxed text-foreground">
                    Semua anggota tim yang punya akses bisa lihat saldo dan transaksi secara real-time. Tidak perlu
                    laporan manual atau spreadsheet yang ribet.
                  </p>
                </div>

                <div className="border-4 border-primary-foreground bg-background p-6">
                  <Shield className="mb-4 h-8 w-8 text-foreground" />
                  <h4 className="mb-3 text-lg font-bold uppercase text-foreground">Mudah Audit</h4>
                  <p className="text-sm leading-relaxed text-foreground">
                    Setiap transaksi tercatat otomatis dengan timestamp. Tim internal dan auditor bisa langsung cek.
                    Donor menerima laporan yang akurat dan lengkap.
                  </p>
                </div>
              </div>
            </div>

            {/* Visual Comparison */}
            <div>
              <h3 className="mb-4 text-xl font-bold uppercase tracking-tight text-foreground">
                Perbandingan: Tradisional vs Bank Jago Sub-Akun
              </h3>
              <div className="grid gap-6 lg:grid-cols-2">
                <div className="border-4 border-foreground bg-secondary p-6">
                  <h4 className="mb-4 text-lg font-bold uppercase text-secondary-foreground">❌ Cara Tradisional</h4>
                  <ul className="space-y-2 text-sm text-secondary-foreground">
                    <li>• PIC minta uang ke bendahara</li>
                    <li>• Transfer manual satu per satu</li>
                    <li>• Simpan bukti transfer & nota</li>
                    <li>• Laporan manual via spreadsheet</li>
                    <li>• Reimburse yang ribet</li>
                    <li>• Audit butuh waktu lama</li>
                  </ul>
                </div>

                <div className="border-4 border-foreground bg-accent p-6">
                  <h4 className="mb-4 text-lg font-bold uppercase text-foreground">✓ Dengan Bank Jago Sub-Akun</h4>
                  <ul className="space-y-2 text-sm text-foreground">
                    <li>• PIC langsung akses sub-akun mereka</li>
                    <li>• Budget sudah dialokasikan di awal</li>
                    <li>• Semua transaksi tercatat otomatis</li>
                    <li>• Laporan real-time di aplikasi</li>
                    <li>• Tidak perlu reimburse</li>
                    <li>• Audit tinggal export data</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How to Create Sub-Accounts */}
            <div className="border-4 border-foreground bg-muted p-6">
              <h3 className="mb-4 text-xl font-bold uppercase tracking-tight text-foreground">
                Cara Membuat Sub-Akun di Bank Jago
              </h3>
              <ol className="space-y-3 text-sm leading-relaxed text-foreground">
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center border-2 border-foreground bg-background font-bold">
                    1
                  </span>
                  <span>Buka aplikasi Jago, pilih menu "Kantong" (Pocket)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center border-2 border-foreground bg-background font-bold">
                    2
                  </span>
                  <span>Tap tombol "+" untuk buat Kantong baru</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center border-2 border-foreground bg-background font-bold">
                    3
                  </span>
                  <span>Beri nama sesuai kebutuhan: "Venue", "Materials", "Marketing", "Artist"</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center border-2 border-foreground bg-background font-bold">
                    4
                  </span>
                  <span>Pilih "Shared Pocket" dan invite anggota tim via nomor HP</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center border-2 border-foreground bg-background font-bold">
                    5
                  </span>
                  <span>Set permission: "View Only" untuk auditor, "Full Access" untuk PIC</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center border-2 border-foreground bg-background font-bold">
                    6
                  </span>
                  <span>Transfer dana dari Main Account ke masing-masing Kantong sesuai budget</span>
                </li>
              </ol>
            </div>

            {/* Benefits Summary */}
            <div className="border-4 border-foreground bg-primary p-6">
              <h3 className="mb-4 text-xl font-bold uppercase tracking-tight text-primary-foreground">
                Keuntungan untuk Audit & Transparansi
              </h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div className="border-4 border-primary-foreground bg-background p-4">
                  <p className="mb-2 text-sm font-bold uppercase text-foreground">Untuk Tim Kolektif:</p>
                  <ul className="space-y-1 text-xs leading-relaxed text-foreground">
                    <li>✓ Tidak perlu spreadsheet manual</li>
                    <li>✓ Hemat waktu administrasi</li>
                    <li>✓ Mengurangi human error</li>
                    <li>✓ Budget control lebih baik</li>
                  </ul>
                </div>
                <div className="border-4 border-primary-foreground bg-background p-4">
                  <p className="mb-2 text-sm font-bold uppercase text-foreground">Untuk Laporan ke Donor:</p>
                  <ul className="space-y-1 text-xs leading-relaxed text-foreground">
                    <li>✓ Data akurat dan real-time</li>
                    <li>✓ Laporan lengkap dan terstruktur</li>
                    <li>✓ Audit trail tersedia</li>
                    <li>✓ Transparansi penuh dengan dokumentasi</li>
                  </ul>
                </div>
                <div className="border-4 border-primary-foreground bg-background p-4">
                  <p className="mb-2 text-sm font-bold uppercase text-foreground">Integrasi dengan Beancount:</p>
                  <ul className="space-y-1 text-xs leading-relaxed text-foreground">
                    <li>✓ Struktur sub-akun = struktur akun Beancount</li>
                    <li>✓ Transaksi bank langsung jadi entry Beancount</li>
                    <li>✓ Double-entry bookkeeping otomatis</li>
                    <li>✓ Laporan keuangan profesional dengan mudah</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 1 */}
        <div className="mb-16 border-4 border-foreground">
          <div className="border-b-4 border-foreground bg-primary p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center border-2 border-primary-foreground">
                <span className="text-2xl font-bold text-primary-foreground">1</span>
              </div>
              <h2 className="text-2xl font-bold uppercase tracking-tight text-primary-foreground">
                Setup File Beancount
              </h2>
            </div>
          </div>
          <div className="grid gap-8 bg-background p-6 lg:grid-cols-2">
            {/* Mindmap Section */}
            <div>
              <h3 className="mb-4 text-xl font-bold uppercase tracking-tight text-foreground">Struktur Akun</h3>
              <div className="mermaid border-4 border-foreground bg-muted p-6">
                {`graph LR
    A[Kolektif Accounting] --> B[Assets/Aset]
    A --> C[Income/Pendapatan]
    A --> D[Expenses/Biaya]
    A --> E[Equity/Ekuitas]
    
    B --> B1[Bank CIMB Niaga]
    B --> B2[Bank Jago Main]
    B --> B3[Bank Jago:Venue]
    B --> B4[Bank Jago:Materials]
    B --> B5[Bank Jago:Marketing]
    B --> B6[Bank Jago:Artist]
    
    C --> C1[Funding Donor]
    
    D --> D1[Venue/Tempat]
    D --> D2[Materials/Bahan]
    D --> D3[Marketing]
    D --> D4[Artist Fees]
    
    E --> E1[Opening Balances]
    
    style A fill:#ea5545,stroke:#000,stroke-width:4px,color:#000
    style B fill:#ffd700,stroke:#000,stroke-width:4px,color:#000
    style C fill:#ffd700,stroke:#000,stroke-width:4px,color:#000
    style D fill:#ffd700,stroke:#000,stroke-width:4px,color:#000
    style E fill:#ffd700,stroke:#000,stroke-width:4px,color:#000`}
              </div>
            </div>

            {/* Code Block Section */}
            <div>
              <h3 className="mb-4 text-xl font-bold uppercase tracking-tight text-foreground">
                Buat file: kolektif.beancount
              </h3>
              <div className="border-4 border-foreground bg-secondary p-4">
                <pre className="overflow-x-auto text-sm text-secondary-foreground">
                  {`; Kolektif Accounting
; File: kolektif.beancount

option "title" "Pembukuan Kolektif"
option "operating_currency" "EUR"
option "operating_currency" "IDR"

; === AKUN ASET ===
2024-01-01 open Assets:Bank:CIMBNiaga IDR
2024-01-01 open Assets:Bank:BankJago:Main IDR
2024-01-01 open Assets:Bank:BankJago:Venue IDR
2024-01-01 open Assets:Bank:BankJago:Materials IDR
2024-01-01 open Assets:Bank:BankJago:Marketing IDR
2024-01-01 open Assets:Bank:BankJago:Artist IDR

; === AKUN PENDAPATAN ===
2024-01-01 open Income:Funding:Donor EUR

; === AKUN BIAYA ===
2024-01-01 open Expenses:Exhibition:Venue IDR
2024-01-01 open Expenses:Exhibition:Materials IDR
2024-01-01 open Expenses:Exhibition:Marketing IDR
2024-01-01 open Expenses:Exhibition:Artist IDR

; === AKUN EKUITAS ===
2024-01-01 open Equity:Opening-Balances`}
                </pre>
              </div>
              <div className="mt-4 border-l-4 border-primary bg-muted p-4">
                <div className="flex items-start gap-3">
                  <Check className="mt-1 h-5 w-5 flex-shrink-0 text-foreground" />
                  <p className="text-sm leading-relaxed text-foreground">
                    Bank Jago memiliki fitur sub-akun yang bisa di-share ke PIC masing-masing untuk transparansi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="mb-16 border-4 border-foreground">
          <div className="border-b-4 border-foreground bg-primary p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center border-2 border-primary-foreground">
                <span className="text-2xl font-bold text-primary-foreground">2</span>
              </div>
              <h2 className="text-2xl font-bold uppercase tracking-tight text-primary-foreground">
                Terima Funding di CIMB Niaga
              </h2>
            </div>
          </div>
          <div className="grid gap-8 bg-background p-6 lg:grid-cols-2">
            <div>
              <h3 className="mb-4 text-xl font-bold uppercase tracking-tight text-foreground">Transaksi Penerimaan</h3>
              <div className="border-4 border-foreground bg-secondary p-4">
                <pre className="overflow-x-auto text-sm text-secondary-foreground">
                  {`; Penerimaan funding dari donor ke CIMB Niaga
2024-03-15 * "Funding Pameran Seni"
  Income:Funding:Donor            -10000.00 EUR
  Assets:Bank:CIMBNiaga        175000000.00 IDR
  
; Kurs: 1 EUR = 17,500 IDR
2024-03-15 price EUR 17500.00 IDR`}
                </pre>
              </div>
              <div className="mt-4 space-y-3">
                <div className="border-4 border-foreground bg-muted p-4">
                  <p className="mb-2 text-sm font-bold uppercase text-foreground">Penjelasan:</p>
                  <ul className="space-y-1 text-sm leading-relaxed text-foreground">
                    <li>Dana langsung masuk ke CIMB Niaga</li>
                    <li>10.000 EUR = 175 Juta IDR</li>
                    <li>Income negatif = uang masuk</li>
                    <li>Assets positif = bertambah</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-bold uppercase tracking-tight text-foreground">Alur Dana Masuk</h3>
              <div className="mermaid border-4 border-foreground bg-muted p-6">
                {`sequenceDiagram
    participant D as Donor
    participant C as CIMB Niaga
    participant I as Income Funding
    
    D->>C: Transfer 10000 EUR
    Note over C: Dana masuk 175 Juta IDR
    C->>I: Record Income
    Note over I: Income negatif 10000 EUR
    Note over C: Assets positif 175 Juta IDR`}
              </div>
              <div className="mt-4 border-4 border-foreground bg-accent p-4">
                <p className="text-sm font-bold uppercase text-foreground">Total di CIMB Niaga:</p>
                <p className="text-lg font-bold text-foreground">175.000.000 IDR</p>
              </div>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="mb-16 border-4 border-foreground">
          <div className="border-b-4 border-foreground bg-primary p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center border-2 border-primary-foreground">
                <span className="text-2xl font-bold text-primary-foreground">3</span>
              </div>
              <h2 className="text-2xl font-bold uppercase tracking-tight text-primary-foreground">
                Transfer ke Bank Jago Main
              </h2>
            </div>
          </div>
          <div className="grid gap-8 bg-background p-6 lg:grid-cols-2">
            <div>
              <h3 className="mb-4 text-xl font-bold uppercase tracking-tight text-foreground">Transfer Antar Bank</h3>
              <div className="border-4 border-foreground bg-secondary p-4">
                <pre className="overflow-x-auto text-sm text-secondary-foreground">
                  {`; Transfer dari CIMB Niaga ke Bank Jago Main
2024-03-16 * "Transfer ke Bank Jago"
  Assets:Bank:CIMBNiaga       -175000000.00 IDR
  Assets:Bank:BankJago:Main    175000000.00 IDR`}
                </pre>
              </div>
              <div className="mt-4 border-4 border-foreground bg-muted p-4">
                <p className="mb-2 text-sm font-bold uppercase text-foreground">Kenapa Transfer?</p>
                <ul className="space-y-1 text-sm leading-relaxed text-foreground">
                  <li>Bank Jago punya fitur sub-akun</li>
                  <li>Sub-akun bisa di-share ke PIC</li>
                  <li>Memudahkan transparansi</li>
                  <li>Setiap PIC kelola budget sendiri</li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-bold uppercase tracking-tight text-foreground">Alur Transfer</h3>
              <div className="mermaid border-4 border-foreground bg-muted p-6">
                {`graph LR
    A[CIMB Niaga<br/>175 Juta IDR] -->|Transfer| B[Bank Jago Main<br/>175 Juta IDR]
    
    B --> C[Siap untuk<br/>Distribusi]
    
    style A fill:#ea5545,stroke:#000,stroke-width:4px,color:#000
    style B fill:#ffd700,stroke:#000,stroke-width:4px,color:#000
    style C fill:#e5e5e5,stroke:#000,stroke-width:4px,color:#000`}
              </div>
              <div className="mt-4 border-4 border-foreground bg-accent p-4">
                <p className="text-sm font-bold uppercase text-foreground">Bank Jago Main:</p>
                <p className="text-lg font-bold text-foreground">175.000.000 IDR</p>
                <p className="mt-2 text-xs text-foreground">Siap didistribusikan ke sub-akun</p>
              </div>
            </div>
          </div>
        </div>

        {/* Step 4 */}
        <div className="mb-16 border-4 border-foreground">
          <div className="border-b-4 border-foreground bg-primary p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center border-2 border-primary-foreground">
                <span className="text-2xl font-bold text-primary-foreground">4</span>
              </div>
              <h2 className="text-2xl font-bold uppercase tracking-tight text-primary-foreground">
                Distribusi ke Sub-Akun
              </h2>
            </div>
          </div>
          <div className="grid gap-8 bg-background p-6 lg:grid-cols-2">
            <div>
              <h3 className="mb-4 text-xl font-bold uppercase tracking-tight text-foreground">Alokasi Budget</h3>
              <div className="border-4 border-foreground bg-secondary p-4">
                <pre className="overflow-x-auto text-sm text-secondary-foreground">
                  {`; Distribusi ke sub-akun Bank Jago
2024-03-17 * "Alokasi Budget Venue"
  Assets:Bank:BankJago:Main    -61250000.00 IDR
  Assets:Bank:BankJago:Venue    61250000.00 IDR

2024-03-17 * "Alokasi Budget Materials"
  Assets:Bank:BankJago:Main    -35000000.00 IDR
  Assets:Bank:BankJago:Materials 35000000.00 IDR

2024-03-17 * "Alokasi Budget Marketing"
  Assets:Bank:BankJago:Main    -26250000.00 IDR
  Assets:Bank:BankJago:Marketing 26250000.00 IDR

2024-03-17 * "Alokasi Budget Artist"
  Assets:Bank:BankJago:Main    -43750000.00 IDR
  Assets:Bank:BankJago:Artist   43750000.00 IDR`}
                </pre>
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-bold uppercase tracking-tight text-foreground">Struktur Sub-Akun</h3>
              <div className="mermaid border-4 border-foreground bg-muted p-6">
                {`graph TD
    A[Bank Jago Main<br/>175 Juta] --> B[Venue<br/>61.25 Juta]
    A --> C[Materials<br/>35 Juta]
    A --> D[Marketing<br/>26.25 Juta]
    A --> E[Artist<br/>43.75 Juta]
    A --> F[Sisa<br/>8.75 Juta]
    
    B --> B1[PIC: Venue Manager]
    C --> C1[PIC: Production]
    D --> D1[PIC: Marketing]
    E --> E1[PIC: Curator]
    
    style A fill:#ea5545,stroke:#000,stroke-width:4px,color:#000
    style B fill:#ffd700,stroke:#000,stroke-width:4px,color:#000
    style C fill:#ffd700,stroke:#000,stroke-width:4px,color:#000
    style D fill:#ffd700,stroke:#000,stroke-width:4px,color:#000
    style E fill:#ffd700,stroke:#000,stroke-width:4px,color:#000
    style F fill:#e5e5e5,stroke:#000,stroke-width:4px,color:#000`}
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between border-b-2 border-foreground p-2 text-sm">
                  <span className="text-foreground">Venue (35%)</span>
                  <span className="font-bold text-foreground">61.25 Juta</span>
                </div>
                <div className="flex justify-between border-b-2 border-foreground p-2 text-sm">
                  <span className="text-foreground">Artist (25%)</span>
                  <span className="font-bold text-foreground">43.75 Juta</span>
                </div>
                <div className="flex justify-between border-b-2 border-foreground p-2 text-sm">
                  <span className="text-foreground">Materials (20%)</span>
                  <span className="font-bold text-foreground">35 Juta</span>
                </div>
                <div className="flex justify-between border-b-2 border-foreground p-2 text-sm">
                  <span className="text-foreground">Marketing (15%)</span>
                  <span className="font-bold text-foreground">26.25 Juta</span>
                </div>
                <div className="flex justify-between border-4 border-foreground bg-accent p-2 text-sm">
                  <span className="font-bold text-foreground">Sisa (5%)</span>
                  <span className="font-bold text-foreground">8.75 Juta</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 5 */}
        <div className="mb-16 border-4 border-foreground">
          <div className="border-b-4 border-foreground bg-primary p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center border-2 border-primary-foreground">
                <span className="text-2xl font-bold text-primary-foreground">5</span>
              </div>
              <h2 className="text-2xl font-bold uppercase tracking-tight text-primary-foreground">Catat Pengeluaran</h2>
            </div>
          </div>
          {/* Diagram Section - Full Width */}
          <div className="space-y-8 bg-background p-6">
            {/* Diagram Section - Full Width */}
            <div>
              <h3 className="mb-4 text-xl font-bold uppercase tracking-tight text-foreground">Alur Pengeluaran</h3>
              <div className="mermaid border-4 border-foreground bg-muted p-6">
                {`sequenceDiagram
    participant M as Main Account
    participant V as Sub Venue
    participant Mat as Sub Materials
    participant Mar as Sub Marketing
    participant A as Sub Artist
    participant E as Expenses
    
    M->>V: 61.25 Juta
    M->>Mat: 35 Juta
    M->>Mar: 26.25 Juta
    M->>A: 43.75 Juta
    
    V->>E: Bayar Venue
    Mat->>E: Bayar Materials
    Mar->>E: Bayar Marketing
    A->>E: Bayar Artist
    
    Note over E: Total 166.25 Juta`}
              </div>
              <div className="mt-4 border-4 border-foreground bg-accent p-4">
                <p className="text-sm font-bold uppercase text-foreground">Total Pengeluaran:</p>
                <p className="text-lg font-bold text-foreground">166.250.000 IDR</p>
                <p className="mt-2 text-xs text-foreground">Sisa: 8.750.000 IDR di Main Account</p>
              </div>
            </div>

            {/* Transaction Code Section */}
            <div>
              <h3 className="mb-4 text-xl font-bold uppercase tracking-tight text-foreground">
                Transaksi dari Sub-Akun
              </h3>
              <div className="grid gap-6 lg:grid-cols-2">
                <div className="border-4 border-foreground bg-secondary p-4">
                  <pre className="overflow-x-auto text-sm text-secondary-foreground">
                    {`; Sewa venue dari sub-akun Venue
2024-03-20 * "Sewa Galeri Nasional"
  Expenses:Exhibition:Venue      61250000.00 IDR
  Assets:Bank:BankJago:Venue    -61250000.00 IDR

; Beli material dari sub-akun Materials
2024-03-25 * "Material & Instalasi"
  Expenses:Exhibition:Materials  35000000.00 IDR
  Assets:Bank:BankJago:Materials -35000000.00 IDR

; Biaya marketing dari sub-akun Marketing
2024-04-01 * "Promosi & Publikasi"
  Expenses:Exhibition:Marketing  26250000.00 IDR
  Assets:Bank:BankJago:Marketing -26250000.00 IDR

; Honorarium dari sub-akun Artist
2024-04-10 * "Fee 5 Seniman"
  Expenses:Exhibition:Artist     43750000.00 IDR
  Assets:Bank:BankJago:Artist   -43750000.00 IDR`}
                  </pre>
                </div>
                <div className="border-4 border-foreground bg-muted p-4">
                  <p className="mb-2 text-sm font-bold uppercase text-foreground">Keuntungan Sub-Akun:</p>
                  <ul className="space-y-1 text-sm leading-relaxed text-foreground">
                    <li>Setiap PIC kelola budget sendiri</li>
                    <li>Transparansi real-time</li>
                    <li>Tidak perlu reimburse</li>
                    <li>Audit lebih mudah</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 6 */}
        <div className="mb-16 border-4 border-foreground">
          <div className="border-b-4 border-foreground bg-primary p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center border-2 border-primary-foreground">
                <span className="text-2xl font-bold text-primary-foreground">6</span>
              </div>
              <h2 className="text-2xl font-bold uppercase tracking-tight text-primary-foreground">Generate Laporan</h2>
            </div>
          </div>
          <div className="grid gap-8 bg-background p-6 lg:grid-cols-2">
            <div>
              <h3 className="mb-4 text-xl font-bold uppercase tracking-tight text-foreground">Command Laporan</h3>
              <div className="space-y-4">
                <div className="border-4 border-foreground bg-secondary p-4">
                  <p className="mb-2 text-xs uppercase text-secondary-foreground">Balance Sheet (Neraca)</p>
                  <pre className="text-sm text-secondary-foreground">bean-report kolektif.beancount balances</pre>
                </div>
                <div className="border-4 border-foreground bg-secondary p-4">
                  <p className="mb-2 text-xs uppercase text-secondary-foreground">Income Statement (Laba Rugi)</p>
                  <pre className="text-sm text-secondary-foreground">bean-report kolektif.beancount income</pre>
                </div>
                <div className="border-4 border-foreground bg-secondary p-4">
                  <p className="mb-2 text-xs uppercase text-secondary-foreground">Journal (Buku Besar)</p>
                  <pre className="text-sm text-secondary-foreground">bean-report kolektif.beancount journal</pre>
                </div>
                <div className="border-4 border-foreground bg-secondary p-4">
                  <p className="mb-2 text-xs uppercase text-secondary-foreground">Web Interface</p>
                  <pre className="text-sm text-secondary-foreground">fava kolektif.beancount</pre>
                </div>
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-bold uppercase tracking-tight text-foreground">Alur Lengkap</h3>
              <div className="mermaid border-4 border-foreground bg-muted p-6">
                {`graph TD
    A[Donor<br/>10,000 EUR] --> B[CIMB Niaga<br/>175 Juta]
    B --> C[Bank Jago Main<br/>175 Juta]
    
    C --> D1[Sub: Venue<br/>61.25 Juta]
    C --> D2[Sub: Materials<br/>35 Juta]
    C --> D3[Sub: Marketing<br/>26.25 Juta]
    C --> D4[Sub: Artist<br/>43.75 Juta]
    C --> D5[Sisa<br/>8.75 Juta]
    
    D1 --> E[Total Expenses<br/>166.25 Juta]
    D2 --> E
    D3 --> E
    D4 --> E
    
    E --> F[Laporan ke Donor]
    
    style A fill:#ea5545,stroke:#000,stroke-width:4px,color:#000
    style B fill:#ffd700,stroke:#000,stroke-width:4px,color:#000
    style C fill:#ffd700,stroke:#000,stroke-width:4px,color:#000
    style F fill:#ea5545,stroke:#000,stroke-width:4px,color:#000`}
              </div>
              <div className="mt-4 border-4 border-foreground bg-accent p-4">
                <p className="mb-2 text-sm font-bold uppercase text-foreground">Ringkasan:</p>
                <ul className="space-y-1 text-xs leading-relaxed text-foreground">
                  <li>✓ Total Funding: 175 Juta IDR</li>
                  <li>✓ Total Pengeluaran: 166.25 Juta IDR</li>
                  <li>✓ Sisa Dana: 8.75 Juta IDR</li>
                  <li>✓ Transparansi: 100% via Sub-Akun</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Step 7 */}
        <div className="border-4 border-foreground">
          <div className="border-b-4 border-foreground bg-muted p-8">
            <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
              Tips & Best Practices
            </h2>
            <p className="mt-4 text-base uppercase tracking-wide text-muted-foreground">
              Panduan untuk pembukuan yang lebih baik
            </p>
          </div>
          <div className="grid gap-0 border-foreground bg-background sm:grid-cols-2 lg:grid-cols-3">
            <div className="border-b-4 border-foreground p-8 sm:border-r-4 lg:border-b-4">
              <h3 className="mb-3 text-lg font-bold uppercase tracking-tight text-foreground">Backup Rutin</h3>
              <p className="text-sm leading-relaxed text-foreground opacity-90">
                Simpan file .beancount di Git repository untuk version control dan backup otomatis
              </p>
            </div>
            <div className="border-b-4 border-foreground p-8 sm:border-b-4 lg:border-r-4">
              <h3 className="mb-3 text-lg font-bold uppercase tracking-tight text-foreground">Dokumentasi</h3>
              <p className="text-sm leading-relaxed text-foreground opacity-90">
                Tambahkan komentar detail di setiap transaksi untuk memudahkan audit
              </p>
            </div>
            <div className="border-b-4 border-foreground p-8 sm:border-r-4 lg:border-b-4">
              <h3 className="mb-3 text-lg font-bold uppercase tracking-tight text-foreground">Rekonsiliasi</h3>
              <p className="text-sm leading-relaxed text-foreground opacity-90">
                Cocokkan saldo Beancount dengan rekening bank setiap bulan
              </p>
            </div>
            <div className="border-foreground p-8 sm:border-r-4 lg:border-r-4">
              <h3 className="mb-3 text-lg font-bold uppercase tracking-tight text-foreground">Kurs Update</h3>
              <p className="text-sm leading-relaxed text-foreground opacity-90">
                Catat kurs EUR-IDR setiap transaksi untuk akurasi konversi
              </p>
            </div>
            <div className="border-foreground p-8 lg:border-r-4">
              <h3 className="mb-3 text-lg font-bold uppercase tracking-tight text-foreground">Kategori Jelas</h3>
              <p className="text-sm leading-relaxed text-foreground opacity-90">
                Gunakan nama akun yang deskriptif untuk memudahkan laporan
              </p>
            </div>
            <div className="border-foreground p-8">
              <h3 className="mb-3 text-lg font-bold uppercase tracking-tight text-foreground">Fava Interface</h3>
              <p className="text-sm leading-relaxed text-foreground opacity-90">
                Gunakan Fava untuk visualisasi dan eksplorasi data yang lebih mudah
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
