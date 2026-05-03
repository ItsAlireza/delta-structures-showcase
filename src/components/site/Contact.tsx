import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => (
  <section id="contact" className="section-padding bg-primary text-primary-foreground">
    <div className="container-custom grid lg:grid-cols-2 gap-16">
      <div>
        <div className="inline-block w-12 h-1 bg-accent mb-4" />
        <h2 className="text-3xl md:text-5xl font-bold mb-5">Let's detail your next project.</h2>
        <p className="text-lg text-primary-foreground/75 leading-relaxed max-w-lg">
          Send us your bid drawings or RFP and we'll respond with a fixed-fee proposal and
          schedule within 48 hours.
        </p>

        <div className="mt-12 space-y-5">
          {[
            { icon: Mail, label: "Email", value: "info@deltastructures.com" },
            { icon: Phone, label: "Phone", value: "+1 (713) 555-0140" },
            { icon: MapPin, label: "Office", value: "Houston, TX · Remote across North America" },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-sm bg-primary-foreground/10 flex items-center justify-center">
                <Icon className="h-5 w-5 text-accent" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-primary-foreground/60">{label}</div>
                <div className="font-medium mt-0.5">{value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          window.location.href = "mailto:info@deltastructures.com";
        }}
        className="bg-background text-foreground p-8 lg:p-10 rounded-sm space-y-5"
      >
        <h3 className="text-xl font-semibold">Request a quote</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <input required placeholder="Full name" className="w-full px-4 py-3 border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
          <input required type="email" placeholder="Email" className="w-full px-4 py-3 border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
        </div>
        <input placeholder="Company" className="w-full px-4 py-3 border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
        <input placeholder="Project name / location" className="w-full px-4 py-3 border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
        <textarea required rows={5} placeholder="Tell us about your scope, tonnage, and schedule..." className="w-full px-4 py-3 border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent resize-none" />
        <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
          Send Inquiry
        </Button>
      </form>
    </div>
  </section>
);

export default Contact;
