import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Stats from "@/components/stats";
import WhyChooseUs from "@/components/why-choose-us";
import Services from "@/components/services";
import Industries from "@/components/industries";
import Team from "@/components/team";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";
import TopClients from "@/components/topCompanies";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Stats />
        <WhyChooseUs />
        <Services />
        <Industries />
        <TopClients />
        <Team />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
