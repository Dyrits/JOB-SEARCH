# Job Search

A job search front-end application built with Vue 3 and Vite.

## About The Project

This project is a Vue 3 single-page application scaffolded with Vite, with unit tests (Vitest), ESLint and Prettier configured.

## Built With

- Vue 3
- Vite
- Vitest

## Getting Started

### Prerequisites

- Node.js and npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build and test

```bash
npm run build
npm run test:unit
```

## License

No license file is present in this repository.

## Contact

Dylan J. Gerrits - [GitHub](https://github.com/Dyrits)

## Dependency verification (November 2026)

This repository currently renders the original Vue starter greeting, not a job-search application. Use Node.js 26.13.0 LTS, `npm ci`, `npm run build` and `npm run test:unit -- --run`. Vite 8, its Vue plugin and Vitest 5 are aligned; config files use explicit ESM extensions. One component rendering test replaces the previous empty test suite. Local findings fall from 22 (including two critical) to 17 moderate development-tool findings. Local desktop/mobile browser rendering was checked; no hosted deployment or external service was tested.
