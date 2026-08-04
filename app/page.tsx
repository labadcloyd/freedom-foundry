import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { TradeTicker } from "@/components/trade-ticker";
import { Services } from "@/components/services";
import { Process } from "@/components/process";
import { Cta } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <TradeTicker />
      <Services />
      <Process />
      <Cta />
      <Footer />
    </main>
  );
}
