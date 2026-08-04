const TRADES = [
  "BARBERS",
  "ASBESTOS ABATEMENT",
  "ROOFERS",
  "DENTISTS",
  "ELECTRICIANS",
  "LANDSCAPERS",
  "AUTO SHOPS",
  "HVAC",
  "PLUMBERS",
  "LAW FIRMS",
  "RESTAURANTS",
  "PEST CONTROL",
];

export function TradeTicker() {
  return (
    <div id="industries" className="border-y border-iron-700 bg-iron-900 overflow-hidden py-4">
      <div className="flex whitespace-nowrap animate-ticker-scroll">
        {[...TRADES, ...TRADES].map((t, i) => (
          <span
            key={i}
            className="mx-6 text-sm tracking-widest flex items-center gap-6 font-mono text-steel-500"
          >
            {t}
            <span className="text-ember-500">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
