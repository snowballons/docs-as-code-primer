# Recipe: Vale prose linting

Enforce tone, terminology, and audience-appropriate language with Vale — a markup-aware linter that understands audience boundaries.

## Why Vale

Vale is the only widely-adopted linter that supports **per-path style packages**. You can write different rules for `docs/internal/` (allow technical jargon) and `docs/user/` (enforce reading level).

## 1. Install

```bash
# macOS
brew install vale

# Linux (or any OS)
curl -sfL https://install.goreleaser.com/github.com/Vale-sh/vale.sh | bash

# Verify
vale --version
```

## 2. Create `.vale.ini`

Place at your project root:

```ini
StylesPath = .vale/styles

MinAlertLevel = warning

[*.md]
BasedOnStyles = Vale

[docs/internal/**]
BasedOnStyles = Internal

[docs/user/**]
BasedOnStyles = User
```

## 3. Add style packages

Create the styles directory and add packages:

```bash
mkdir -p .vale/styles

# Built-in "Vale" style (catches weasel words, passive voice, etc.)
git clone https://github.com/errata-ai/vale.git .vale/styles/Vale

# Custom internal style
cat > .vale/styles/Internal.yml << 'STYLE'
extends: existence
message: "Use '%s' instead of '%s'"
ignorecase: true
level: warning
tokens:
  - 'basically'
  - 'simply'
  - 'obviously'
STYLE

# Custom user style
cat > .vale/styles/User.yml << 'STYLE'
extends: existence
message: "'%s' may be too technical for user docs"
ignorecase: true
level: error
tokens:
  - 'asynchronously'
  - 'idempotent'
  - 'idempotency'
STYLE
```

## 4. Run

```bash
# Check all docs
vale docs/

# Check only user docs
vale docs/user/

# Check a specific file
vale docs/user/getting-started/quickstart.md
```

## 5. CI integration

Add to your docs workflow (`.github/workflows/docs.yml`):

```yaml
- name: Vale
  run: |
    vale docs/ --output=line
```

## Dual-style CI

For stricter enforcement on user docs:

```yaml
- name: Vale (user)
  run: |
    vale docs/user/ --minAlertLevel=error
- name: Vale (internal)
  run: |
    vale docs/internal/ --minAlertLevel=warning
```

This fails the build on any user-doc style error but only warns on internal issues.

## Example rules

| Rule type | Catches |
|-----------|---------|
| `weasel` | "basically", "simply", "easily" |
| `passive` | "is done", "was executed" |
| `readability` | Grade level too high for audience |
| `term` | Jargon in user docs, blocked words |
| `capitalization` | Inconsistent brand naming |

## Related

- [CI and quality gates](../primer/16-ci-and-quality-gates.md)
- [Dual publish recipe](dual-publish.md)
- [MkDocs end-to-end recipe](mkdocs-e2e.md)
