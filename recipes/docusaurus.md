# Recipe: Docusaurus

Use when you want a React-based docs site, versioning, and MDX components.

## 1. Create site

```bash
npx create-docusaurus@latest website classic
```

## 2. Point content at the scaffold

Either:

- Move/symlink `docs/user` (and optionally selected internal paths) into Docusaurus `docs/`, or
- Configure `docs.path` / multiple instances (docs plugins) for internal vs user.

## 3. Mermaid

Use an official or community Mermaid theme/plugin so fenced `mermaid` blocks render.

## 4. Versioning

Enable Docusaurus versioning for **user-facing** docs tied to product releases. Internal docs often track `main` only.

## Notes

- Prefer keeping canonical files in repo-root `docs/` (this kit's layout) and teaching Docusaurus to read them — avoid a second divergent tree.
- Strip internal routes from the public build.
