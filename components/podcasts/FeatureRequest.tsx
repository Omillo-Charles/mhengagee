"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { ApiError, podcastApi } from "@/config/api";

export default function FeatureRequest() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");
    const formData = new FormData(event.currentTarget);

    try {
      await podcastApi.requestFeature({
        name: String(formData.get("name")),
        email: String(formData.get("email")),
        topic: String(formData.get("topic")),
        message: String(formData.get("message")),
      });
      setSubmitted(true);
    } catch (error) {
      setErrorMessage(
        error instanceof ApiError
          ? error.message
          : "We could not send your request.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      aria-labelledby="feature-request-heading"
      className="mt-16 overflow-hidden rounded-[2px] bg-navy text-white sm:mt-20"
    >
      <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
        <div className="flex flex-col justify-between bg-primary p-6 sm:p-10 lg:p-14">
          <div>
            <p className="font-accent text-[10px] font-semibold uppercase tracking-[0.2em] text-white/65">
              Be part of the conversation
            </p>
            <h2
              id="feature-request-heading"
              className="mt-3 max-w-md font-display text-4xl font-bold leading-[0.94] tracking-[-0.035em] sm:text-5xl"
            >
              Have a story worth hearing?
            </h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-white/75">
              Request to be featured on the next podcast and tell us what you
              are building, learning, or thinking about.
            </p>
          </div>
          <div className="mt-10 space-y-4 border-t border-white/20 pt-6 text-sm text-white/80">
            <a
              href="mailto:hello@mhengagee.co.ke"
              className="flex items-center gap-3 transition-colors hover:text-white"
            >
              <Mail size={17} />
              hello@mhengagee.co.ke
            </a>
            <a
              href="https://wa.me/254712830837"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 transition-colors hover:text-white"
            >
              <MessageCircle size={17} />
              +254 712 830 837 on WhatsApp
            </a>
            <p className="flex items-center gap-3">
              <MapPin size={17} />
              Nairobi, Kenya · Available worldwide
            </p>
          </div>
        </div>

        <div className="p-6 sm:p-10 lg:p-14">
          {submitted ? (
            <div className="flex min-h-[420px] flex-col justify-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-cyan text-navy">
                <Send size={20} />
              </span>
              <h3 className="mt-6 font-display text-3xl font-bold">
                Request received.
              </h3>
              <p className="mt-3 max-w-md text-sm leading-6 text-white/65">
                Thanks for putting your story forward. This form is ready to
                connect to the podcast inbox when the backend is wired up.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-7 w-fit font-accent text-[10px] font-semibold uppercase tracking-[0.16em] text-accent-cyan transition-colors hover:text-white"
              >
                Send another request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="border-b border-white/15 pb-5">
                <p className="font-accent text-[10px] font-semibold uppercase tracking-[0.2em] text-accent-cyan">
                  Guest request
                </p>
                <h3 className="mt-2 font-display text-3xl font-bold">
                  Tell us about you.
                </h3>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="block">
                  <span className="font-accent text-[10px] font-semibold uppercase tracking-[0.16em] text-white/55">
                    Your name
                  </span>
                  <input
                    required
                    name="name"
                    type="text"
                    placeholder="Your name"
                    className="mt-2 w-full border-b border-white/20 bg-transparent px-0 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-accent-cyan"
                  />
                </label>
                <label className="block">
                  <span className="font-accent text-[10px] font-semibold uppercase tracking-[0.16em] text-white/55">
                    Email address
                  </span>
                  <input
                    required
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className="mt-2 w-full border-b border-white/20 bg-transparent px-0 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-accent-cyan"
                  />
                </label>
              </div>
              <label className="block">
                <span className="font-accent text-[10px] font-semibold uppercase tracking-[0.16em] text-white/55">
                  What would you talk about?
                </span>
                <input
                  required
                  name="topic"
                  type="text"
                  placeholder="Your idea, work, or perspective"
                  className="mt-2 w-full border-b border-white/20 bg-transparent px-0 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-accent-cyan"
                />
              </label>
              <label className="block">
                <span className="font-accent text-[10px] font-semibold uppercase tracking-[0.16em] text-white/55">
                  A little more detail
                </span>
                <textarea
                  required
                  name="message"
                  rows={4}
                  placeholder="Tell us why this conversation would matter..."
                  className="mt-2 w-full resize-none border-b border-white/20 bg-transparent px-0 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-accent-cyan"
                />
              </label>
              {errorMessage ? (
                <p role="alert" className="text-sm text-red-300">
                  {errorMessage}
                </p>
              ) : null}
              <button
                type="submit"
                disabled={isSubmitting}
                className="group flex items-center gap-3 bg-accent-cyan px-5 py-3 font-accent text-[10px] font-semibold uppercase tracking-[0.16em] text-navy transition-colors hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Sending..." : "Request to be featured"}{" "}
                {!isSubmitting ? (
                  <ArrowUpRight
                    size={15}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                ) : null}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
