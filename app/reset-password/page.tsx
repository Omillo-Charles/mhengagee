"use client";

import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import { ArrowLeft, Check, KeyRound } from "lucide-react";
import { ApiError, authApi } from "@/config/api";

export default function ResetPasswordPage() {
  const [token, setToken] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setToken(new URLSearchParams(window.location.search).get("token") || "");
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");
    const formData = new FormData(event.currentTarget);

    if (!token) {
      setErrorMessage("This reset link is missing its token.");
      setIsSubmitting(false);
      return;
    }

    if (formData.get("password") !== formData.get("confirmPassword")) {
      setErrorMessage("The passwords do not match.");
      setIsSubmitting(false);
      return;
    }

    try {
      await authApi.resetPassword(
        token,
        String(formData.get("password") || ""),
      );
      setSubmitted(true);
    } catch (error) {
      setErrorMessage(
        error instanceof ApiError
          ? error.message
          : "We could not reset your password.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#f5f4f0] px-5 py-8 text-navy sm:px-8 sm:py-12 lg:px-12 lg:py-16">
      <section className="mx-auto max-w-[620px] rounded-[2px] bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.12)] sm:p-12">
        <Link
          href="/sign-in"
          className="flex items-center gap-2 font-accent text-[10px] font-semibold uppercase text-black/45 hover:text-primary"
        >
          <ArrowLeft size={14} />
          Back to sign in
        </Link>
        {submitted ? (
          <div className="mt-16">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-cyan text-navy">
              <Check size={21} />
            </span>
            <h1 className="mt-6 font-display text-4xl font-bold text-navy">
              Password updated.
            </h1>
            <p className="mt-4 text-sm leading-7 text-black/60">
              Your password has been reset. You can now sign in with your new
              password.
            </p>
            <Link
              href="/sign-in"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 font-accent text-[10px] font-semibold uppercase text-white"
            >
              Continue to sign in
            </Link>
          </div>
        ) : (
          <div className="mt-16">
            <p className="font-accent text-[10px] font-semibold uppercase text-primary">
              New password
            </p>
            <h1 className="mt-3 font-display text-4xl font-bold uppercase text-navy">
              Reset password
            </h1>
            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <label className="block">
                <span className="font-accent text-[10px] font-semibold uppercase text-black/50">
                  New password
                </span>
                <input
                  required
                  minLength={8}
                  name="password"
                  type="password"
                  className="mt-2 w-full border-b border-black/15 bg-transparent px-0 py-3 text-sm text-navy outline-none focus:border-primary"
                  placeholder="At least 8 characters"
                />
              </label>
              <label className="block">
                <span className="font-accent text-[10px] font-semibold uppercase text-black/50">
                  Confirm password
                </span>
                <input
                  required
                  minLength={8}
                  name="confirmPassword"
                  type="password"
                  className="mt-2 w-full border-b border-black/15 bg-transparent px-0 py-3 text-sm text-navy outline-none focus:border-primary"
                  placeholder="Repeat your password"
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
                className="flex w-full items-center justify-center gap-3 rounded-full bg-primary px-5 py-3.5 font-accent text-[10px] font-semibold uppercase text-white hover:bg-navy disabled:cursor-wait disabled:opacity-60"
              >
                {isSubmitting ? "Updating..." : "Update password"}
                <KeyRound size={15} />
              </button>
            </form>
          </div>
        )}
      </section>
    </main>
  );
}
