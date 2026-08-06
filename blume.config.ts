import { defineConfig } from "blume";
import { z } from "zod";

export default defineConfig({
  title: "Docs-as-Code Primer",
  description:
    "A teaching kit for documentation judgment — 19 primer chapters, 35 templates, and a worked example.",

  logo: "/icon.svg",

  // GitHub repository link for edit buttons
  github: {
    owner: "snowballons",
    repo: "docs-as-code-primer",
    branch: "main",
  },

  // Content from the repo root (but not scaffold or node_modules)
  content: {
    root: ".",
    exclude: ["node_modules/**", "scaffold/**"],
  },

  // Allow custom frontmatter fields
  frontmatter: {
    extend: {
      order: z.number().optional(),
    },
  },

  // Theme
  theme: {
    accent: "blue",
    radius: "md",
    mode: "system",
  },

  // SEO
  seo: {
    og: { enabled: true },
    rss: { enabled: false },
    sitemap: true,
    robots: true,
    structuredData: true,
  },

  // Table of contents - show up to 3 levels
  toc: {
    minHeadingLevel: 2,
    maxHeadingLevel: 4,
  },

  // Search with local index
  search: {
    provider: "orama",
  },

  // AI / llms
  ai: {
    llmsTxt: true,
    mcp: {
      enabled: false,
    },
  },

  // Markdown rendering
  markdown: {
    imageZoom: true,
    code: {
      icons: true,
      wrap: false,
    },
  },

  // Deploy to GitHub Pages
  deployment: {
    site: "https://snowballons.github.io/docs-as-code-primer",
    base: "/docs-as-code-primer",
    output: "static",
  },

  // Navigation — book-style, primer first
  navigation: {
    sidebar: {
      display: "group",
      items: [
        // ── Primer chapters (19) ──
        // Blume strips numeric prefixes (01-) from routes
        {
          label: "Primer",
          collapsed: false,
          display: "page",
          items: [
            { label: "01 What Docs as Code means", href: "/primer/what-is-docs-as-code" },
            { label: "02 Two audiences", href: "/primer/two-audiences" },
            { label: "03 Phases overview", href: "/primer/phases-overview" },
            { label: "04 Phase 0: Charter", href: "/primer/phase-0-charter" },
            { label: "05 Phase 1: Requirements", href: "/primer/phase-1-requirements" },
            { label: "06 Phase 2: Architecture", href: "/primer/phase-2-architecture" },
            { label: "07 Phase 3: Detailed design", href: "/primer/phase-3-detailed-design" },
            { label: "08 Phase 4: Implementation", href: "/primer/phase-4-implementation" },
            { label: "09 Phase 5: Testing", href: "/primer/phase-5-testing" },
            { label: "10 Phase 6: Operations", href: "/primer/phase-6-operations" },
            { label: "11 Phase 7: User docs", href: "/primer/phase-7-user-docs" },
            { label: "12 Phase 8: Maintenance", href: "/primer/phase-8-maintenance" },
            { label: "13 Phase 9: Retirement", href: "/primer/phase-9-retirement" },
            { label: "14 Content governance", href: "/primer/content-governance" },
            { label: "15 Diagrams as code", href: "/primer/diagrams-as-code" },
            { label: "16 CI and quality gates", href: "/primer/ci-and-quality-gates" },
            { label: "17 Agent-ready docs", href: "/primer/agent-ready-docs" },
            { label: "18 Anti-patterns", href: "/primer/anti-patterns" },
            { label: "19 Why now 2026?", href: "/primer/why-now-2026" },
          ],
        },

        // ── Appendix ──
        {
          label: "Appendix",
          items: [
            "/appendix/phase-folder-map",
            "/appendix/glossary",
            "/appendix/maturity-model",
            "/appendix/tooling-map",
            "/appendix/agent-skills",
            "/appendix/bad-examples-gallery",
            "/appendix/ecosystem-comparison",
          ],
        },

        // ── Templates ──
        {
          label: "Templates",
          items: [
            "/templates/adr",
            "/templates/archival-policy",
            "/templates/c4-architecture-outline",
            "/templates/contribution-guide",
            "/templates/cross-cutting-concerns-checklist",
            "/templates/db-schema-migration",
            "/templates/deprecation-notice",
            "/templates/dr-plan",
            "/templates/feature-user-doc",
            "/templates/frontend-architecture",
            "/templates/functional-requirements",
            "/templates/getting-started",
            "/templates/incident-retrospective",
            "/templates/internal-changelog",
            "/templates/knowledge-transfer",
            "/templates/migration-guide",
            "/templates/module-spec",
            "/templates/nfr",
            "/templates/on-call-handbook",
            "/templates/persona",
            "/templates/retirement-kt",
            "/templates/runbook",
            "/templates/security-threat-model",
            "/templates/sequence-diagram-page",
            "/templates/slo",
            "/templates/state-machine-page",
            "/templates/test-case",
            "/templates/test-strategy",
            "/templates/troubleshooting",
            "/templates/tutorial",
            "/templates/user-changelog",
            "/templates/user-journey",
            "/templates/user-story",
            "/templates/vision-charter",
          ],
        },

        // ── Recipes ──
        {
          label: "Recipes",
          items: [
            "/recipes/mkdocs",
            "/recipes/docusaurus",
            "/recipes/mintlify",
            "/recipes/gh-pages",
            "/recipes/cf-pages",
            "/recipes/dual-publish",
            "/recipes/mermaid-in-ci",
            "/recipes/vale",
            "/recipes/openapi-to-user-api-ref",
            "/recipes/monorepo-paths",
            "/recipes/mkdocs-e2e",
          ],
        },

        // ── Examples ──
        {
          label: "Examples",
          collapsed: false,
          items: [
            { label: "Overview", href: "/examples/acme-export-platform/README" },
            { label: "Charter: vision", href: "/examples/acme-export-platform/internal/charter/vision" },
            { label: "Charter: scope", href: "/examples/acme-export-platform/internal/charter/scope" },
            { label: "Charter: stakeholders", href: "/examples/acme-export-platform/internal/charter/stakeholders" },
            { label: "Charter: constraints", href: "/examples/acme-export-platform/internal/charter/constraints-assumptions" },
            { label: "Charter: risk register", href: "/examples/acme-export-platform/internal/charter/risk-register" },
            { label: "Requirements: personas", href: "/examples/acme-export-platform/internal/requirements/personas/persona-enterprise-admin" },
            { label: "Requirements: user journeys", href: "/examples/acme-export-platform/internal/requirements/user-journeys/enterprise-admin-export" },
            { label: "Requirements: user stories", href: "/examples/acme-export-platform/internal/requirements/user-stories/export-csv" },
            { label: "Requirements: functional", href: "/examples/acme-export-platform/internal/requirements/functional" },
            { label: "Requirements: non-functional", href: "/examples/acme-export-platform/internal/requirements/non-functional" },
            { label: "Architecture: context diagram", href: "/examples/acme-export-platform/internal/architecture/context-diagram" },
            { label: "Architecture: container diagram", href: "/examples/acme-export-platform/internal/architecture/container-diagram" },
            { label: "Decisions: ADR 001", href: "/examples/acme-export-platform/internal/decisions/adr-001-queue-for-exports" },
            { label: "System design: export service", href: "/examples/acme-export-platform/internal/system-design/services/export-service" },
            { label: "System design: queue architecture", href: "/examples/acme-export-platform/internal/system-design/export-queue-architecture" },
            { label: "System design: security design", href: "/examples/acme-export-platform/internal/system-design/security-design" },
            { label: "System design: database schema", href: "/examples/acme-export-platform/internal/system-design/database/schema" },
            { label: "System design: API spec", href: "/examples/acme-export-platform/internal/system-design/api-specs/export-api" },
            { label: "System design: sequence diagram", href: "/examples/acme-export-platform/internal/system-design/sequence-diagrams/export-processing" },
            { label: "System design: state machine", href: "/examples/acme-export-platform/internal/system-design/state-machines/export-job-lifecycle" },
            { label: "Operations: deploy pipeline", href: "/examples/acme-export-platform/internal/operations/deploy-pipeline" },
            { label: "Operations: SLOs", href: "/examples/acme-export-platform/internal/operations/slos" },
            { label: "Operations: monitoring", href: "/examples/acme-export-platform/internal/operations/monitoring" },
            { label: "Runbooks: export queue backlog", href: "/examples/acme-export-platform/internal/operations/runbooks/export-queue-backlog" },
            { label: "User docs: quickstart", href: "/examples/acme-export-platform/user/getting-started/quickstart" },
            { label: "User docs: features", href: "/examples/acme-export-platform/user/features/scheduled-exports" },
            { label: "User docs: changelog", href: "/examples/acme-export-platform/user/changelog/2024-03-15-export-improvements" },
            { label: "User docs: troubleshooting", href: "/examples/acme-export-platform/user/troubleshooting/export-issues" },
            { label: "User docs: tutorials", href: "/examples/acme-export-platform/user/tutorials/schedule-automated-exports" },
            { label: "User docs: API reference", href: "/examples/acme-export-platform/user/api-reference/overview" },
            { label: "Phase 8: internal changelog", href: "/examples/acme-export-platform/internal/changelog-2026-q1" },
            { label: "Phase 8: incident retrospective", href: "/examples/acme-export-platform/internal/retrospectives/2026-02-11-worker-oom-crash-loop" },
            { label: "Phase 9: retirement plan", href: "/examples/acme-export-platform/internal/charter/retirement-v1-export-legacy" },
          ],
        },

        // ── About ──
        {
          label: "About",
          items: [
            { label: "Introduction", href: "/README" },
            { label: "First week", href: "/FIRST_WEEK" },
            { label: "Learning path", href: "/LEARNING_PATH" },
            { label: "Contributing", href: "/CONTRIBUTING" },
            { label: "Code of conduct", href: "/CODE_OF_CONDUCT" },
            { label: "Security", href: "/SECURITY" },
            { label: "Comparison with other resources", href: "/appendix/ecosystem-comparison" },
          ],
        },
      ],
    },
  },
});
