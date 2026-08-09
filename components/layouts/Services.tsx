import {
  LayoutTemplate,
  Globe,
  Wrench,
  Palette,
  LucideIcon,
} from "lucide-react";

type Service = {
  no: string;
  icon: LucideIcon;
  title: string;
  desc: string;
};

const SERVICES: Service[] = [
  {
    no: "01",
    icon: LayoutTemplate,
    title: "Landing Pages",
    desc: "Single-page sites built to convert — for launches, campaigns, or a business that just needs one solid page doing its job.",
  },
  {
    no: "02",
    icon: Globe,
    title: "WordPress Builds",
    desc: "Full WordPress sites you can actually update yourself, built on a theme that won't fall apart after the next plugin update.",
  },
  {
    no: "03",
    icon: Wrench,
    title: "Maintenance",
    desc: "Ongoing upkeep — backups, updates, uptime monitoring. We keep it running so you don't have to think about it.",
  },
  {
    no: "04",
    icon: Palette,
    title: "Design",
    desc: "Custom visual design for businesses who want to look like themselves online, not like a template with a new logo.",
  },
];

function Plate({ children }: { children: React.ReactNode }) {
  return (
    <div className='relative border border-iron-700 bg-iron-800 p-6'>
      <span className='absolute top-2 left-2 w-1.5 h-1.5 rounded-full bg-iron-700' />
      <span className='absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-iron-700' />
      <span className='absolute bottom-2 left-2 w-1.5 h-1.5 rounded-full bg-iron-700' />
      <span className='absolute bottom-2 right-2 w-1.5 h-1.5 rounded-full bg-iron-700' />
      {children}
    </div>
  );
}

export default function Services() {
  return (
    <section id='services' className='max-w-6xl mx-auto px-6 py-20 md:py-28'>
      <div className='flex items-baseline justify-between mb-12'>
        <h2 className='text-3xl md:text-4xl font-display font-bold'>
          WHAT WE BUILD
        </h2>
        <span className='text-xs tracking-widest hidden md:block font-mono text-steel-500'>
          SHOP CATALOG
        </span>
      </div>

      <div className='grid md:grid-cols-2 gap-4'>
        {SERVICES.map((s) => (
          <Plate key={s.no}>
            <div className='flex items-start justify-between mb-4'>
              <s.icon size={24} className='text-ember-500' />
              <span className='text-xs font-mono text-steel-500'>
                PLATE NO. {s.no}
              </span>
            </div>
            <h3 className='text-xl mb-2 font-semibold'>{s.title}</h3>
            <p className='text-sm text-steel-300'>{s.desc}</p>
          </Plate>
        ))}
      </div>
    </section>
  );
}
