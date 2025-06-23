# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh  
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Tailwind CSS Setup (Checked from Official Docs)

Tailwind CSS is integrated using the official approach. Please note:

- ✅ `vite.config.js` includes:
  ```js
  import tailwindcss from '@tailwindcss/vite';
  ...
  plugins: [react(), tailwindcss()]
