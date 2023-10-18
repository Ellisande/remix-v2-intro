# Remix V2 Intro

- [Remix Docs](https://remix.run/docs)

## Steps

This intro takes you from "Hello world" to data mutation. There are branches for each step along the way to help you jump to specific points, or reset a step if you make a mistake.

step_0: Hello World (very basic index.tsx)
step_1: Styling (how to add css, tailwind)
step_2: Adding images (importing static assets)
step_3: Loading Data (fetching data, loaders)
step_4: Routes (how to make new routes)
step_5: Search Params (form gets)
step_6: Slow loaders (defer)
step_7: Data saving (actions, redirects)
step_8: 404 Pages (splat routes)

## Setup

```sh
npx prisma migrate dev init
```

## Development

From your terminal:

```sh
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `remix build`

- `build/`
- `public/build/`
