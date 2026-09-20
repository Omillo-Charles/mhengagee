"use client";

import type { LucideIcon } from "lucide-react";
import { Camera, LayoutGrid, Settings } from "lucide-react";

type Section = "overview" | "portfolio" | "settings";

type NavItem = {
  id: Section;
  label: string;
  icon: LucideIcon;
};

const navItems: NavItem[] = [
  { id: "overview", label: "Overview", icon: LayoutGrid },
  { id: "portfolio", label: "Portfolio", icon: Camera },
];

type AdminSidebarProps = {
  activeSection: Section;
  onSectionChange: (section: Section) => void;
};

export function AdminSidebar({
  activeSection,
  onSectionChange,
}: AdminSidebarProps) {
  return (
    <aside className="flex flex-col justify-between border-b border-black/10 bg-[#f8f7f3] p-5 lg:border-b-0 lg:border-r">
      <div>
        <div className="mb-8">
          <p className="font-accent text-[10px] font-semibold uppercase text-primary">
            Admin
          </p>
          <h2 className="mt-2 font-display text-2xl font-bold text-navy">
            Mhengagee
          </h2>
        </div>

        <nav className="space-y-2">
          {navItems.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              type="button"
              onClick={() => onSectionChange(id)}
              className={`flex w-full items-center justify-between gap-3 rounded-[2px] px-3 py-3 text-left font-accent text-[10px] font-semibold uppercase transition-colors ${
                activeSection === id
                  ? "bg-navy text-white"
                  : "text-black/65 hover:bg-white hover:text-navy"
              }`}
            >
              <span className="flex items-center gap-3">
                <Icon size={15} />
                {label}
              </span>
            </button>
          ))}
        </nav>
      </div>

      <div className="mt-6 border-t border-black/10 pt-4">
        <button
          type="button"
          onClick={() => onSectionChange("settings")}
          className={`flex w-full items-center justify-between gap-3 rounded-[2px] px-3 py-3 text-left font-accent text-[10px] font-semibold uppercase transition-colors ${
            activeSection === "settings"
              ? "bg-navy text-white"
              : "text-black/65 hover:bg-white hover:text-navy"
          }`}
        >
          <span className="flex items-center gap-3">
            <Settings size={15} />
            Settings
          </span>
        </button>
      </div>
    </aside>
  );
}

export type { Section };
