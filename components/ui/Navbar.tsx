"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ChevronDown, LogOut, UserRound } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

const navigation = [
  { label: "For You", href: "/" },
  { label: "News", href: "/news" },
  { label: "Podcasts", href: "/podcasts" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const pathname = usePathname();
  const { user, isLoading, signOut } = useAuth();

  const accountLabel =
    user?.displayName ||
    user?.firstName ||
    user?.email.split("@")[0] ||
    "Account";

  const handleSignOut = async () => {
    await signOut();
    setIsAccountOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/95 backdrop-blur-md">
      <div className="h-1 w-full bg-[var(--brand-gradient)]" />
      <nav
        className="mx-auto flex max-w-[1440px] items-center justify-between gap-8 px-5 py-2 sm:px-8 lg:px-12 lg:py-3"
        aria-label="Main navigation"
      >
        <Link href="/" className="group flex shrink-0 items-center gap-3">
          <span
            className="relative h-11 w-11 overflow-hidden rounded-md bg-white transition-transform duration-300 group-hover:scale-105"
            aria-hidden="true"
          >
            <Image
              src="/images/mhenga1.jpeg"
              alt=""
              fill
              className="object-contain"
              sizes="44px"
            />
          </span>
          <span className="flex flex-col leading-none text-[var(--brand-navy)]">
            <span className="font-display text-lg font-bold uppercase tracking-[0.14em]">
              MHENGAGEE
            </span>
            <span className="mt-1 font-accent text-[10px] font-semibold uppercase tracking-[0.42em] text-[var(--brand-primary)]">
              Media
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) =>
            (() => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative py-2 font-accent text-xs font-bold uppercase tracking-[0.16em] transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-[var(--brand-primary)] after:transition-transform after:duration-300 ${isActive ? "text-[var(--brand-primary)] after:scale-x-100" : "text-[var(--brand-navy)] after:origin-right after:scale-x-0 hover:text-[var(--brand-primary)] hover:after:origin-left hover:after:scale-x-100"}`}
                >
                  {item.label}
                </Link>
              );
            })(),
          )}
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 lg:hidden">
            {user?.role === "ADMIN" ? (
              <Link
                href="/admin"
                aria-label="Open admin panel"
                className="rounded-full p-2 text-[var(--brand-navy)] transition-colors hover:bg-black/5 hover:text-[var(--brand-primary)]"
              >
                <UserRound size={19} strokeWidth={1.7} />
              </Link>
            ) : user ? (
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsAccountOpen((open) => !open)}
                  aria-label="Open account menu"
                  aria-expanded={isAccountOpen}
                  className="rounded-full p-2 text-[var(--brand-navy)] transition-colors hover:bg-black/5 hover:text-[var(--brand-primary)]"
                >
                  <UserRound size={19} strokeWidth={1.7} />
                </button>
                {isAccountOpen ? (
                  <div className="absolute right-0 top-[calc(100%+0.5rem)] z-10 min-w-36 border border-black/10 bg-white p-2 shadow-lg">
                    <button
                      type="button"
                      onClick={handleSignOut}
                      className="flex w-full items-center gap-2 px-3 py-2 text-left font-accent text-[10px] font-semibold uppercase tracking-[0.14em] text-navy hover:bg-black/5"
                    >
                      <LogOut size={14} />
                      Log out
                    </button>
                  </div>
                ) : null}
              </div>
            ) : (
              <Link
                href="/sign-in"
                aria-label="Sign in"
                className="rounded-full p-2 text-[var(--brand-navy)] transition-colors hover:bg-black/5 hover:text-[var(--brand-primary)]"
              >
                <UserRound size={19} strokeWidth={1.7} />
              </Link>
            )}
          </div>

          {isLoading || !user ? (
            <Link
              href="/sign-in"
              className="hidden items-center gap-2 rounded-full bg-[var(--brand-navy)] px-5 py-3 font-accent text-[10px] font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[var(--brand-primary)] sm:flex"
            >
              Sign in{" "}
              <span aria-hidden="true" className="text-base leading-none">
                ↗
              </span>
            </Link>
          ) : user.role === "ADMIN" ? (
            <Link
              href="/admin"
              className="hidden items-center gap-2 rounded-full bg-[var(--brand-navy)] px-5 py-3 font-accent text-[10px] font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[var(--brand-primary)] sm:flex"
            >
              Admin{" "}
              <span aria-hidden="true" className="text-base leading-none">
                ↗
              </span>
            </Link>
          ) : (
            <div className="relative hidden sm:block">
              <button
                type="button"
                onClick={() => setIsAccountOpen((open) => !open)}
                aria-expanded={isAccountOpen}
                className="flex items-center gap-2 rounded-full bg-[var(--brand-navy)] px-5 py-3 font-accent text-[10px] font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[var(--brand-primary)]"
              >
                {accountLabel}
                <ChevronDown size={14} />
              </button>
              {isAccountOpen ? (
                <div className="absolute right-0 top-[calc(100%+0.5rem)] z-10 min-w-44 border border-black/10 bg-white p-2 shadow-lg">
                  <button
                    type="button"
                    onClick={handleSignOut}
                    className="flex w-full items-center gap-2 px-3 py-2 text-left font-accent text-[10px] font-semibold uppercase tracking-[0.14em] text-navy hover:bg-black/5"
                  >
                    <LogOut size={14} />
                    Log out
                  </button>
                </div>
              ) : null}
            </div>
          )}
        </div>
      </nav>

      <div className="border-t border-black/10 lg:hidden">
        <div className="mx-auto flex max-w-[1440px] gap-7 overflow-x-auto px-5 py-2 [scrollbar-width:none] sm:px-8 [&::-webkit-scrollbar]:hidden">
          {navigation.map((item) =>
            (() => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`shrink-0 whitespace-nowrap border-b-2 pb-2 font-accent text-[11px] font-bold uppercase tracking-[0.16em] transition-colors ${isActive ? "border-[var(--brand-primary)] text-[var(--brand-primary)]" : "border-transparent text-[var(--brand-navy)] hover:text-[var(--brand-primary)]"}`}
                >
                  {item.label}
                </Link>
              );
            })(),
          )}
        </div>
      </div>
    </header>
  );
}
