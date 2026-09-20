"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowUpRight, Mail, ShieldCheck } from "lucide-react";
import { ApiError, authApi } from "@/config/api";
import { useAuth } from "@/context/AuthContext";

type AuthMode = "sign-in" | "sign-up";

export default function SignInPage() {
  const [mode, setMode] = useState<AuthMode>("sign-in");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { setUser } = useAuth();
  const router = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    const formData = new FormData(event.currentTarget);
    const [firstName, ...lastNameParts] = String(formData.get("name") || "")
      .trim()
      .split(/\s+/)
      .filter(Boolean);

    try {
      let authenticatedUser;

      if (mode === "sign-in") {
        const response = await authApi.signIn(
          String(formData.get("email")),
          String(formData.get("password")),
        );
        setUser(response.user);
        authenticatedUser = response.user;
      } else {
        const response = await authApi.signUp(
          String(formData.get("email")),
          String(formData.get("password")),
          firstName,
          lastNameParts.join(" ") || undefined,
        );
        setUser(response.user);
        authenticatedUser = response.user;
      }
      router.push(
        !authenticatedUser.emailVerified
          ? "/verify-email"
          : authenticatedUser.role === "ADMIN"
            ? "/admin"
            : "/",
      );
    } catch (error) {
      setErrorMessage(
        error instanceof ApiError
          ? error.message
          : "We could not complete authentication.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const switchMode = (nextMode: AuthMode) => {
    setMode(nextMode);
    setSubmitted(false);
    setErrorMessage("");
  };

  return (
    <main className="min-h-screen bg-[#f5f4f0] px-5 py-8 text-navy selection:bg-primary selection:text-white sm:px-8 sm:py-12 lg:px-12 lg:py-16">
      <section className="mx-auto grid min-h-[680px] max-w-[1180px] overflow-hidden rounded-[2px] bg-navy shadow-[0_24px_80px_rgba(15,23,42,0.16)] lg:grid-cols-[0.82fr_1.18fr]">
        <div className="relative hidden overflow-hidden lg:block">
          <Image
            src="/images/mhenga2.jpeg"
            alt="Mhengagee Media"
            fill
            priority
            className="object-cover object-[72%_center]"
            sizes="40vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-black/10" />
          <div className="absolute bottom-0 left-0 right-0 p-10 text-white">
            <p className="flex items-center gap-3 font-accent text-[10px] font-semibold uppercase tracking-[0.24em] text-accent-cyan">
              <span className="h-px w-8 bg-accent-cyan" />
              Mhengagee Media
            </p>
            <h1 className="mt-5 max-w-sm font-display text-5xl font-bold uppercase leading-[0.9] tracking-[-0.04em]">
              Stay close to the stories.
            </h1>
            <p className="mt-5 max-w-sm font-sans text-sm leading-6 text-white/65">
              Save the work you love and keep up with the conversations shaping
              the culture.
            </p>
          </div>
        </div>

        <div className="flex flex-col bg-white p-6 sm:p-10 lg:p-14">
          <div className="flex items-center justify-between">
            <Link href="/" className="group flex items-center gap-3">
              <span className="relative h-10 w-10 overflow-hidden rounded-md bg-white ring-1 ring-black/10 transition-transform group-hover:scale-105">
                <Image
                  src="/images/mhenga1.jpeg"
                  alt="Mhengagee Media"
                  fill
                  className="object-contain"
                  sizes="40px"
                />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-base font-bold uppercase tracking-[0.14em]">
                  MHENGAGEE
                </span>
                <span className="mt-1 font-accent text-[9px] font-semibold uppercase tracking-[0.4em] text-primary">
                  Media
                </span>
              </span>
            </Link>
            <Link
              href="/"
              className="font-accent text-[10px] font-semibold uppercase tracking-[0.14em] text-black/45 transition-colors hover:text-primary"
            >
              Back home <ArrowUpRight size={14} className="ml-1 inline" />
            </Link>
          </div>

          <div className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center py-12">
            <p className="font-accent text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">
              Your media desk
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold uppercase leading-none tracking-[-0.04em] text-navy sm:text-5xl">
              {mode === "sign-in" ? "Welcome back." : "Join the story."}
            </h2>
            <p className="mt-4 font-sans text-sm leading-6 text-black/55">
              {mode === "sign-in"
                ? "Sign in to keep your saved stories and conversations in one place."
                : "Create an account to save stories and follow the work you care about."}
            </p>

            <div
              className="mt-8 grid grid-cols-2 border-b border-black/10"
              role="tablist"
              aria-label="Account access"
            >
              <button
                type="button"
                role="tab"
                aria-selected={mode === "sign-in"}
                onClick={() => switchMode("sign-in")}
                className={`border-b-2 pb-3 text-left font-accent text-[10px] font-semibold uppercase tracking-[0.18em] transition-colors ${mode === "sign-in" ? "border-primary text-primary" : "border-transparent text-black/40 hover:text-navy"}`}
              >
                Sign in
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={mode === "sign-up"}
                onClick={() => switchMode("sign-up")}
                className={`border-b-2 pb-3 text-left font-accent text-[10px] font-semibold uppercase tracking-[0.18em] transition-colors ${mode === "sign-up" ? "border-primary text-primary" : "border-transparent text-black/40 hover:text-navy"}`}
              >
                Sign up
              </button>
            </div>

            {submitted ? (
              <div className="mt-8 border border-primary/20 bg-primary/5 p-6">
                <ShieldCheck size={23} className="text-primary" />
                <h3 className="mt-4 font-display text-2xl font-bold text-navy">
                  You&apos;re all set.
                </h3>
                <p className="mt-2 font-sans text-sm leading-6 text-black/55">
                  Authentication is ready to connect to your account service.
                  Your details were captured locally for now.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-5 font-accent text-[10px] font-semibold uppercase tracking-[0.16em] text-primary hover:text-navy"
                >
                  Try again
                </button>
              </div>
            ) : (
              <>
                <button
                  type="button"
                  onClick={() => {
                    window.location.href = authApi.googleUrl;
                  }}
                  className="mt-7 flex w-full items-center justify-center gap-3 border border-black/15 bg-white px-5 py-3.5 font-accent text-[10px] font-semibold uppercase tracking-[0.14em] text-navy transition-colors hover:border-navy hover:bg-navy hover:text-white"
                >
                  <span className="font-display text-lg font-bold leading-none text-[#4285F4]">
                    G
                  </span>
                  Continue with Google
                </button>
                <div className="my-7 flex items-center gap-4">
                  <span className="h-px flex-1 bg-black/10" />
                  <span className="font-accent text-[9px] uppercase tracking-[0.16em] text-black/35">
                    or use email
                  </span>
                  <span className="h-px flex-1 bg-black/10" />
                </div>
                <form className="space-y-5" onSubmit={handleSubmit}>
                  {mode === "sign-up" && (
                    <label className="block">
                      <span className="font-accent text-[10px] font-semibold uppercase tracking-[0.16em] text-black/50">
                        Full name
                      </span>
                      <input
                        required
                        name="name"
                        type="text"
                        className="mt-2 w-full border-b border-black/15 bg-transparent px-0 py-3 font-sans text-sm text-navy outline-none transition-colors placeholder:text-black/30 focus:border-primary"
                        placeholder="Jane Doe"
                      />
                    </label>
                  )}
                  <label className="block">
                    <span className="font-accent text-[10px] font-semibold uppercase tracking-[0.16em] text-black/50">
                      Email address
                    </span>
                    <input
                      required
                      name="email"
                      type="email"
                      className="mt-2 w-full border-b border-black/15 bg-transparent px-0 py-3 font-sans text-sm text-navy outline-none transition-colors placeholder:text-black/30 focus:border-primary"
                      placeholder="jane@example.com"
                    />
                  </label>
                  <label className="block">
                    <span className="font-accent text-[10px] font-semibold uppercase tracking-[0.16em] text-black/50">
                      Password
                    </span>
                    <input
                      required
                      name="password"
                      type="password"
                      minLength={8}
                      className="mt-2 w-full border-b border-black/15 bg-transparent px-0 py-3 font-sans text-sm text-navy outline-none transition-colors placeholder:text-black/30 focus:border-primary"
                      placeholder="At least 8 characters"
                    />
                  </label>
                  <div className="flex items-center justify-between pt-2">
                    <span className="flex items-center gap-2 font-accent text-[9px] uppercase tracking-[0.12em] text-black/40">
                      <Mail size={13} />
                      Secure access
                    </span>
                    {mode === "sign-in" && (
                      <Link
                        href="/forgot-password"
                        className="font-accent text-[10px] font-semibold uppercase tracking-[0.12em] text-primary hover:text-navy"
                      >
                        Forgot password?
                      </Link>
                    )}
                  </div>
                  {errorMessage ? (
                    <p role="alert" className="text-sm text-red-600">
                      {errorMessage}
                    </p>
                  ) : null}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group flex w-full items-center justify-center gap-3 rounded-full bg-primary px-5 py-3.5 font-accent text-[10px] font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-navy disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSubmitting
                      ? "Working..."
                      : mode === "sign-in"
                        ? "Sign in"
                        : "Create account"}
                    <ArrowUpRight
                      size={15}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </button>
                </form>
              </>
            )}
          </div>

          <p className="text-center font-accent text-[9px] uppercase tracking-[0.12em] text-black/35">
            By continuing, you agree to our{" "}
            <Link href="/terms" className="text-primary hover:text-navy">
              Terms
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="text-primary hover:text-navy">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
