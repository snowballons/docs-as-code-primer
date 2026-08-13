#!/usr/bin/env bash
#
# scaffold-init.sh — copy the Docs-as-Code Primer scaffold into an existing project.
#
# One-liner (network mode, pulls the kit's main branch tarball):
#   bash <(curl -fsSL https://raw.githubusercontent.com/snowballons/docs-as-code-primer/main/scaffold-init.sh)
#
# Local clone (offline / monorepo):
#   bash scaffold-init.sh --kit-dir /path/to/docs-as-code-primer
#
# Options:
#   --prefix <dir>      install under a subdirectory (monorepo paths)
#   --with-llms-txt     also copy llms.txt.example -> llms.txt
#   --overwrite         replace existing files (default: skip + list conflicts)
#   --dry-run           preview what would be copied
#   --kit-dir <path>    read the scaffold from a local clone instead of the network
#   -h, --help          show this message
#
# Requires only: bash, curl, find, mkdir, cp, dirname, mktemp, tar.
# The copy set mirrors scaffold/README.DOCS.md ("What to copy").

set -euo pipefail

KIT_REPO_URL="https://codeload.github.com/snowballons/docs-as-code-primer/tar.gz/refs/heads/main"
KIT_DIR=""
PREFIX=""
WITH_LLMS=0
OVERWRITE=0
DRY_RUN=0

usage() {
  sed -n '2,18p' "$0" | sed 's/^# \{0,1\}//'
  exit "${1:-0}"
}

while [ "$#" -gt 0 ]; do
  case "$1" in
    --prefix) PREFIX="${2?--prefix requires a value}"; shift 2 ;;
    --with-llms-txt) WITH_LLMS=1; shift ;;
    --overwrite) OVERWRITE=1; shift ;;
    --dry-run) DRY_RUN=1; shift ;;
    --kit-dir) KIT_DIR="${2?--kit-dir requires a value}"; shift 2 ;;
    -h|--help) usage ;;
    *) echo "unknown option: $1" >&2; usage 1 ;;
  esac
done

copied=0
skipped=0
overwritten=0

# --- Resolve kit root (local clone or network tarball) ---------------
TMPDIR=""
if [ -n "$KIT_DIR" ]; then
  KIT_ROOT="$KIT_DIR"
  if [ ! -d "$KIT_ROOT/scaffold" ]; then
    echo "error: no scaffold/ found in --kit-dir '$KIT_DIR'" >&2
    exit 1
  fi
else
  TMPDIR="$(mktemp -d)"
  trap 'rm -rf "$TMPDIR"' EXIT
  curl -fsSL "$KIT_REPO_URL" -o "$TMPDIR/kit.tgz" || {
    echo "error: failed to download the kit from $KIT_REPO_URL" >&2
    exit 1
  }
  tar -xzf "$TMPDIR/kit.tgz" -C "$TMPDIR"
  KIT_ROOT="$TMPDIR/docs-as-code-primer-main"
fi

SCAFFOLD="$KIT_ROOT/scaffold"

# --- Helpers ----------------------------------------------------------
ensure_copy() {
  local src="$1" dst="$2"
  if [ -e "$dst" ]; then
    if [ "$OVERWRITE" = 1 ]; then
      if [ "$DRY_RUN" = 1 ]; then
        echo "[dry-run] would overwrite: $dst"
        return
      fi
      mkdir -p "$(dirname "$dst")"
      cp "$src" "$dst"
      overwritten=$((overwritten + 1))
    else
      [ "$DRY_RUN" = 1 ] && echo "[dry-run] would skip (exists): $dst" || echo "[skip] already exists: $dst"
      skipped=$((skipped + 1))
    fi
    return
  fi
  if [ "$DRY_RUN" = 1 ]; then
    echo "[dry-run] would copy: $dst"
    return
  fi
  mkdir -p "$(dirname "$dst")"
  cp "$src" "$dst"
  copied=$((copied + 1))
}

copy_one() {
  local rel="$1"
  ensure_copy "$SCAFFOLD/$rel" "${PREFIX:+$PREFIX/}$rel"
}

copy_tree() {
  local rel="$1"
  local src="$SCAFFOLD/$rel"
  if [ ! -d "$src" ]; then
    echo "error: scaffold/$rel is missing from the kit" >&2
    exit 1
  fi
  local f sub
  while IFS= read -r -d '' f; do
    sub="${f#"$src"/}"
    ensure_copy "$f" "${PREFIX:+$PREFIX/}$rel/$sub"
  done < <(find "$src" -type f -print0 2>/dev/null)
}

# --- Copy set (scaffold/README.DOCS.md) ------------------------------
copy_tree "docs"
copy_one ".github/workflows/docs.yml"
copy_one ".github/PULL_REQUEST_TEMPLATE.md"
copy_one "AGENTS.md"
copy_one ".markdownlint.json"
if [ "$WITH_LLMS" = 1 ]; then
  ensure_copy "$SCAFFOLD/llms.txt.example" "${PREFIX:+$PREFIX/}llms.txt"
fi

# --- Summary ----------------------------------------------------------
echo
if [ "$DRY_RUN" = 1 ]; then
  echo "Dry-run complete — no files were changed."
  exit 0
fi

echo "Scaffold ready: $copied copied, $overwritten overwritten, $skipped skipped."
if [ "$skipped" -gt 0 ]; then
  echo "Skipped files already existed. Re-run with --overwrite to replace them."
fi

cat <<'EOF'

Next steps (in this project):
  1. Set KIT_URL in docs/KIT.md  — kit clone path or GitHub URL
  2. Read docs/GOVERNANCE.md     — stub policy for empty folders
  3. Follow the first-week pack  — https://snowballons.github.io/docs-as-code-primer/FIRST_WEEK/

EOF