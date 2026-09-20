"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { ArrowLeft, Check, Mail, RefreshCw } from "lucide-react";
import { ApiError, authApi } from "@/config/api";
import { useAuth } from "@/context/AuthContext";

export default function VerifyEmailPage() {
  const { user, setUser } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [verified, setVerified] = useState(false);
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");
    try {
      await authApi.verifyEmail(
        String(new FormData(event.currentTarget).get("otp") || ""),
      );
      setUser(user ? { ...user, emailVerified: true } : user);
      setVerified(true);
    } catch (error) {
      setErrorMessage(
        error instanceof ApiError
          ? error.message
          : "We could not verify your email.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const resend = async () => {
    setIsResending(true);
    setErrorMessage("");
    try {
      const response = await authApi.resendVerification();
      setMessage(response.message);
    } catch (error) {
      setErrorMessage(
        error instanceof ApiError
          ? error.message
          : "We could not resend the verification code.",
      );
    } finally {
      setIsResending(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#f5f4f0] px-5 py-8 text-navy sm:px-8 sm:py-12 lg:px-12 lg:py-16">
      <section className="mx-auto max-w-[620px] rounded-[2px] bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.12)] sm:p-12">
        <Link
          href="/"
          className="flex items-center gap-2 font-accent text-[10px] font-semibold uppercase text-black/45 hover:text-primary"
        >
          <ArrowLeft size={14} />
          Back home
        </Link>
        {verified ? (
          <div className="mt-16">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-cyan text-navy">
              <Check size={21} />
            </span>
            <h1 className="mt-6 font-display text-4xl font-bold text-navy">
              Email verified.
            </h1>
            <p className="mt-4 text-sm leading-7 text-black/60">
              Your account is verified. You can continue using Mhengagee Media.
            </p>
            <Link
              href={user?.role === "ADMIN" ? "/admin" : "/"}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 font-accent text-[10px] font-semibold uppercase text-white"
            >
              Continue
            </Link>
          </div>
        ) : (
          <div className="mt-16">
            <Mail size={24} className="text-primary" />
            <h1 className="mt-5 font-display text-4xl font-bold uppercase text-navy">
              Verify your email
            </h1>
            <p className="mt-4 text-sm leading-7 text-black/60">
              Enter the six-digit code sent to your email address.
            </p>
            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <label className="block">
                <span className="font-accent text-[10px] font-semibold uppercase text-black/50">
                  Verification code
                </span>
                <input
                  required
                  pattern="[0-9]{6}"
                  maxLength={6}
                  name="otp"
                  inputMode="numeric"
                  className="mt-2 w-full border-b border-black/15 bg-transparent px-0 py-3 text-lg text-navy outline-none focus:border-primary"
                  placeholder="000000"
                />
              </label>
              {message && <p className="text-sm text-green-700">{message}</p>}
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
                {isSubmitting ? "Verifying..." : "Verify email"}
                <Check size={15} />
              </button>
            </form>
            <button
              type="button"
              onClick={resend}
              disabled={isResending}
              className="mt-6 flex items-center gap-2 font-accent text-[10px] font-semibold uppercase text-primary hover:text-navy disabled:opacity-50"
            >
              {isResending ? "Resending..." : "Resend code"}
              <RefreshCw size={14} />
            </button>
          </div>
        )}
      </section>
    </main>
  );
}
