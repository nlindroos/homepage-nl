export type Engagement = {
  client: string;
  description: string;
};

export type ExperienceEntry = {
  period: string;
  role: string;
  company: string;
  description?: string;
  summary?: string;
  engagements?: Engagement[];
};

export const experience: ExperienceEntry[] = [
  {
    period: "2022 — Present",
    role: "Staff Engineer",
    company: "HappySignals",
    description:
      "Architecture and platform direction spanning product, infrastructure and developer experience.",
  },
  {
    period: "2016 — 2022",
    role: "Senior Consultant",
    company: "Acme Consulting",
    summary:
      "Embedded with seven client teams across fintech, health and logistics — one employer, many missions.",
    engagements: [
      { client: "Nordic retail bank", description: "Real-time fraud scoring platform." },
      { client: "Health-tech scale-up", description: "HIPAA-ready data pipeline." },
      { client: "Logistics operator", description: "Route optimisation service." },
      { client: "Public sector agency", description: "Identity and access modernisation." },
      { client: "Fintech startup", description: "Payments ledger rebuild." },
      { client: "Media group", description: "Headless content platform." },
      { client: "Insurance carrier", description: "Claims automation engine." },
    ],
  },
  {
    period: "2013 — 2016",
    role: "Software Engineer",
    company: "Northwind Labs",
    description: "Shipped customer-facing features across the stack.",
  },
  {
    period: "2011 — 2013",
    role: "Software Engineer",
    company: "Initech",
    description: "Full-stack delivery and the foundations of an outcome-driven approach.",
  },
];
