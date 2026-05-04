import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, ArrowRight, MapPin, Calendar, Building2, Weight } from "lucide-react";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import { getProject, projects } from "@/data/projects";
import { Button } from "@/components/ui/button";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = slug ? getProject(slug) : undefined;

  useEffect(() => {
    if (project) {
      document.title = `${project.title} | Delta Structures Group`;
    }
    window.scrollTo(0, 0);
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="container-custom pt-40 pb-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Project not found</h1>
          <Button asChild><Link to="/">Back to home</Link></Button>
        </main>
        <Footer />
      </div>
    );
  }

  const idx = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(idx + 1) % projects.length];

  const facts = [
    { icon: MapPin, label: "Location", value: project.location },
    { icon: Calendar, label: "Year", value: project.year },
    { icon: Building2, label: "Client", value: project.client },
    { icon: Weight, label: "Tonnage", value: project.tonnage },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <section className="relative h-[70vh] min-h-[480px] flex items-end overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            width={1280}
            height={896}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
          <div className="container-custom relative z-10 pb-16 text-primary-foreground">
            <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-accent mb-6">
              <ArrowLeft className="h-4 w-4" /> All Projects
            </Link>
            <span className="inline-block bg-accent text-accent-foreground px-3 py-1 text-[11px] font-semibold uppercase tracking-widest mb-4">
              {project.category}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold max-w-4xl leading-[1.05]">{project.title}</h1>
            <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl">{project.summary}</p>
          </div>
        </section>

        <section className="border-b border-border bg-background">
          <div className="container-custom grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
            {facts.map(({ icon: Icon, label, value }) => (
              <div key={label} className="bg-background p-6 md:p-8">
                <Icon className="h-5 w-5 text-accent mb-3" />
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
                <div className="font-semibold mt-1">{value}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <div className="accent-bar" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Project overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{project.description}</p>

              <h3 className="text-xl font-semibold mt-12 mb-4">Approach</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our team integrated early with the fabricator and engineer of record, running
                weekly coordination calls and tracking design RFIs through resolution. The model
                was published in incremental release packages to support a fast-track fabrication
                schedule, with QA sign-off at every stage.
              </p>

              {project.images && project.images.length > 0 && (
                <>
                  <h3 className="text-xl font-semibold mt-12 mb-6">Project gallery</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {project.images.map((src, i) => (
                      <div key={i} className="aspect-[4/3] overflow-hidden bg-secondary">
                        <img
                          src={src}
                          alt={`${project.title} — image ${i + 1}`}
                          loading="lazy"
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>

            <aside className="bg-secondary p-8">
              <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-5">Scope of work</h3>
              <ul className="space-y-3">
                {project.scope.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-sm font-medium">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
              <Button asChild className="w-full mt-8 bg-accent hover:bg-accent/90 text-accent-foreground">
                <a href="/#contact">Discuss a Similar Project</a>
              </Button>
            </aside>
          </div>
        </section>

        <section className="border-t border-border bg-secondary">
          <Link to={`/projects/${next.slug}`} className="container-custom flex items-center justify-between py-12 group">
            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Next project</div>
              <div className="text-2xl md:text-3xl font-bold group-hover:text-accent transition-colors">{next.title}</div>
            </div>
            <ArrowRight className="h-8 w-8 text-muted-foreground group-hover:text-accent group-hover:translate-x-2 transition-all" />
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
