const PROCESS = [
  {
    stage: "HEAT",
    title: "Consult",
    desc: "We learn your business, your customers, and what the site actually needs to do.",
  },
  {
    stage: "SHAPE",
    title: "Design",
    desc: "A layout and look built around your trade, not a generic agency template.",
  },
  {
    stage: "STRIKE",
    title: "Build",
    desc: "Development on Next.js or WordPress, whichever fits how you'll run the site.",
  },
  {
    stage: "TEMPER",
    title: "Maintain",
    desc: "Launch, then ongoing care so the site holds up under real use.",
  },
];

export default function Process() {
  return (
    <section id='process' className='py-20 md:py-28 bg-plate-50 text-iron-950'>
      <div className='max-w-6xl mx-auto px-6'>
        <h2 className='text-3xl md:text-4xl mb-12 font-display font-bold'>
          HOW A SITE GETS FORGED
        </h2>

        <div className='grid md:grid-cols-4 gap-6'>
          {PROCESS.map((p, i) => (
            <div key={p.stage} className='relative'>
              <div className='text-xs tracking-widest mb-3 font-mono text-ember-500'>
                {String(i + 1).padStart(2, "0")} / {p.stage}
              </div>
              <h3 className='text-lg font-semibold mb-2'>{p.title}</h3>
              <p className='text-sm text-iron-700'>{p.desc}</p>
              {i < PROCESS.length - 1 && (
                <div className='hidden md:block absolute top-1 right-[-14px] w-6 h-px bg-steel-500' />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
