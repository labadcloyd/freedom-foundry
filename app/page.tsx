import {
  CTA,
  Footer,
  Hero,
  Process,
  Services,
  TradeTicker,
} from "@/components/layouts";
import Nav from "@/components/layouts/Navbar";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <TradeTicker />
      <Services />
      <Process />
      <CTA />
      <Footer />
    </main>
  );
}
