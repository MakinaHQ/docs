# Makina Docs

Welcome to the [Makina Docs](https://docs.makina.finance/), built with [Vocs](https://vocs.dev/).

### Installation

```sh
bun install
```

### Local Development

```sh
bun run dev
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```sh
bun run build
```

This command generates static content into the `dist` directory and can be served using any static contents hosting service.

### Deployment

Every commit merged into the `main` branch is automatically deployed to the [Makina Docs](https://docs.makina.finance) via Vercel (build command `bun run build`, output directory `dist`).
