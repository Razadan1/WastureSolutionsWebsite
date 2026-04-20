import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Activities } from "@/components/Activities";
import { Impact } from "@/components/Impact";
import { Gallery } from "@/components/Gallery";
import { Newsletter } from "@/components/Newsletter";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-[100dvh] flex flex-col w-full bg-background text-foreground">
      <Navbar />
      <main className="flex-1 w-full">
        <Hero />
        <About />
        <Services />
        <Activities />
        <Impact />
        <Gallery />
        <Newsletter />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
