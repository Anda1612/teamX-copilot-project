```instructions
## Purpose

This file gives concise, actionable guidance for an AI coding agent working in this repository so it can be immediately productive.

## Quick repo facts (auto-discovered)

- Repository: teamX-copilot-project
- Current branch: feature/project-structure
- Owner: Anda1612
- Top-level files found: `README.md` (contains only the repo title)
- No build manifests detected (no `package.json`, `pyproject.toml`, `requirements.txt`, `Makefile`, `pom.xml`, `Dockerfile`, etc.)

## First steps for an AI agent (do these before making feature changes)

1. Inspect the repo root and list files. Example: `README.md` is present and minimal — there are no source directories yet.
2. Search for common build/test files: look for `package.json`, `pyproject.toml`, `pyproject.lock`, `requirements.txt`, `setup.py`, `Makefile`, `Dockerfile`, `ci/`, `.github/workflows/`.
3. If the repo is sparse (like this one), ask the maintainer clarifying questions before scaffolding large changes. See suggested questions below.

## What to prefer when the codebase is empty or underspecified

- Do not assume a language or framework. Ask which stack to use (Node/Python/Go/etc.) before generating a project scaffold.
- If asked to scaffold, create a minimal, reproducible project: source dir (`src/` or `app/`), a small CLI or test harness, a dependency manifest, and one fast unit test.
- Keep edits small and well-tested. After creating runnable code, run the smallest possible validation (unit test or simple script) and report results.

## Project-specific patterns and conventions (discoverable)

- There are no discoverable conventions in files; reference the `README.md` at repo root for any future notes.
- Branch in use is `feature/project-structure` — prefer creating a new feature branch for larger changes unless told otherwise.

## Integration points & external deps (discoverable)

- None found in the repository. If a change requires external services (databases, cloud APIs), ask for credentials, usage constraints, and test doubles/mocks to use.

## Useful file references for this repo

- `README.md` — currently only contains the project title. Use it as the primary human-facing starting point.

## Suggested clarifying questions to ask the maintainer

1. Which language, runtime, and package manager should new code use? (examples: Node + npm, Python + poetry, Go + modules)
2. Is there an existing architecture or similar repo in the org to follow as a template?
3. What CI workflow (GitHub Actions, other) should we add, if any?
4. Are there any licensing, code style, or contributor guidelines to enforce?

## Safety and change policy

- Avoid large, opinionated scaffolds without explicit approval. When in doubt, create a tiny proof-of-concept and prompt for review.
- Do not add secrets, tokens, or credentials to the repo. If needed for testing, request them out-of-band and use environment variables or mocks.

## Example small task an agent can do immediately

1. Create a small language-appropriate scaffold (only after confirmation) with:
   - minimal manifest (e.g., `package.json` or `pyproject.toml`)
   - `src/` directory with a single hello-world module
   - a single unit test that runs quickly
   - concise `README.md` update describing how to run tests
2. Run the test locally and report results in the PR description.

## If you (human) are unavailable

- Leave a short PR description that explains what was added, what to review, and one or two follow-up tasks for the maintainer.

---
If anything in this file is unclear or you'd like different defaults (language, CI, test runner), tell me which preferences to apply and I'll update the instructions and (optionally) scaffold accordingly.

## Aplicație colaborativă cu GitHub & Copilot (instrucțiuni pentru echipe)

Acest repo poate servi drept șablon pentru o mini-aplicație web dezvoltată în echipă (3–4 studenți). Următoarele instrucțiuni sunt un ghid practic, folosit în curs:

Partea 1 — Setup inițial (1 persoană din echipă)
- Creează repository pe GitHub: nume `teamX-copilot-project`, Public, Add README, Add .gitignore -> Node
- Invită colegii prin Settings → Collaborators → Add people → Send invite

Partea 2 — Organizarea proiectului
- Creează un Project (Board) numit: `Sprint 1 – Project` (To do / In progress / Done)
- Creează issues inițiale (ex: `feat: build project structure`, `feat: add home page`, `docs: project documentation in Wiki`). Adaugă labels și leagă-le la proiect/coloana To do.

Partea 3 — Branch-uri și Copilot
- Creează branch: `feature/project-structure` din `main`.
- Clone repo local și schimbă branch:

```bash
git clone https://github.com/<username>/teamX-copilot-project.git
cd teamX-copilot-project
git checkout feature-project-structure
```

- Folosește GitHub Copilot în VS Code pentru a genera fișiere inițiale: `index.html`, `style.css`, `app.js`.
- Exemplu de comentariu pentru `index.html` (declanșează Copilot):

```html
<!-- Create a simple homepage layout with header, navigation and footer -->
```

- Commit & push:

```bash
git add .
git commit -m "Add basic project structure"
git push origin feature/project-structure
```

Partea 4 — Pull Request & Code Review
- Deschide PR: Title recomandat `feat: add basic project structure`, adaugă descriere cu context și lista de fișiere schimbate.
- Reviewer: folosește Files changed → Add comment / Add suggestion → Review changes → Approve.
- După aprobare: Merge pull request → Confirm merge.

Partea 5 — Documentație în Wiki (opțional)
- Creează pagina `Arhitectură` în Wiki și documentează:
  - `index.html` — interfața de bază
  - `app.js` — logica aplicației
  - `style.css` — stiluri

Notă pentru agenții AI
- Dacă ți se cere să scaffoldezi proiectul, întreabă mai întâi echipa ce stack preferă (Node, Python, etc.).
- Respectă politica din acest fișier: evită adăugarea de secrete, preferă POC-uri mici și validează printr-un test rapid.

```
