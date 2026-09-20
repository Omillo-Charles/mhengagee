"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowUpRight, LogOut, Pencil, Plus, Trash2 } from "lucide-react";
import { AdminEditors } from "@/components/admin/AdminEditors";
import { AdminSidebar, type Section } from "@/components/admin/AdminSidebar";
import type { EditorState, PortfolioItem } from "@/components/admin/types";
import { portfolioApi, podcastApi } from "@/config/api";

const settingActions = [
  { label: "Reset drafts", icon: Trash2, danger: false },
  { label: "Delete account", icon: Trash2, danger: true },
  { label: "Log out", icon: LogOut, danger: false },
];

export default function AdminPage() {
  const [activeSection, setActiveSection] = useState<Section>("overview");
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>([]);
  const [podcastCount, setPodcastCount] = useState(0);
  const [editor, setEditor] = useState<EditorState | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState("");

  useEffect(() => {
    async function loadDashboardData() {
      setIsLoading(true);
      setLoadError("");

      try {
        const [portfolioResponse, podcastResponse] = await Promise.all([
          portfolioApi.list({ page: 1, limit: 20 }),
          podcastApi.youtube(),
        ]);

        setPortfolio(
          portfolioResponse.data.map((item, index) => ({
            id: item.id,
            title: item.isFeatured
              ? "Featured portfolio image"
              : `Portfolio image ${index + 1}`,
            category: "Photography",
            image: item.image,
            width: 1200,
            height: 1600,
            feature: item.isFeatured,
            publishedAt: item.publishedAt,
          })),
        );

        setPodcastCount(podcastResponse.data.length);
      } catch (error) {
        console.error("Failed to load admin dashboard data:", error);
        setLoadError(
          "The dashboard could not load your stored content. Please try again in a moment.",
        );
      } finally {
        setIsLoading(false);
      }
    }

    void loadDashboardData();
  }, []);

  const overviewStats = useMemo(
    () => [
      {
        label: "Portfolio items",
        value: String(portfolio.length).padStart(2, "0"),
        tone: "text-navy",
      },
      {
        label: "YouTube podcasts",
        value: String(podcastCount).padStart(2, "0"),
        tone: "text-primary",
      },
    ],
    [portfolio.length, podcastCount],
  );

  const latestPortfolioEntry = portfolio[0];

  const activeEditorLabel = useMemo(() => {
    if (!editor) return "";
    if (editor.kind === "portfolio")
      return editor.mode === "add"
        ? "Add portfolio image"
        : "Edit portfolio image";
    return editor.mode === "add"
      ? "Add podcast episode"
      : "Edit podcast episode";
  }, [editor]);

  const openAdd = (kind: EditorState["kind"]) =>
    setEditor({ kind, mode: "add" });

  function openEdit(kind: "portfolio", item: PortfolioItem): void;
  function openEdit(kind: EditorState["kind"], item: PortfolioItem) {
    if (kind === "portfolio" && "width" in item) {
      setEditor({ kind, mode: "edit", item });
    }
  }
  const closeEditor = () => setEditor(null);

  const handlePortfolioSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    setIsSaving(true);
    const form = event.currentTarget;
    const formData = new FormData(form);
    const file = formData.get("image") as File | null;
    if (!(file instanceof File) || !file.size) {
      setLoadError("Please choose an image before saving.");
      setIsSaving(false);
      return;
    }

    formData.delete("title");
    formData.delete("category");
    formData.delete("width");
    formData.delete("height");
    formData.delete("feature");

    try {
      const response =
        editor?.kind === "portfolio" && editor.mode === "edit" && editor.item
          ? await portfolioApi.update(editor.item.id, formData)
          : await portfolioApi.create(formData);
      const item = response.data;
      const mappedItem: PortfolioItem = {
        id: item.id,
        title:
          editor?.kind === "portfolio" && editor.item
            ? editor.item.title
            : file.name.replace(/\.[^/.]+$/, ""),
        category:
          editor?.kind === "portfolio" && editor.item
            ? editor.item.category
            : "Photography",
        image: item.image,
        width:
          editor?.kind === "portfolio" && editor.item
            ? editor.item.width
            : 1200,
        height:
          editor?.kind === "portfolio" && editor.item
            ? editor.item.height
            : 1600,
        feature: item.isFeatured,
        publishedAt: item.publishedAt,
      };

      if (
        editor?.kind === "portfolio" &&
        editor.mode === "edit" &&
        editor.item
      ) {
        setPortfolio((items) =>
          items.map((existing) =>
            existing.id === item.id ? mappedItem : existing,
          ),
        );
      } else {
        setPortfolio((items) => [mappedItem, ...items]);
      }
      closeEditor();
    } catch (error) {
      setLoadError(
        error instanceof Error
          ? error.message
          : "The portfolio image could not be saved.",
      );
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async (kind: EditorState["kind"], id: string) => {
    if (kind !== "portfolio") return;
    try {
      await portfolioApi.remove(id);
      setPortfolio((items) => items.filter((item) => item.id !== id));
    } catch (error) {
      setLoadError(
        error instanceof Error
          ? error.message
          : "The portfolio image could not be deleted.",
      );
    }
  };

  const renderPortfolioPanel = () => (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 border-b border-black/10 pb-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-accent text-[10px] font-semibold uppercase text-primary">
            Portfolio
          </p>
          <h1 className="mt-2 font-display text-4xl font-bold leading-[0.98] text-navy">
            Gallery
          </h1>
        </div>
        <button
          type="button"
          onClick={() => openAdd("portfolio")}
          className="inline-flex items-center gap-2 bg-primary px-4 py-2.5 font-accent text-[10px] font-semibold uppercase text-white transition-colors hover:bg-navy"
        >
          <Plus size={14} />
          Add image
        </button>
      </div>

      {editor?.kind === "portfolio" && (
        <AdminEditors
          editor={editor}
          label={activeEditorLabel}
          isSaving={isSaving}
          onClose={closeEditor}
          onPortfolioSubmit={handlePortfolioSubmit}
        />
      )}

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {portfolio.map((item) => (
          <div
            key={item.id}
            className="overflow-hidden rounded-[2px] border border-black/10 bg-[#f8f7f3]"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-white">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="space-y-3 p-4">
              <div className="flex items-center justify-between gap-2">
                <p className="font-accent text-[9px] font-semibold uppercase text-black/45">
                  {item.category}
                </p>
                {item.feature && (
                  <span className="rounded-full bg-primary/10 px-2 py-1 font-accent text-[8px] font-semibold uppercase text-primary">
                    Featured
                  </span>
                )}
              </div>
              <h3 className="font-display text-2xl font-bold text-navy">
                {item.title}
              </h3>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => openEdit("portfolio", item)}
                  className="inline-flex items-center gap-2 border border-black/10 bg-white px-3 py-2 font-accent text-[9px] font-semibold uppercase text-navy hover:border-primary hover:text-primary"
                >
                  <Pencil size={12} />
                  Edit
                </button>
                <button
                  type="button"
                  onClick={() => handleDelete("portfolio", item.id)}
                  className="inline-flex items-center gap-2 border border-red-200 bg-red-50 px-3 py-2 font-accent text-[9px] font-semibold uppercase text-red-700 hover:bg-red-100"
                >
                  <Trash2 size={12} />
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderSettingsPanel = () => (
    <div className="space-y-6">
      <div className="border-b border-black/10 pb-5">
        <p className="font-accent text-[10px] font-semibold uppercase text-primary">
          Settings
        </p>
        <h1 className="mt-2 font-display text-4xl font-bold leading-[0.98] text-navy">
          Account
        </h1>
      </div>

      <div className="space-y-4">
        {settingActions.map(({ label, icon: Icon, danger }) => (
          <button
            key={label}
            type="button"
            className={`flex w-full items-center justify-between gap-4 rounded-[2px] border p-4 text-left transition-colors ${
              danger
                ? "border-red-200 bg-red-50 text-red-700 hover:bg-red-100"
                : "border-black/10 bg-[#f8f7f3] text-navy hover:bg-white"
            }`}
          >
            <span className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white">
                <Icon size={15} />
              </span>
              <span className="font-display text-xl font-bold">{label}</span>
            </span>
            <ArrowUpRight size={15} />
          </button>
        ))}
      </div>
    </div>
  );

  const renderOverviewPanel = () => (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 border-b border-black/10 pb-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-accent text-[10px] font-semibold uppercase text-primary">
            Overview
          </p>
          <h1 className="mt-2 font-display text-4xl font-bold leading-[0.98] text-navy">
            Dashboard
          </h1>
        </div>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => {
              setActiveSection("portfolio");
              openAdd("portfolio");
            }}
            className="inline-flex items-center gap-2 bg-navy px-4 py-2.5 font-accent text-[10px] font-semibold uppercase text-white transition-colors hover:bg-primary"
          >
            <Plus size={14} />
            Add portfolio
          </button>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {overviewStats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-[2px] border border-black/10 bg-[#f8f7f3] p-5"
          >
            <p className="font-accent text-[10px] font-semibold uppercase text-black/45">
              {stat.label}
            </p>
            <p
              className={`mt-5 font-display text-4xl font-bold ${stat.tone}`}
            >
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      {loadError ? (
        <div className="rounded-[2px] border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          {loadError}
        </div>
      ) : null}

      {isLoading ? (
        <div className="grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2px] border border-black/10 bg-[#f8f7f3] p-5 animate-pulse">
            <div className="mb-5 h-4 w-28 rounded bg-black/10" />
            <div className="space-y-4">
              <div className="h-16 rounded bg-black/10" />
              <div className="h-16 rounded bg-black/10" />
            </div>
          </div>
          <div className="rounded-[2px] border border-black/10 bg-navy p-5 text-white animate-pulse">
            <div className="mb-4 h-4 w-24 rounded bg-white/20" />
            <div className="h-8 w-40 rounded bg-white/20" />
            <div className="mt-6 space-y-3">
              <div className="h-4 w-full rounded bg-white/20" />
              <div className="h-4 w-5/6 rounded bg-white/20" />
              <div className="h-4 w-4/6 rounded bg-white/20" />
            </div>
          </div>
        </div>
      ) : (
        <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2px] border border-black/10 bg-white p-5">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="font-display text-2xl font-bold text-navy">
                Quick summary
              </h2>
              <span className="font-accent text-[10px] font-semibold uppercase text-black/40">
                Live
              </span>
            </div>

            <div className="space-y-4">
              {[
                {
                  title: latestPortfolioEntry
                    ? latestPortfolioEntry.title
                    : "No portfolio item published yet",
                  type: "Portfolio",
                  time: latestPortfolioEntry?.publishedAt
                    ? new Date(
                        latestPortfolioEntry.publishedAt,
                      ).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })
                    : "Awaiting content",
                },
                {
                  title: `${podcastCount} videos from YouTube`,
                  type: "Podcasts",
                  time: "Live feed",
                },
              ].map((item) => (
                <div
                  key={`${item.type}-${item.title}`}
                  className="flex items-center justify-between gap-4 rounded-[2px] border border-black/10 bg-[#f8f7f3] p-4"
                >
                  <div>
                    <p className="font-accent text-[9px] font-semibold uppercase text-black/45">
                      {item.type}
                    </p>
                    <p className="mt-2 font-display text-xl font-bold text-navy">
                      {item.title}
                    </p>
                  </div>
                  <span className="font-accent text-[10px] uppercase text-black/45">
                    {item.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2px] border border-black/10 bg-navy p-5 text-white">
            <p className="font-accent text-[10px] font-semibold uppercase text-accent-cyan">
              Checklist
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold">
              Before publishing
            </h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-white/70">
              <li>• Check the final image crop</li>
              <li>• Confirm the title and date</li>
              <li>• Review podcast links and CTA</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case "overview":
        return renderOverviewPanel();
      case "portfolio":
        return renderPortfolioPanel();
      case "settings":
        return renderSettingsPanel();
      default:
        return renderOverviewPanel();
    }
  };

  return (
    <main className="min-h-screen bg-[#f5f4f0] text-navy selection:bg-primary selection:text-white">
      <div className="mx-auto max-w-[1500px] p-4 sm:p-6 lg:p-8">
        <div className="grid min-h-[calc(100vh-4rem)] overflow-hidden rounded-[2px] border border-black/10 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.04)] lg:grid-cols-[240px_minmax(0,1fr)]">
          <AdminSidebar
            activeSection={activeSection}
            onSectionChange={setActiveSection}
          />

          <section className="p-5 sm:p-6 lg:p-8">{renderContent()}</section>
        </div>
      </div>
    </main>
  );
}
