# Issue with handle in hook

As per the documentation of [svelte-kit handle in hooks](https://kit.svelte.dev/docs/hooks#handle)

> This function runs every time SvelteKit receives a request — whether that happens while the app is running, or during prerendering — and determines the response.

This sample repository contains a new project created using the following steps

```bash
npm init svelte@next
pnpm i
```

- I added a hooks.js file which simply logs the url path name before resolving the request.
- I also added a \_\_layout.svelte with links to the index.svelte, and two simple pages one.svelte and two.svelte.
- There is nothing fancy in any of these pages.

When I run the application usin `pnpm dev` or `pnpm build && pnpm preview`. The output of the logged calls is not consistent with the pages visited.

For example I started the application and browser was already on http://localhost:3000/one. And the output logges was

```text
 pnpm preview

> kit-hooks@0.0.1 preview /Users/Jerry/Code/Vikalp/kit-hooks
> svelte-kit preview


  SvelteKit v1.0.0-next.267

  local:   http://localhost:3000
  network: not exposed

  Use --host to expose server to other devices on this network


handle /one
```

Next I clicked on each of the links (home, one, two), but there was no change in the output.

Repeated the same actions after stopping and restarting the application using `pnpm preview` and `pnpm dev` and the only time handle seems to be called is whn I explicitly refresh the browser.

````text
 pnpm dev

> kit-hooks@0.0.1 dev /Users/Jerry/Code/Vikalp/kit-hooks
> svelte-kit dev


  SvelteKit v1.0.0-next.267

  local:   http://localhost:3000
  network: not exposed

  Use --host to expose server to other devices on this network


^C%    `

```text
pnpm dev

> kit-hooks@0.0.1 dev /Users/Jerry/Code/Vikalp/kit-hooks
> svelte-kit dev


  SvelteKit v1.0.0-next.267

  local:   http://localhost:3000
  network: not exposed

  Use --host to expose server to other devices on this network


handle /two

````
