import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import { categories, projects } from "@/data/projects";
import { cn } from "@/lib/utils";

const Projects = () => {
  const [active, setActive] = useState<string | "All">("All");

  useEffect(() => {
    document.title = "Projects | Delta Structures Group";
  }, []);

  const filtered = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.category === active)),
    [active],
  );

  const counts = useMemo(() => {
    const map: Record<string, number> = { All: projects.length };
    categories.forEach((c) => (map[c] = projects.filter((p) => p.category === c).length));
    return map;
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="pt-32 pb-20 bg-background">
        <div className="container-custom">
          <div className="mb-12">
            <div className="accent-bar" />
            <h1 className="text-4xl md:text-5xl font-bold mb-3">Projects</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Browse our portfolio of structural steel detailing work, organized by sector.
            </p>
          </div>

          <div className="grid lg:grid-cols-[260px_1fr] gap-12">
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <h2 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
                Categories
              </h2>
              <ul className="space-y-1 border-l border-border">
                {(["All", ...categories] as const).map((cat) => {
                  const isActive = active === cat;
                  return (
                    <li key={cat}>
                      <button
                        onClick={() => setActive(cat)}
                        className={cn(
                          "w-full text-left pl-4 py-2.5 -ml-px border-l-2 flex items-center justify-between text-sm transition-colors",
                          isActive
                            ? "border-accent text-accent font-semibold"
                            : "border-transparent text-foreground/70 hover:text-foreground hover:border-border",
                        )}
                      >
                        <span>{cat}</span>
                        <span className="text-xs text-muted-foreground">{counts[cat]}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </aside>

            <div className="grid sm:grid-cols-2 gap-6">
              {filtered.map((p) => (
                <Link
                  key={p.slug}
                  to={`/projects/${p.slug}`}
                  className="group bg-card border border-border overflow-hidden hover:shadow-[var(--shadow-lg)] transition-all duration-300"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-4 left-4 bg-background/90 backdrop-blur px-3 py-1 text-[11px] font-semibold uppercase tracking-widest">
                      {p.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-lg font-semibold group-hover:text-accent transition-colors">
                        {p.title}
                      </h3>
                      <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors shrink-0" />
                    </div>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{p.summary}</p>
                    <div className="mt-5 pt-5 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
                      <span>{p.location}</span>
                      <span>{p.year}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
