import adapter from "@sveltejs/adapter-static";
import { createConfig } from "sveldoc";

export default createConfig({
  kit: {
    adapter: adapter(),
    paths: {
      base: process.env.NODE_ENV === "production" ? "/svelte-focus-key" : "",
    },
    files: {
      lib: "src",
      routes: "demo",
      template: "demo/_app.html",
    },
  },
});
