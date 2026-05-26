# OpenViking Blog

Standalone static build of the OpenViking blog.

## Development

```bash
npm ci
npm run dev
```

## Build

```bash
npm run build
```

The build writes a fully static site to `dist/`, including prerendered post HTML,
`sitemap.xml`, `robots.txt`, and `llms.txt`.

## Deployment

Vercel can deploy this repository directly:

- Framework preset: Vite
- Install command: `npm ci`
- Build command: `npm run build`
- Output directory: `dist`

Set `VITE_SITE_URL` to the production origin, for example:

```bash
VITE_SITE_URL=https://openviking-blog.vercel.app
```

If `VITE_SITE_URL` is omitted, the build keeps the canonical OpenViking blog
origin: `https://blog.openviking.ai`.

## Zouk Embed

The reader chat widget defaults to:

- `VITE_ZOUK_SERVER_URL=https://zouk.zaynjarvis.com`
- `VITE_ZOUK_WORKSPACE_ID=zayn`
- `VITE_ZOUK_CHANNEL=blog`
- `VITE_ZOUK_GUEST_NAME=reader`

Override those variables only when deploying a different Zouk workspace/channel.
