import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Clock3 } from "lucide-react";
import ArticleShare from "@/components/articles/ArticleShare";
import { newsApi, type NewsArticle } from "@/config/api";

const articleBodies: Record<string, string[]> = {
  "nairobi-after-dark": [
    "Nairobi is rarely still, but after sunset the city changes character entirely. The streets keep moving, yet the mood becomes more intimate and observational, with storefronts glowing, music spilling from corners, and conversations unfolding in pockets of light.",
    "That shift is what the new generation of creators is responding to. They are recording the energy of the city in its own terms: slower, more textured, and closer to the people who give it life. The result is a visual language that feels distinctly local while still speaking to a global audience.",
    "From rooftop gatherings to improvised film sets, the city is producing a culture of making that is rooted in collaboration. In Nairobi, creativity does not wait for perfect conditions. It moves with the city, capturing fragments of rhythm, memory, and belonging.",
  ],
  "new-african-cinema": [
    "Across the continent, a new wave of filmmakers is rethinking what cinematic storytelling can look like outside the traditional studio model. The tools are smaller, the budgets sharper, and the ambitions wider. That combination is producing work with a stronger point of view and a more intimate relationship to place.",
    "What makes this era distinct is not just the subject matter, but the way the films are produced. Directors are working with compact crews, local crews, and community trust to build images that feel earned instead of manufactured. The process has become as much a conversation as a production schedule.",
    "The result is a cinema that is confident, tactile, and unmistakably contemporary. It is not trying to imitate the old architecture of screen culture. It is building its own frame, one scene at a time.",
  ],
  "sound-of-the-street": [
    "The street is never silent. It is a place of layered sound: scooters moving past, hawkers calling out, neighbors greeting one another, and music leaking from the nearest corner shop. To listen carefully is to understand a city in motion.",
    "That is why field recordings and oral storytelling have become central to how communities document their own histories. Sound is not an afterthought in this work; it is the atmosphere, the heartbeat, and often the most honest evidence of place.",
    "When producers gather these textures into a narrative, they do more than preserve ambience. They create a listening archive of memory, resistance, and everyday life, reminding us that the unspectacular often carries the most truth.",
  ],
  "makers-of-tomorrow": [
    "The future is often imagined from large studios or polished offices, but the most inventive work is still being built from borrowed spaces, improvised schedules, and communities that understand the value of making do.",
    "These creators are not waiting for permission. They are repurposing rooms, sharing tools, and building durable networks around mutual trust. In doing so, they are making art, business, and culture at the same time.",
    "Their stories matter because they reveal the practical reality behind ambition. Behind every creative practice is a system of support, risk, and persistence that deserves to be seen as clearly as the final result itself.",
  ],
};

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  let article: NewsArticle;

  try {
    const response = await newsApi.getBySlug(id);
    article = response.data;
  } catch {
    notFound();
  }

  const relatedStories = (await newsApi.list({ limit: 4 })).data
    .filter((story) => story.slug !== article.slug)
    .slice(0, 3);

  const body = article.content
    ? [article.content]
    : (articleBodies[article.slug] ?? [
        "The story behind this feature is rooted in the people, places, and ideas shaping the creative economy today.",
        "By documenting the details that often go unnoticed, this work invites the reader to slow down and pay closer attention to the textures of modern life.",
        "It is a reminder that good stories are often built from conversations, repetition, and the courage to look a little longer.",
      ]);

  return (
    <main className="min-h-screen bg-[#f5f4f0] text-navy selection:bg-primary selection:text-white">
      <article className="mx-auto max-w-[1400px] px-5 pb-20 pt-8 sm:px-8 lg:px-12 lg:pt-12">
        <div className="mb-8 flex items-center justify-between border-b border-black/10 pb-4">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 font-accent text-[10px] font-semibold uppercase tracking-[0.18em] text-black/55 transition-colors hover:text-primary"
          >
            <ArrowLeft size={14} />
            Back to news
          </Link>
          <span className="font-accent text-[10px] uppercase tracking-[0.18em] text-black/40">
            {article.category}
          </span>
        </div>

        <header className="mx-auto max-w-[1100px]">
          <div className="mb-6 flex flex-wrap items-center gap-3 font-accent text-[10px] font-semibold uppercase tracking-[0.17em] text-black/45">
            <span>
              {article.publishedAt
                ? new Intl.DateTimeFormat("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  }).format(new Date(article.publishedAt))
                : "Recently published"}
            </span>
            <span aria-hidden="true">•</span>
            <span className="inline-flex items-center gap-1.5">
              <Clock3 size={13} /> {article.readTime}
            </span>
          </div>

          <h1 className="max-w-4xl font-display text-4xl font-bold leading-[0.96] tracking-[-0.04em] text-navy sm:text-5xl lg:text-7xl">
            {article.title}
          </h1>

          <div className="mt-6 flex flex-col gap-5 border-y border-black/10 py-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-accent text-[10px] uppercase tracking-[0.18em] text-black/45">
                By
              </p>
              <p className="mt-2 font-display text-xl font-semibold text-navy">
                {article.author}
              </p>
            </div>
            <div className="rounded-full border border-black/10 bg-white px-4 py-2 font-accent text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
              Story feature
            </div>
          </div>
        </header>

        <div className="mx-auto mt-10 max-w-[1200px] overflow-hidden rounded-[2px] border border-black/10 bg-white shadow-[0_25px_80px_rgba(15,23,42,0.08)]">
          <div className="relative aspect-[16/9] w-full bg-navy">
            <Image
              src={article.coverImage}
              alt={article.title}
              fill
              priority
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 1200px"
            />
          </div>
        </div>

        <div className="mx-auto mt-12 grid max-w-[1100px] gap-10 lg:grid-cols-[minmax(0,1fr)_260px]">
          <div className="space-y-6 text-[1.05rem] leading-8 text-black/70">
            <p className="text-lg font-medium text-navy">
              {article.description}
            </p>

            {body.map((paragraph, index) => (
              <p key={`${article.id}-paragraph-${index}`}>{paragraph}</p>
            ))}
          </div>

          <aside className="lg:pt-8">
            <div className="rounded-[2px] border border-black/10 bg-white p-5 shadow-sm">
              <p className="font-accent text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
                In this story
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-black/65">
                <li>• Editorial perspective</li>
                <li>• Cultural context</li>
                <li>• Visual storytelling</li>
                <li>• Community and craft</li>
              </ul>
            </div>
          </aside>
        </div>

        <div className="mx-auto max-w-[1100px]">
          <ArticleShare title={article.title} />
        </div>

        <section className="mx-auto mt-16 max-w-[1100px] border-t border-black/10 pt-10">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="font-accent text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
                More stories
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-[-0.03em] text-navy">
                Continue reading
              </h2>
            </div>
            <Link
              href="/news"
              className="inline-flex items-center gap-2 font-accent text-[10px] font-semibold uppercase tracking-[0.18em] text-navy transition-colors hover:text-primary"
            >
              View all news
              <ArrowUpRight size={14} />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {relatedStories.map((story) => (
              <Link
                key={story.id}
                href={`/articles/${story.slug}`}
                className="group block overflow-hidden rounded-[2px] border border-black/10 bg-white transition-shadow duration-300 hover:shadow-[0_18px_45px_rgba(15,23,42,0.12)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-navy">
                  <Image
                    src={story.coverImage}
                    alt={story.title}
                    fill
                    className="object-cover object-top transition duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <p className="font-accent text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
                    {story.category}
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-bold leading-[1.05] tracking-[-0.02em] text-navy">
                    {story.title}
                  </h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-black/60">
                    {story.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}
