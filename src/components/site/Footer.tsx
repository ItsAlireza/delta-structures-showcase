import Logo from "./Logo";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container-custom py-16 grid md:grid-cols-4 gap-10">
      <div className="md:col-span-2">
        <Logo light />
        <p className="mt-5 text-sm text-primary-foreground/70 max-w-sm leading-relaxed">
          Precision steel detailing and shop drawing services for fabricators, contractors, and engineers across North America.
        </p>
      </div>
      <div>
        <h4 className="text-sm font-semibold tracking-widest uppercase mb-4">Office</h4>
        <p className="text-sm text-primary-foreground/70 leading-relaxed">
          1200 Industrial Pkwy<br />
          Suite 410<br />
          Houston, TX 77002
        </p>
      </div>
      <div>
        <h4 className="text-sm font-semibold tracking-widest uppercase mb-4">Contact</h4>
        <p className="text-sm text-primary-foreground/70 leading-relaxed">
          info@deltastructures.com<br />
          +1 (713) 555-0140
        </p>
      </div>
    </div>
    <div className="border-t border-primary-foreground/10">
      <div className="container-custom py-6 flex flex-col md:flex-row justify-between gap-3 text-xs text-primary-foreground/60">
        <span>© {new Date().getFullYear()} Delta Structures Group. All rights reserved.</span>
        <span>AISC Member · Tekla Structures Certified</span>
      </div>
    </div>
  </footer>
);

export default Footer;
