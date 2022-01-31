import adapter from "@sveltejs/adapter-static";
import { createConfig } from "sveldoc";

export default createConfig({
  name: "svelte-focus-key",
  kit: {
    paths: {
      base: process.env.NODE_ENV === 'production' ? "/svelte-focus-key" : '',
    },
  },
  adapter: adapter(),
  files: {
    lib: "src",
    routes: "demo",
    template: "demo/_app.html",
  },
});
