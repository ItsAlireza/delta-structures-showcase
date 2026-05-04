import warehouse from "@/assets/project-warehouse.jpg";
import bridge from "@/assets/project-bridge.jpg";
import tower from "@/assets/project-tower.jpg";
import stadium from "@/assets/project-stadium.jpg";
import refinery from "@/assets/project-refinery.jpg";
import terminal from "@/assets/project-terminal.jpg";
import hero from "@/assets/hero-steel.jpg";

export type Project = {
  slug: string;
  title: string;
  category: string;
  location: string;
  year: string;
  client: string;
  tonnage: string;
  scope: string[];
  summary: string;
  description: string;
  image: string;
  images: string[];
};

export const projects: Project[] = [
  {
    slug: "northgate-industrial-warehouse",
    title: "Northgate Industrial Warehouse",
    category: "Industrial",
    location: "Houston, TX",
    year: "2024",
    client: "Northgate Logistics Inc.",
    tonnage: "1,850 tons",
    scope: ["Anchor Bolt Plans", "Erection Drawings", "Connection Design", "Shop Drawings"],
    summary: "Full shop drawing package for a 220,000 sq ft pre-engineered distribution center.",
    description:
      "Delta Structures Group delivered the complete detailing scope for this 220,000 sq ft cross-dock distribution facility. Our team modeled the primary frames, secondary framing, bracing, crane runways, and miscellaneous metals in Tekla Structures, coordinating closely with the EOR and the steel fabricator to compress the detailing schedule by four weeks.",
    image: warehouse,
    images: [warehouse, hero, refinery],
  },
  {
    slug: "riverside-pedestrian-bridge",
    title: "Riverside Pedestrian Bridge",
    category: "Bridges",
    location: "Pittsburgh, PA",
    year: "2023",
    client: "PennDOT",
    tonnage: "420 tons",
    scope: ["3D Modeling", "Erection Drawings", "Camber Diagrams", "CNC Files"],
    summary: "A 180-ft truss pedestrian bridge over an active interstate corridor.",
    description:
      "A 180-ft single-span weathering steel truss spanning eight lanes of interstate traffic. Detailing included full camber control, splice optimization, and lift-plan coordination for a 6-hour overnight road closure installation window.",
    image: bridge,
    images: [bridge, hero, terminal],
  },
  {
    slug: "meridian-tower",
    title: "Meridian Tower",
    category: "Commercial",
    location: "Chicago, IL",
    year: "2024",
    client: "Meridian Development Group",
    tonnage: "6,200 tons",
    scope: ["Tekla Modeling", "Shop Drawings", "BIM Coordination", "RFIs"],
    summary: "32-story mixed-use tower with composite steel framing and a moment-resisting core.",
    description:
      "Detailed all 32 floors of structural steel including composite floor framing, perimeter moment frames, and an interior braced core. Our BIM coordination workflow resolved more than 1,200 clashes with MEP trades prior to fabrication release.",
    image: tower,
    images: [tower, hero, stadium],
  },
  {
    slug: "horizon-stadium-roof",
    title: "Horizon Stadium Roof",
    category: "Sports & Entertainment",
    location: "Denver, CO",
    year: "2022",
    client: "Horizon Athletics Authority",
    tonnage: "3,100 tons",
    scope: ["Long-Span Truss Detailing", "Erection Engineering", "Shop Drawings"],
    summary: "Long-span cantilever truss roof covering 18,000 stadium seats.",
    description:
      "A complex tubular steel truss roof with cantilevers up to 95 ft. Delta provided full long-span detailing, splice design coordination, and erection sequencing drawings that supported a phased install around an active venue schedule.",
    image: stadium,
    images: [stadium, terminal, hero],
  },
  {
    slug: "gulfside-refinery-pipe-rack",
    title: "Gulfside Refinery Pipe Rack",
    category: "Petrochemical",
    location: "Baton Rouge, LA",
    year: "2023",
    client: "Gulfside Energy Partners",
    tonnage: "2,400 tons",
    scope: ["Modular Pipe Rack Detailing", "Anchor Plans", "AISC Compliance"],
    summary: "Six-level modular pipe rack supporting process piping for a refinery expansion.",
    description:
      "Modular pipe rack and equipment support steel for a brownfield refinery expansion. Detailing was sequenced to match the modular fabrication strategy, allowing rack sections to be skidded in during a 14-day turnaround.",
    image: refinery,
    images: [refinery, hero, warehouse],
  },
  {
    slug: "skyport-terminal-expansion",
    title: "Skyport Terminal Expansion",
    category: "Aviation",
    location: "Atlanta, GA",
    year: "2025",
    client: "Skyport Aviation Authority",
    tonnage: "2,750 tons",
    scope: ["Curved Roof Detailing", "BIM Coordination", "Shop Drawings"],
    summary: "Curved long-span roof structure for a new international concourse.",
    description:
      "Detailing of curved tapered box girders and tubular trusses forming the signature roof of a new international concourse. Tight tolerances on the exposed AESS members required Category 4 finish coordination with the fabricator.",
    image: terminal,
    images: [terminal, hero, stadium],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

export const categories = Array.from(new Set(projects.map((p) => p.category))).sort();
