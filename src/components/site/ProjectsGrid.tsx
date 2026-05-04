import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";

const ProjectsGrid = () => (
  <section id="projects" className="section-padding" style={{ background: "var(--gradient-section)" }}>
    <div className="container-custom">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
        <div className="max-w-2xl">
          <div className="accent-bar" />
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Selected projects</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From cross-dock warehouses to long-span stadium roofs, our portfolio spans every
            major sector of structural steel construction.
          </p>
        </div>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:gap-3 transition-all whitespace-nowrap"
        >
          View all projects <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <Link
            key={p.slug}
            to={`/projects/${p.slug}`}
            className="group bg-card border border-border overflow-hidden hover:shadow-[var(--shadow-lg)] transition-all duration-300"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
              <img
                src={p.image}
                alt={p.title}
                width={1280}
                height={896}
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
  </section>
);

export default ProjectsGrid;
