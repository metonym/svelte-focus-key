import { sveltekit } from "@sveltejs/kit/vite";
import { createViteConfig } from "sveldoc";
import svelteConfig from "./svelte.config.js";

export default createViteConfig(svelteConfig, {
  name: "svelte-focus-key",
  plugins: [sveltekit()],
});
