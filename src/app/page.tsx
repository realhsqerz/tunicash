import { Navbar } from "@/components/ui/Navbar";
import { Hero } from "@/components/ui/Hero";
import { Features } from "@/components/ui/Features";
import { HowItWorks } from "@/components/ui/HowItWorks";
import { Download } from "@/components/ui/Download";
import { Footer } from "@/components/ui/Footer";
import { IPhoneCanvas } from "@/components/three/IPhoneCanvas";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Fixed 3D background - animates with scroll */}
      <IPhoneCanvas className="hidden md:block" />

      {/* Mobile: show a static logo instead */}
      <div className="fixed inset-0 z-0 flex items-end justify-center pb-8 md:hidden">
        {/* subtle mobile backdrop */}
      </div>

      <main className="relative">
        <Hero />

        {/* Scroll offset to let the iPhone bob gently through the page */}
        <div className="h-[20vh] md:h-[12vh]" aria-hidden />

        <Features />
        <HowItWorks />
        <Download />
      </main>

      <Footer />
    </div>
  );
}
