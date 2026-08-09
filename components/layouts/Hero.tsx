import { ArrowRight, Hammer } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className='max-w-6xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-24'>
      <div className='inline-flex items-center gap-2 text-xs tracking-widest mb-6 px-3 py-1 border border-iron-700 text-gold-300 font-mono'>
        <Hammer size={12} /> WEB DESIGN &amp; DEVELOPMENT SHOP
      </div>

      <h1 className='text-5xl md:text-7xl leading-[0.95] tracking-tight mb-6 font-display font-extrabold'>
        FORGE YOUR
        <br />
        <span className='heat-text'>FREEDOM</span>
      </h1>

      <p className='max-w-xl text-lg mb-10 text-steel-300'>
        Websites built and maintained for barbers, contractors, and every trade
        in between. No jargon, no bloated retainers — just a site that works and
        keeps working.
      </p>

      <div className='flex flex-wrap gap-4'>
        <Button size='lg'>
          Start your build <ArrowRight className='ml-2' size={18} />
        </Button>
        <Button size='lg' variant='outline'>
          See our work
        </Button>
      </div>
    </section>
  );
}
