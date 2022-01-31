/// <reference types="@sveltejs/kit" />

declare module "*.md" {
  export { SvelteComponent as default } from "svelte";
}
