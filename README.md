![CI](https://github.com/dipiash/nx-vite-react-ts-mantine-boilerplate/actions/workflows/CheckPullRequest.yml/badge.svg?branch=main)
[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fdipiash%2Fnx-vite-react-ts-mantine-boilerplate&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false)](https://hits.seeyoufarm.com)

# NX monorepo boilerplate with React + Vite + TypeScript + Mantine

## Getting Started

### Prerequisites

```sh
# Install NX
npm install -g nx

# Init project
npm run init-project
```

### Development

1. Read [how to create GitHub access token](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)
2. Add `.env` into `./`
   ```bash
   cp ./env.example ./.env
   ```
3. Add `.env.local` into `./packages/graphql/.env.local`
   ```bash
   cp ./packages/graphql/env.example ./packages/graphql/.env.local
   ```
   and add your GitHub token (see step 1)
4. Add `.env.local` to `./apps/main/.env.local`
   ```bash
   cp ./apps/main/env.example ./apps/main/.env.local
   ```
   and add your GitHub token (see step 1)
5. _[Optional step]_ Generate code from GraphQL schema
   ```sh
   npm run codegen:graphql
   ```
6. Start the app
   ```sh
   npm run dev
   ```
   and open the page http://localhost:3000/

### Examples

- [GitHub repository list](https://dipiash.github.io/nx-vite-react-ts-mantine-boilerplate/)

### App screenshots

#### Desktop version

<img alt="app_screenshot_1.png" height="200" src="docs/app_screenshot_1.png"/>

<img alt="app_screenshot_2.png" height="200" src="docs/app_screenshot_2.png"/>

#### Mobile version

<img alt="app_screenshot_3.png" height="200" src="docs/app_screenshot_3.png"/>

### Features

- [Nx 20](https://nx.dev)
- [React 18](https://reactjs.org)
- [Mantine 7](https://mantine.dev/)
- [Storybook 7](https://storybook.js.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite 5](https://vitejs.dev/)
- [Vitest](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [Cypress](https://www.cypress.io)
- [ESLint](https://eslint.org/)
- HMR (Hot Module Replacement)

## License
This code is licensed under the MIT License. 
You can find the license file [here](/LICENSE).

# Partial Upgrade

A modern web application built with React, Vite, TypeScript, and Mantine.

## Development

```bash
# Install dependencies
npm install

# Start development server
npm start
```

## Deployment to GitHub Pages

This project is configured for deployment to GitHub Pages. The deployment process is automated using GitHub Actions.

### Manual Deployment

If you need to deploy manually:

1. Build the application:
   ```bash
   npx nx build main
   ```

2. Deploy to GitHub Pages:
   ```bash
   npx gh-pages -d dist/apps/main
   ```

### Automatic Deployment

The project is configured to automatically deploy to GitHub Pages when changes are pushed to the main branch.

## View the Live Site

Once deployed, the site will be available at:
https://[your-github-username].github.io/partialupgrade/

# Mantine React App

A modern React application built with Vite, TypeScript, and Mantine UI components.

## Features

- ⚡️ [Vite](https://vitejs.dev/) - Lightning fast build tool
- ⚛️ [React](https://reactjs.org/) - UI library
- 📦 [TypeScript](https://www.typescriptlang.org/) - Type safety
- 🎨 [Mantine](https://mantine.dev/) - UI components
- 📱 Responsive design
- 🚀 GitHub Pages deployment

## Getting Started

### Prerequisites

- Node.js 20 or later
- npm 9 or later

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
.
├── src/
│   ├── components/     # Reusable components
│   ├── pages/         # Page components
│   ├── App.tsx        # Main app component
│   └── main.tsx       # Entry point
├── public/            # Static assets
└── index.html         # HTML template
```

## Development

The development server will start at `http://localhost:5173` by default.

## Deployment

The app is automatically deployed to GitHub Pages when changes are pushed to the `main` branch.

## License

MIT

## Adding Mantine Components

Simply import Mantine components in your React components:

```tsx
import { Button, Text, Stack } from '@mantine/core';

export function MyComponent() {
  return (
    <Stack>
      <Text>Hello World</Text>
      <Button>Click Me</Button>
    </Stack>
  );
}