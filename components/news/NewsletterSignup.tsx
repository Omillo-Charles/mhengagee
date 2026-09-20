"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, Mail, Send } from "lucide-react";

export default function NewsletterSignup() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      aria-labelledby="newsletter-heading"
      className="mt-16 overflow-hidden rounded-[2px] bg-navy text-white sm:mt-20"
    >
      <div className="grid lg:grid-cols-[1fr_1.1fr]">
        <div className="relative flex min-h-[280px] flex-col justify-between overflow-hidden bg-primary p-6 sm:p-10">
          <div className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full border border-white/20" />
          <div className="pointer-events-none absolute -bottom-20 -left-10 h-52 w-52 rounded-full border border-white/15" />
          <Mail size={28} className="relative text-white" strokeWidth={1.5} />
          <div className="relative">
            <p className="font-accent text-[10px] font-semibold uppercase tracking-[0.2em] text-white/65">
              The MhengaGee newsletter
            </p>
            <h2
              id="newsletter-heading"
              className="mt-3 max-w-md font-display text-4xl font-bold leading-[0.95] tracking-[-0.035em] sm:text-5xl"
            >
              Don&apos;t miss the next story.
            </h2>
          </div>
        </div>

        <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-14">
          {submitted ? (
            <div>
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent-cyan text-navy">
                <Send size={18} />
              </span>
              <h3 className="mt-5 font-display text-3xl font-bold">
                You&apos;re on the list.
              </h3>
              <p className="mt-3 max-w-md text-sm leading-6 text-white/65">
                Thanks for subscribing. The next MhengaGee dispatch will find
                its way to your inbox.
              </p>
            </div>
          ) : (
            <>
              <p className="max-w-lg text-base leading-7 text-white/70">
                Get the latest news, conversations, visual stories, and creative
                work from MhengaGee Media, delivered when it is worth your
                attention.
              </p>
              <form
                onSubmit={handleSubmit}
                className="mt-7 flex flex-col gap-3 sm:flex-row"
              >
                <label className="min-w-0 flex-1">
                  <span className="sr-only">Email address</span>
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="Your email address"
                    className="w-full border border-white/20 bg-white/5 px-4 py-3 font-sans text-sm text-white outline-none placeholder:text-white/35 focus:border-accent-cyan"
                  />
                </label>
                <button
                  type="submit"
                  className="group inline-flex shrink-0 items-center justify-center gap-2 bg-accent-cyan px-5 py-3 font-accent text-[10px] font-semibold uppercase tracking-[0.16em] text-navy transition-colors hover:bg-white"
                >
                  Subscribe{" "}
                  <ArrowUpRight
                    size={15}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </button>
              </form>
              <p className="mt-4 font-accent text-[9px] uppercase tracking-[0.14em] text-white/40">
                No noise. Just the good stuff.
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
