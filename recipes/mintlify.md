# Recipe: Mintlify (hosted)

Use when you want Git-synced hosting with less SSG maintenance.

## Pattern

1. Keep this kit's `docs/` structure in Git as source of truth.
2. Map Mintlify navigation to `docs/user/` for the public site.
3. Deploy internal docs separately (second Mintlify workspace, or MkDocs/Docusaurus on a private host).

## Guardrails

- Do not point a public Mintlify site at `docs/internal/` without an access-controlled deployment.
- Generate `llms.txt` if the platform supports it; otherwise maintain `llms.txt` from the example in the scaffold.

## Note

This recipe is intentionally short. Mintlify's config file names and features change — follow current vendor docs for `mint.json` / navigation, and keep **structure decisions** in this primer, not in the vendor UI.
