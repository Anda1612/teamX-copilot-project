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
git checkout feature/project-structure
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
