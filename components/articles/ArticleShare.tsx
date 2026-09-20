"use client";

import { Check, Copy } from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useState } from "react";

type ArticleShareProps = {
  title: string;
};

export default function ArticleShare({ title }: ArticleShareProps) {
  const [copied, setCopied] = useState(false);

  async function copyLink() {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  }

  const encodedUrl = encodeURIComponent(
    typeof window === "undefined" ? "" : window.location.href,
  );
  const encodedTitle = encodeURIComponent(title);

  return (
    <section
      className="mt-12 flex flex-col gap-5 border-y border-black/10 py-6 sm:flex-row sm:items-center sm:justify-between"
      aria-label="Share article"
    >
      <div>
        <p className="font-accent text-[10px] font-semibold uppercase text-primary">
          Pass it on
        </p>
        <p className="mt-2 font-display text-xl font-semibold text-navy">
          Share this story
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
          target="_blank"
          rel="noreferrer"
          aria-label="Share on Facebook"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-navy transition-colors hover:border-primary hover:bg-primary hover:text-white"
        >
          <FaFacebookF size={15} />
        </a>
        <a
          href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
          target="_blank"
          rel="noreferrer"
          aria-label="Share on X"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-navy transition-colors hover:border-primary hover:bg-primary hover:text-white"
        >
          <FaXTwitter size={15} />
        </a>
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
          target="_blank"
          rel="noreferrer"
          aria-label="Share on LinkedIn"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-navy transition-colors hover:border-primary hover:bg-primary hover:text-white"
        >
          <FaLinkedinIn size={16} />
        </a>
        <a
          href={`https://wa.me/?text=${encodedTitle}%20${encodedUrl}`}
          target="_blank"
          rel="noreferrer"
          aria-label="Share on WhatsApp"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-navy transition-colors hover:border-primary hover:bg-primary hover:text-white"
        >
          <FaWhatsapp size={17} />
        </a>
        <button
          type="button"
          onClick={copyLink}
          aria-label={copied ? "Article link copied" : "Copy article link"}
          className="inline-flex h-10 items-center gap-2 rounded-full border border-primary bg-primary px-4 font-accent text-[10px] font-semibold uppercase text-white transition-colors hover:bg-navy"
        >
          {copied ? <Check size={15} /> : <Copy size={15} />}
          <span>{copied ? "Copied" : "Copy link"}</span>
        </button>
      </div>
    </section>
  );
}
