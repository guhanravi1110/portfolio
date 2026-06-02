# Frontend Developer Portfolio (React + Vite)

This is a beginner-friendly portfolio template built with React and Vite, using plain CSS.

Quick start

1. Install dependencies

```bash
npm install
npm install @emailjs/browser
```

2. Run dev server

```bash
npm run dev
```

EmailJS setup

1. Create an account at https://www.emailjs.com/ and add an email service.
2. Create an email template that expects `from_name`, `from_email`, `subject`, and `message`.
3. In `src/services/emailjs.js` replace `SERVICE_ID`, `TEMPLATE_ID`, and `PUBLIC_KEY` with your EmailJS values.
4. Restart dev server if necessary.

Resume

Place your resume at `public/resume.pdf` so the "Download Resume" button works.

Files added

- `src/components/*` - React components for all sections
- `src/styles/*` - CSS files per component
- `src/services/emailjs.js` - EmailJS wrapper (placeholders included)
- `src/assets/images/*` - placeholder SVGs

Notes for beginners

- Components are functional components using hooks where needed.
- Styles are plain CSS files imported from `App.jsx`.
- Sections use semantic HTML and IDs for navigation and smooth scrolling.
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
