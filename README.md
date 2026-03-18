# Steve Beriak — Professional Portfolio

**Designed & Developed by Leo Fades** · [LinkedIn](https://www.linkedin.com/in/leofades)

---

## Getting Started

### Prerequisites

Make sure you have the following installed before running the project:

- **Node.js** (v20 or higher) — [Download here](https://nodejs.org)
- **npm** (comes with Node.js)

You can verify your versions by running:

```bash
node -v
npm -v
```

### Installation

Clone or download the project, then open a terminal in the project folder and run:

```bash
npm install
```

This installs all dependencies. You only need to do this once.

### Running Locally

```bash
npm run dev
```

Then open your browser and go to `http://localhost:5173`. The page hot-reloads automatically whenever you save a file — no need to restart.

### Building for Production

```bash
npm run build
```

The output goes into the `dist/` folder, which is what you'd upload to a hosting provider like Vercel or Netlify.

---

## Updating the Projects Section

This is the most common thing you'll want to update. All project data lives in one file:

```
src/data/projects.json
```

### Adding a New Project

1. Open `src/data/projects.json`
2. Copy an existing project object (everything from `{` to `}`)
3. Paste it before the closing `]` of the array
4. Add a comma `,` after the closing `}` of the project above it
5. Update all the fields (see field reference below)
6. Save the file — the site updates automatically

### Field Reference

| Field | What it is |
|---|---|
| `id` | Increment by 1 from the last project |
| `slug` | URL-friendly name, lowercase with hyphens e.g. `my-project` |
| `name` | Full name in caps, shown in the modal header |
| `archiveRef` | Short reference shown under the name e.g. `PROJ-007 // BRIEF TAG` |
| `title` | Short title shown large in the modal hero |
| `subtitle` | One-line description shown under the title |
| `category` | Must be exactly one of: `Hardware`, `Software`, `VLSI`, `Research` |
| `images` | Array of image paths — first image is used as the card thumbnail |
| `tags` | Short tech tags shown on the project card (only first 3 shown on card) |
| `coreTech` | Full technology list shown in the modal sidebar |
| `summary` | 2–3 sentence summary shown on the project card |
| `description` | Array of paragraphs shown in the modal body |
| `keyOutcomes` | Array of bullet point outcomes shown in the modal |
| `systemSpecs` | Array of `{ "label": "...", "value": "..." }` shown in the modal sidebar |
| `systemStatus` | e.g. `COMPLETED`, `IN PROGRESS`, `ARCHIVED` |
| `viewPort` | Decorative hex code e.g. `0xA1B2` — just make one up |

### Adding Images to a Project

Put your images in:

```
src/assets/Projects/[ProjectTitle]
```

Then reference them in `projects.json` like this:

```json
"images": [
    "src/assets/Projects/MyProject/myproject1.jpg",
    "src/assets/Projects/MyProject/myproject2.jpg"
]
```


### Removing a Project

Delete the entire object (from `{` to `}`) for that project in `projects.json`, and make sure there's no trailing comma left after the previous project.

---

## Other Quick Updates

- **Contact email** → `src/components/sections/Contact/Contact.tsx`
- **Social links** → same file above, update the `href` values
- **Resume file** → replace `src/assets/SteveBeriak_Resume.pdf` with your new PDF, keeping the same filename
- **Hero photo** → replace `src/assets/steveHero.png` with your new photo, keeping the same filename
- **Testimonials** → `src/components/sections/Testimonials/Testimonials.tsx` — copy a card block to add more
- **Personal Interests** → `src/components/sections/Interests/Interests.tsx` — edit the `INTERESTS` array at the top of the file
- **Journey / Experience** → `src/components/sections/Journey/Journey.tsx`
- **Certifications** → `src/components/sections/Certifications/Certifications.tsx`

---

## Project Structure (for reference)

```
src/
├── assets/              # Images, resume PDF
├── components/
│   ├── layout/          # Navbar, Footer
│   ├── sections/        # Each section of the homepage
│   └── ui/              # Reusable UI components (Modal, Loader, etc.)
├── data/
│   └── projects.json    # ← All project content lives here
├── pages/
│   └── Projects/        # Full projects page + types
└── styles/              # Global CSS variables
```

---

## Important Note
Please note that pushing onto main will redeploy the website again. Therefore, make sure to verify on the local machine before pushing
any changes to main. If there is anything that you screwed up,
contact me lmao.

---

## Thank You

Steve thank you for doing this project with me ah.

Hope this portfolio do you good and gets you in front of the right people. You put in the work, now let the portfolio do the talking lah.

All the best for your career ahead.

— **Leo**
