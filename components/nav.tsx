"use client";

import { useEffect, useState } from "react";
import { Flame, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const LINKS = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#industries", label: "Who we build for" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors backdrop-blur-sm ${
        scrolled ? "bg-iron-950/90 border-iron-700" : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <Flame size={22} className="text-ember-500" />
          <span className="text-xl tracking-wide font-display font-bold">
            FREEDOM FOUNDRY
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm text-steel-300">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button>Get a quote</Button>
        </div>

        <button className="md:hidden text-plate-50" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4 text-sm text-steel-300">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <Button className="w-fit">Get a quote</Button>
        </div>
      )}
    </header>
  );
}
