import hero from "@/assets/hero-steel.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden">
    <img
      src={hero}
      alt="Steel structure under construction at twilight"
      width={1920}
      height={1088}
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
    <div className="container-custom relative z-10 pt-24 pb-12 text-primary-foreground">
      <div className="accent-bar" />
      <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-primary-foreground/70 mb-6">
        Structural Steel Detailing · Est. 2009
      </p>
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold max-w-4xl leading-[1.05]">
        Engineering precision in every connection.
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-primary-foreground/80 leading-relaxed">
        Delta Structures Group delivers shop drawings, BIM coordination, and connection
        detailing for steel fabricators and general contractors building the next generation
        of industrial, commercial, and infrastructure projects.
      </p>
      <div className="mt-10 flex flex-col sm:flex-row gap-4">
        <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
          <a href="#projects">
            View Our Projects <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
        <Button
          asChild
          size="lg"
          variant="outline"
          className="bg-transparent border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
        >
          <a href="#contact">Start a Project</a>
        </Button>
      </div>

      <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl border-t border-primary-foreground/15 pt-10">
        {[
          ["15+", "Years of Practice"],
          ["240+", "Projects Delivered"],
          ["80K+", "Tons Detailed"],
          ["AISC", "Member Firm"],
        ].map(([k, v]) => (
          <div key={v}>
            <div className="text-2xl md:text-3xl font-bold text-accent">{k}</div>
            <div className="text-xs uppercase tracking-widest text-primary-foreground/70 mt-1">{v}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Hero;
