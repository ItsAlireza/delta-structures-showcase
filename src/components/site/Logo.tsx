import { Link } from "react-router-dom";

const Logo = ({ light = false }: { light?: boolean }) => (
  <Link to="/" className="flex items-center gap-2.5 group">
    <span className="relative flex h-9 w-9 items-center justify-center rounded-sm bg-accent text-accent-foreground font-bold text-lg">
      Δ
    </span>
    <span className={`flex flex-col leading-tight ${light ? "text-primary-foreground" : "text-foreground"}`}>
      <span className="font-semibold tracking-wide text-sm">DELTA STRUCTURES</span>
      <span className="text-[10px] uppercase tracking-[0.25em] opacity-70">Group</span>
    </span>
  </Link>
);

export default Logo;
