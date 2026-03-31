# Sowmya Vunnam Portfolio

Live site: [https://sowmyavunnam.github.io/](https://sowmyavunnam.github.io/)

This repository contains the source for Sowmya Vunnam's personal portfolio website. The site is built with Next.js, exported as a static site, and deployed to GitHub Pages through GitHub Actions.

## Stack

- Next.js 16
- React 19
- Tailwind CSS 4
- `next-themes` for light and dark mode
- GitHub Pages for hosting

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Build

```bash
npm run build
```

The project uses `output: "export"` so GitHub Actions can deploy the generated static files to GitHub Pages.

## Deployment

Deployments run automatically from `.github/workflows/deploy.yml` on pushes to `main`.

Production URL:

`https://sowmyavunnam.github.io/`
