"use client";

import { Check, LoaderCircle, X } from "lucide-react";
import type { EditorState, PortfolioItem } from "./types";

type EditorProps = {
  editor: EditorState;
  label: string;
  isSaving: boolean;
  onClose: () => void;
  onPortfolioSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

const inputClass =
  "mt-2 w-full border-b border-black/15 bg-transparent px-0 py-2 text-sm text-navy outline-none placeholder:text-black/35";
const labelClass =
  "font-accent text-[10px] font-semibold uppercase tracking-[0.14em] text-black/55";
const uploadClass =
  "mt-2 block w-full cursor-pointer rounded-[2px] border border-dashed border-black/15 bg-white p-3 text-sm text-navy file:mr-3 file:rounded-[2px] file:border-0 file:bg-primary file:px-3 file:py-2 file:font-accent file:text-[9px] file:font-semibold file:uppercase file:tracking-[0.14em] file:text-white";

function EditorHeader({
  label,
  onClose,
  isSaving,
}: Pick<EditorProps, "label" | "onClose" | "isSaving">) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-black/10 pb-4">
      <h3 className="font-display text-2xl font-bold text-navy">{label}</h3>
      <button
        type="button"
        onClick={onClose}
        disabled={isSaving}
        className="rounded-full border border-black/10 p-2 text-navy hover:text-primary disabled:cursor-not-allowed disabled:opacity-50"
      >
        <X size={14} />
      </button>
    </div>
  );
}

function EditorActions({
  onClose,
  isSaving,
}: {
  onClose: () => void;
  isSaving: boolean;
}) {
  return (
    <div className="flex items-center justify-end gap-3 border-t border-black/10 pt-4">
      <button
        type="button"
        onClick={onClose}
        disabled={isSaving}
        className="font-accent text-[10px] font-semibold uppercase tracking-[0.14em] text-black/55 hover:text-navy disabled:cursor-not-allowed disabled:opacity-50"
      >
        Cancel
      </button>
      <button
        type="submit"
        disabled={isSaving}
        className="inline-flex items-center gap-2 bg-navy px-4 py-2.5 font-accent text-[10px] font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-primary disabled:cursor-wait disabled:opacity-60"
        aria-busy={isSaving}
      >
        {isSaving ? (
          <LoaderCircle size={14} className="animate-spin" />
        ) : (
          <Check size={14} />
        )}
        {isSaving ? "Saving..." : "Save"}
      </button>
    </div>
  );
}

export function AdminEditors({
  editor,
  label,
  isSaving,
  onClose,
  onPortfolioSubmit,
}: EditorProps) {
  return (
    <PortfolioEditor
      item={editor.item}
      label={label}
      isSaving={isSaving}
      onClose={onClose}
      onSubmit={onPortfolioSubmit}
    />
  );
}

function PortfolioEditor({
  item,
  label,
  isSaving,
  onClose,
  onSubmit,
}: {
  item?: PortfolioItem;
  label: string;
  isSaving: boolean;
  onClose: () => void;
  onSubmit: EditorProps["onPortfolioSubmit"];
}) {
  return (
    <form
      onSubmit={onSubmit}
      className="space-y-5 rounded-[2px] border border-black/10 bg-[#f8f7f3] p-5"
    >
      <EditorHeader label={label} isSaving={isSaving} onClose={onClose} />
      <label className="block text-left">
        <span className={labelClass}>Upload image</span>
        <input
          name="image"
          type="file"
          accept="image/*"
          required
          className={uploadClass}
        />
      </label>
      {item?.image ? (
        <div className="overflow-hidden rounded-[2px] border border-black/10 bg-white p-3">
          <img
            src={item.image}
            alt={item.title}
            className="h-48 w-full rounded-[2px] object-cover"
          />
        </div>
      ) : null}
      <input
        type="hidden"
        name="title"
        value={item?.title || "Untitled project"}
      />
      <input
        type="hidden"
        name="category"
        value={item?.category || "Photography"}
      />
      <input type="hidden" name="width" value={item?.width || 1200} />
      <input type="hidden" name="height" value={item?.height || 1600} />
      <input
        type="hidden"
        name="feature"
        value={item?.feature ? "true" : "false"}
      />
      <EditorActions isSaving={isSaving} onClose={onClose} />
    </form>
  );
}
