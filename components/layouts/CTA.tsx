import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Cta() {
  return (
    <section className='relative py-20 md:py-28 text-center px-6 overflow-hidden'>
      <div
        className='absolute inset-0 opacity-40'
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #1E1A14, #1E1A14 14px, #2B241C 14px, #2B241C 28px)",
        }}
      />
      <div className='relative max-w-2xl mx-auto'>
        <h2 className='text-4xl md:text-5xl mb-5 font-display font-extrabold'>
          READY TO <span className='heat-text'>FORGE</span> SOMETHING?
        </h2>
        <p className='mb-8 text-steel-300'>
          Tell us about your business. We&apos;ll tell you exactly what kind of
          site it needs — no upsell, no runaround.
        </p>
        <Button size='lg'>
          Get a free quote <ArrowRight className='ml-2' size={18} />
        </Button>
      </div>
    </section>
  );
}
