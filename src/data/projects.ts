export type Project = {
  tagline: string;
  title: string;
  value: string;
  detail?: string;
};

export const projects: Project[] = [
  {
    tagline: "Cut data latency from hours to seconds",
    title: "Realtime ingestion pipeline",
    value:
      "Re-architected the ingestion path so downstream teams act on fresh data, unlocking realtime product features.",
    detail:
      "Replaced batch ETL with a streaming pipeline (back-pressure, exactly-once delivery), cutting infra cost ~30% while improving freshness.",
  },
  {
    tagline: "Unblocked enterprise revenue",
    title: "Billing platform rebuild",
    value:
      "Led the redesign of the billing core for usage-based pricing and multi-currency, removing a key sales blocker.",
  },
  {
    tagline: "Halved time-to-production",
    title: "Developer platform & CI",
    value: "Built golden-path tooling and CI so teams ship safely without bespoke setup.",
    detail:
      "Standardised build/test/deploy, added preview environments and policy checks, measurably reducing incidents.",
  },
  {
    tagline: "+18% conversion on key flows",
    title: "Search relevance overhaul",
    value: "Reworked ranking and query understanding to lift engagement and conversion.",
  },
  {
    tagline: "From guesswork to evidence",
    title: "Observability rollout",
    value:
      "Introduced tracing, metrics and SLOs across services, shrinking MTTR and informing prioritisation.",
  },
];
