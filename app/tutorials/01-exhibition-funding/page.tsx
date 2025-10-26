import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TutorialHero } from "@/components/tutorial/tutorial-hero"
import { TutorialSteps } from "@/components/tutorial/tutorial-steps"
import { TutorialBreadcrumb } from "@/components/tutorials/tutorial-breadcrumb"

export const metadata = {
  title: "Tutorial: Pameran Seni dengan Funding Donor - Starter Kit Pembukuan Kolektif",
  description: "Pelajari cara mengelola funding 10,000 EUR untuk pameran seni dengan sistem pembukuan transparan menggunakan Beancount.",
}

export default function ExhibitionFundingTutorial() {
  return (
    <div className="min-h-screen">
      <Header />
      <TutorialBreadcrumb 
        tutorialNumber="01" 
        tutorialTitle="Pameran Seni dengan Funding Donor" 
      />
      <main>
        <TutorialHero />
        <TutorialSteps />
      </main>
      <Footer />
    </div>
  )
}
