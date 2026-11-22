![Social Preview](https://github.com/Epiled/7-days-optimus-tech/assets/55258483/afc823f8-3c22-4d75-8540-abac28d99fcc#vitrinedev)

<h1 align="center"> 7️⃣ Optimus Tech 📄 </h1>

![Vercel Deploy](https://img.shields.io/badge/Deploy-Vercel-black?style=for-the-badge&logo=vercel)
![GitHub release](https://img.shields.io/github/v/release/Epiled/7-days-optimus-tech?style=for-the-badge)
![GitHub license](https://img.shields.io/github/license/Epiled/7-days-optimus-tech?style=for-the-badge)

![GitHub last commit](https://img.shields.io/github/last-commit/Epiled/7-days-optimus-tech?style=for-the-badge)
![Code Size](https://img.shields.io/github/languages/code-size/Epiled/7-days-optimus-tech?style=for-the-badge)

![React](https://img.shields.io/badge/-React-61DAFB?style=for-the-badge&logo=react&logoColor=333333)
![Typescript](https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-5FA04E?style=for-the-badge&logo=nodedotjs&logoColor=white)

## 📑 Table of Contents

- [📑 Table of Contents](#-table-of-contents)
- [📖 Overview](#-overview)
- [🛠️ Technologies](#-technologies)
- [⚡ Performance & PWA](#-performance--pwa)
- [🚀 Demo](#-demo)
- [📦 Install and Use](#-install-and-use)
- [🕹 Available Scripts](#-available-scripts)
- [📂 File Structure](#-file-structure)
- [🎨 Reference & Inspiration](#-reference--inspiration)
- [👨‍💻 Author and Contact](#%E2%80%8D-author-and-contact)

## 📖 Overview

**Optimus Tech** is a robust frontend web application engineered to deliver a seamless shopping experience for a modern department store. Designed with a strict emphasis on Core Web Vitals and high Lighthouse scores, the platform ensures rapid product discovery and fluid navigation. Built using a modern React and TypeScript stack, the architecture prioritizes scalable global state management, clean component decoupling, and an optimized rendering pipeline to support a diverse, multi-category product catalog.

## 🛠 Technologies

The following technologies were used to build this project:

### Core

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Router](https://reactrouter.com/)
- [Vite](https://vite.dev/)
- [Node.js](https://nodejs.org/)

### Styling

- [Sass](https://sass-lang.com/)
- [CSS Modules](https://github.com/css-modules/css-modules)
- [classnames](https://github.com/JedWatson/classnames)

### Testing and Code Quality

- [Vitest](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Testing Library Jest DOM](https://github.com/testing-library/jest-dom)
- [Testing Library User Event](https://testing-library.com/docs/user-event/intro/)
- [ESLint](https://eslint.org/)

## ⚡ Performance & PWA

Performance and web application capabilities will be evaluated using Lighthouse and browser testing tools.

### Lighthouse Audit

The following table will be updated after running a Lighthouse audit on the production deployment.

| Metric         | Score | Status        |
| -------------- | ----: | ------------- |
| Performance    |     — | Pending audit |
| Accessibility  |     — | Pending audit |
| Best Practices |     — | Pending audit |
| SEO            |     — | Pending audit |

### PWA Checklist

The following table tracks the validation of Progressive Web App capabilities.

| Feature            | Status        |
| ------------------ | ------------- |
| Web App Manifest   | Not evaluated |
| Service Worker     | Not evaluated |
| Offline Support    | Not evaluated |
| App Installability | Not evaluated |

> **Note:** Performance scores and PWA capabilities will only be marked as implemented or evaluated after validation.

## 🚀 Demo

Access the live application below to interact with the interface and run your own performance tests

7-days-optimus-tech: [https://epiled.github.io/7-days-optimus-tech/](https://epiled.github.io/7-days-optimus-tech/)

### Desktop

https://github.com/Epiled/7-days-optimus-tech/assets/55258483/14c8fe0c-0247-4755-98cd-3106d9c12100

### Mobile

https://github.com/Epiled/7-days-optimus-tech/assets/55258483/487a997d-b856-4100-a2a7-7ef5605333e2

## 📦 Install and Use

**Prerequisites:** Node.js (v22.x) or higher installed.

1. Clone the repository:

```bash
git clone https://github.com/Epiled/optimus-tech.git
cd optimus-tech
```

2. Install the dependencies:

```bash
npm install
```

3. Run the development environment (Build + Watch + Server):

```bash
npm run dev
```

4. Generate minified build for production:

```bash
npm run build
```

5. Preview the production build locally:

```bash
npm run preview
```

## 🕹 Available Scripts

| Command                 | Description                                                |
| ----------------------- | ---------------------------------------------------------- |
| `npm run dev`           | Starts the Vite development server.                        |
| `npm run build`         | Runs TypeScript checks and generates the production build. |
| `npm run preview`       | Runs a local preview of the production build.              |
| `npm run lint`          | Runs ESLint to analyze the codebase.                       |
| `npm run test`          | Starts the Vitest test environment.                        |
| `npm run test:coverage` | Runs tests and generates a code coverage report.           |

## 📂 File Structure

Below is the project architecture. All development is done inside the `src/` folder. The `dist/` folder is automatically generated by Vite and should not be edited manually.

```text
7-days-optimus-tech/
├── public/             # Static assets (favicons, robots.txt)
├── src/                # Main source code
│   ├── assets/         # Images and SVGs processed by the build pipeline
│   ├── components/     # Reusable UI components (Atomic Design principles)
│   ├── data/           # Static content and application data sources
│   ├── interfaces/     # Global TypeScript definitions and data shape contracts
│   ├── layouts/        # Shared application layouts
│   ├── pages/          # Top-level view components representing application routes
│   ├── routes/         # Route definitions and path constants
│   ├── styles/         # Global styles and theme definitions
│   ├── types/          # Shared TypeScript type aliases and utility types
│   ├── App.tsx          # Root application component
│   ├── main.tsx        # Application entry point
│   └── setupTests.ts   # Test environment configuration
├── index.html
├── package.json        # Project dependencies and automation scripts
├── package-lock.json
├── tsconfig.json       # TypeScript strict configuration
├── tsconfig.app.json
└── vite.config.ts      # Custom Vite configuration (plugins and aliases)
```

## 🎨 Reference & Inspiration

The project's design and wireframes are available for viewing on Figma.

Figma / Wireframe: [Optimus Tech](<https://www.figma.com/file/AsxsdGTpdD7sooRFofJz3z/7daysOfCode-HTML-CSS-(Copy)?type=design&node-id=0%3A1&mode=design&t=xjvjw35LuZu8Dx9d-1>)

## 👨‍💻 Author and Contact

<a href="https://github.com/Epiled">
  <img src="https://user-images.githubusercontent.com/55258483/178338085-2cea8bf2-6d0c-409a-9d0e-23359b7d303e.png" alt="Felindo">
  <br />
  <sub><b>Felipe De Andrade</b></sub>
</a>

Made with ❤️ by Felipe De Andrade 👋🏽 Get in touch!

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/fademendonca/)
[![CodePen](https://img.shields.io/badge/CodePen-000000?style=for-the-badge&logo=codepen&logoColor=white)](https://codepen.io/epiled)
[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:felipe.deam98@gmail.com)
