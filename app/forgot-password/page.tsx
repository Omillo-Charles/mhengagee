"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { ArrowLeft, ArrowUpRight, Mail, Send } from "lucide-react";
import { ApiError, authApi } from "@/config/api";

export default function ForgotPasswordPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      await authApi.forgotPassword(
        String(new FormData(event.currentTarget).get("email") || ""),
      );
      setSubmitted(true);
    } catch (error) {
      setErrorMessage(
        error instanceof ApiError
          ? error.message
          : "We could not process that request.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#f5f4f0] px-5 py-8 text-navy sm:px-8 sm:py-12 lg:px-12 lg:py-16">
      <section className="mx-auto grid min-h-[620px] max-w-[1080px] overflow-hidden rounded-[2px] bg-navy shadow-[0_24px_80px_rgba(15,23,42,0.16)] lg:grid-cols-[0.78fr_1.22fr]">
        <div className="relative hidden overflow-hidden lg:block">
          <Image
            src="/images/mhenga2.jpeg"
            alt="Mhengagee Media"
            fill
            className="object-cover"
            sizes="40vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-black/10" />
          <div className="absolute bottom-0 p-10 text-white">
            <p className="font-accent text-[10px] font-semibold uppercase tracking-[0.24em] text-accent-cyan">
              Account access
            </p>
            <h1 className="mt-5 max-w-sm font-display text-5xl font-bold uppercase leading-[0.9]">
              Find your way back.
            </h1>
          </div>
        </div>
        <div className="flex flex-col bg-white p-6 sm:p-10 lg:p-14">
          <Link
            href="/sign-in"
            className="flex items-center gap-2 font-accent text-[10px] font-semibold uppercase tracking-[0.14em] text-black/45 hover:text-primary"
          >
            <ArrowLeft size={14} />
            Back to sign in
          </Link>
          <div className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center py-12">
            {submitted ? (
              <div>
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-cyan text-navy">
                  <Send size={20} />
                </span>
                <h2 className="mt-6 font-display text-4xl font-bold text-navy">
                  Check your inbox.
                </h2>
                <p className="mt-4 text-sm leading-7 text-black/60">
                  If an account exists for that email, we&apos;ve sent a
                  password reset link. The link expires in 30 minutes.
                </p>
                <Link
                  href="/sign-in"
                  className="mt-8 inline-flex items-center gap-2 font-accent text-[10px] font-semibold uppercase tracking-[0.16em] text-primary"
                >
                  Return to sign in <ArrowUpRight size={14} />
                </Link>
              </div>
            ) : (
              <>
                <p className="font-accent text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">
                  Reset access
                </p>
                <h2 className="mt-3 font-display text-4xl font-bold uppercase leading-none text-navy">
                  Forgot password?
                </h2>
                <p className="mt-4 text-sm leading-6 text-black/55">
                  Enter your email and we&apos;ll send you a secure reset link.
                </p>
                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  <label className="block">
                    <span className="font-accent text-[10px] font-semibold uppercase tracking-[0.16em] text-black/50">
                      Email address
                    </span>
                    <input
                      required
                      name="email"
                      type="email"
                      className="mt-2 w-full border-b border-black/15 bg-transparent px-0 py-3 text-sm text-navy outline-none focus:border-primary"
                      placeholder="you@example.com"
                    />
                  </label>
                  {errorMessage && (
                    <p role="alert" className="text-sm text-red-600">
                      {errorMessage}
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex w-full items-center justify-center gap-3 rounded-full bg-primary px-5 py-3.5 font-accent text-[10px] font-semibold uppercase tracking-[0.16em] text-white hover:bg-navy disabled:cursor-wait disabled:opacity-60"
                  >
                    {isSubmitting ? "Sending..." : "Send reset link"}
                    <Mail size={15} />
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
