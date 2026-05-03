import { Boxes, Building2, Cog, Compass, Layers, Ruler } from "lucide-react";

const services = [
  { icon: Ruler, title: "Shop Drawings", desc: "Fabrication-ready drawings detailed to AISC and CISC standards with full QA review." },
  { icon: Boxes, title: "3D BIM Modeling", desc: "Tekla Structures and SDS/2 models for clash-free coordination with all trades." },
  { icon: Cog, title: "Connection Design", desc: "Delegated connection design for moment, brace, and seismic frames." },
  { icon: Building2, title: "Erection Drawings", desc: "Field-ready erection plans, anchor bolt layouts, and lift studies." },
  { icon: Layers, title: "Miscellaneous Metals", desc: "Stairs, handrails, ladders, platforms, and AESS detailing." },
  { icon: Compass, title: "BIM Coordination", desc: "Federated model coordination, RFI tracking, and constructability reviews." },
];

const Services = () => (
  <section id="services" className="section-padding bg-background">
    <div className="container-custom">
      <div className="max-w-2xl mb-16">
        <div className="accent-bar" />
        <h2 className="text-3xl md:text-5xl font-bold mb-4">What we do</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          A full-service detailing partner from concept review through fabrication and
          erection — committed to schedule, accuracy, and constructability.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
        {services.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="bg-card p-8 hover:bg-secondary transition-colors group">
            <div className="h-12 w-12 rounded-sm bg-primary text-primary-foreground flex items-center justify-center mb-5 group-hover:bg-accent transition-colors">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
