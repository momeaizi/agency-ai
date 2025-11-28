# Agency AI — Landing Page

Vite + React + TypeScript landing page styled with Tailwind.

**Live Demo:** https://agency-ai-ashy-nine.vercel.app/

Install
```bash
npm install
```

Dev
```bash
npm run dev
```

Build / Preview
```bash
npm run build
npm run preview
```

Tailwind
- Put Tailwind directives in `src/index.css`:
  ```css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  :root { --color-primary: #5044E5 }
  ```
- `tailwind.config.cjs` maps `primary` to `var(--color-primary)` so you can use `bg-primary`.

Alias
- `@` maps to `src` (see `tsconfig.app.json` and `vite.config.ts`).

Component
- Example: `src/components/ServiceCard.tsx` expects `Service` `{ title, description, icon }`.

That's it — open the dev server and iterate.
