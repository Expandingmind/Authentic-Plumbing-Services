import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LeadForm from "@/components/LeadForm";
import ServicesGrid from "@/components/ServicesGrid";
import About from "@/components/About";
import Reviews from "@/components/Reviews";
import CommercialResidential from "@/components/CommercialResidential";
import Gallery from "@/components/Gallery";
import Locations from "@/components/Locations";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <div id="contact">
        <LeadForm />
      </div>
      <ServicesGrid />
      <About />
      <Reviews />
      <CommercialResidential />
      <Gallery />
      <Locations />
      <CTA />
      <Footer />
    </main>
  );
}
