import { Flame } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-iron-700 px-6 py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-steel-500">
        <div className="flex items-center gap-2">
          <Flame size={16} className="text-ember-500" />
          <span className="font-display font-bold">FREEDOM FOUNDRY</span>
        </div>
        <span className="font-mono">
          © {new Date().getFullYear()} — FORGE YOUR FREEDOM
        </span>
      </div>
    </footer>
  );
}
