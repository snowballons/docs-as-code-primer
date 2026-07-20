#!/bin/bash
# init-docs.sh — Copy the scaffold docs tree into a target project
#
# Usage:
#   ./init-docs.sh /path/to/target/project
#
# This copies:
#   scaffold/docs/          → target/docs/
#   scaffold/.github/       → target/.github/ (docs CI, PR template)
#   scaffold/.markdownlint.json → target/
#   scaffold/AGENTS.md      → target/
#   scaffold/llms.txt.example → target/llms.txt.example
#   scaffold/README.DOCS.md → target/
#   FIRST_WEEK.md           → target/ (optional)
#
# It does NOT overwrite existing files unless --force is passed.

set -euo pipefail

KIT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
TARGET="${1:-}"
FORCE="${2:-}"

if [ -z "$TARGET" ]; then
  echo "Usage: $0 /path/to/target/project [--force]"
  exit 1
fi

if [ ! -d "$TARGET" ]; then
  echo "Error: target directory does not exist: $TARGET"
  exit 1
fi

copy_if_missing() {
  local src="$1"
  local dst="$2"
  if [ -e "$dst" ] && [ "$FORCE" != "--force" ]; then
    echo "  SKIP  $dst (exists, use --force to overwrite)"
  else
    cp -r "$src" "$dst"
    echo "  COPY  $src → $dst"
  fi
}

echo "Initializing docs scaffold in: $TARGET"
echo ""

# Core docs tree
copy_if_missing "$KIT_DIR/scaffold/docs" "$TARGET/docs"

# CI and PR template
if [ -d "$KIT_DIR/scaffold/.github" ]; then
  if [ -d "$TARGET/.github" ]; then
    # Merge into existing .github
    for item in "$KIT_DIR"/scaffold/.github/*; do
      base="$(basename "$item")"
      copy_if_missing "$item" "$TARGET/.github/$base"
    done
  else
    copy_if_missing "$KIT_DIR/scaffold/.github" "$TARGET/.github"
  fi
fi

# Config files
copy_if_missing "$KIT_DIR/scaffold/.markdownlint.json" "$TARGET/.markdownlint.json"
copy_if_missing "$KIT_DIR/scaffold/AGENTS.md" "$TARGET/AGENTS.md"
copy_if_missing "$KIT_DIR/scaffold/llms.txt.example" "$TARGET/llms.txt.example"
copy_if_missing "$KIT_DIR/scaffold/README.DOCS.md" "$TARGET/README.DOCS.md"

# Optional: FIRST_WEEK.md
echo ""
echo "Optional: copy FIRST_WEEK.md? (y/n)"
read -r answer
if [ "$answer" = "y" ] || [ "$answer" = "Y" ]; then
  copy_if_missing "$KIT_DIR/FIRST_WEEK.md" "$TARGET/FIRST_WEEK.md"
fi

echo ""
echo "Done. Next steps:"
echo "  1. cd $TARGET"
echo "  2. Review docs/GOVERNANCE.md and update paths"
echo "  3. Fill Phase 0–2 before writing code"
echo ""
echo "See also: FIRST_WEEK.md, recipes/mkdocs-e2e.md"
