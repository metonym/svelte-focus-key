<script lang="ts">
  import FocusKey, { focusKey } from "../types";
  import FocusKeyDirectImport from "../types/FocusKey.svelte";

  let element: HTMLInputElement;
</script>

<input bind:this={element} />

<!-- svelte-ignore missing-declaration -->
<FocusKey {element} key="s" selectText />

<!-- svelte-ignore missing-declaration -->
<FocusKeyDirectImport {element} />

<input use:focusKey />

<input use:focusKey={{ key: "s", selectText: true }} />
