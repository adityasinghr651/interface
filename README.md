React + Vite + Tailwind CSS

This project provides a minimal yet modern setup using React, Vite, and Tailwind CSS. It also includes support for HMR (Hot Module Replacement) and ESLint rules to help you write clean code.

🔌 Plugins Used

Currently, two official React plugins are available for Vite:

- @vitejs/plugin-react — uses Babel for Fast Refresh
- @vitejs/plugin-react-swc — uses SWC for faster builds

This project uses: @vitejs/plugin-react + Tailwind CSS

---

🎨 Tailwind CSS Setup (Verified from Official Docs)

Tailwind CSS is properly integrated. Here’s how the setup looks:

✅ vite.config.js
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()
],
})

```
 ✅ index.css
```css
@import "tailwindcss";
```

✅ App.css

All default styles are commented out to avoid conflicts with Tailwind. You can style everything using Tailwind utility classes.

---

📦 Getting Started

1. Install dependencies
```bash
npm install
```
2. Start the development server
```bash
npm run dev
```


🧹 ESLint

To maintain code quality, ESLint is configured. You can extend it as needed for TypeScript, Prettier, or other standards.

---

📌 Notes

- Make sure tailwind.config.js and postcss.config.js exist if you're expanding Tailwind features.
- This project assumes you're using CSS via Tailwind's utility-first approach.
- The structure is kept intentionally simple for clarity and rapid development.

---

📁 Folder Structure
```bash
vite-project/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   ├── index.css
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
```

🛠 Technologies

- React
- Vite
- Tailwind CSS
- ESLint

---

📄 License

This project is open-source and free to use.

---

Happy coding! 🚀
