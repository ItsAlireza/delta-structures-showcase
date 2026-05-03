import { CheckCircle2 } from "lucide-react";

const points = [
  "AISC member firm with certified detailers on staff",
  "Tekla Structures and SDS/2 modeling capability",
  "ISO-style internal QA/QC review process",
  "Delegated connection design under licensed PE oversight",
];

const About = () => (
  <section id="about" className="section-padding bg-background">
    <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">
      <div>
        <div className="accent-bar" />
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Built by detailers, trusted by fabricators.
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-5">
          Delta Structures Group was founded in 2009 by structural detailers with decades
          of shop and field experience. We exist to make the fabricator's job easier — fewer
          RFIs, cleaner drawings, faster turnaround.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-8">
          Our team works as a true extension of yours, integrating into your project workflow
          from bid stage through final erection.
        </p>
        <ul className="space-y-3">
          {points.map((p) => (
            <li key={p} className="flex items-start gap-3 text-sm">
              <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="relative">
        <div className="aspect-[4/5] bg-primary text-primary-foreground p-10 lg:p-14 flex flex-col justify-between">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-accent">Our promise</span>
            <p className="mt-6 text-2xl lg:text-3xl font-semibold leading-snug">
              "Every line on a Delta drawing has been reviewed by a detailer who has built
              steel in the field."
            </p>
          </div>
          <div className="border-t border-primary-foreground/20 pt-6">
            <div className="font-semibold">Marcus Hale, P.E.</div>
            <div className="text-sm text-primary-foreground/70">Founder & Principal</div>
          </div>
        </div>
        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent -z-10 hidden lg:block" />
      </div>
    </div>
  </section>
);

export default About;
