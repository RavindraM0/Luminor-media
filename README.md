# Luminor Media

This repository serves the recovered static website from `web/`. It matches the
preview selected for publication; the original editable React/TypeScript source
is not part of this build.

## Run locally

Use Node.js 20 or later, then run:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000). No packages need to be
installed.

## Vercel deployment

`vercel.json` configures Vercel to serve `web/` as a static site and route
client-side paths back to `index.html`. Pushes to `main` deploy automatically
when the Vercel project is linked to this repository with its root directory
set to the repository root.

Production site: [https://www.luminormedia.in](https://www.luminormedia.in).

The static preview does not include backend services. Contact or newsletter
forms are not confirmed to deliver messages; do not rely on them for lead
collection until a backend is connected.
