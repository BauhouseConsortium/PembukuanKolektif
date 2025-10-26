import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TutorialsHero } from "@/components/tutorials/tutorials-hero"
import { TutorialsList } from "@/components/tutorials/tutorials-list"

export const metadata = {
  title: "Tutorial - Starter Kit Pembukuan Kolektif",
  description: "Pelajari pembukuan transparan untuk kolektif dengan berbagai studi kasus dari pemula hingga advanced.",
}

export default function TutorialsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <TutorialsHero />
        <TutorialsList />
      </main>
      <Footer />
    </div>
  )
}
