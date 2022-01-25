<script lang="ts">
  import FocusKey, { focusKey } from "../types";
  import FocusKeyDirectImport, {
    FocusKeyProps,
  } from "../types/FocusKey.svelte";

  let element: HTMLInputElement;
  let key: FocusKeyProps["key"] = ["s"];
</script>

<input bind:this={element} />
<FocusKey {element} key="s" selectText />
<FocusKeyDirectImport {element} {key} />
<input use:focusKey={{ key: ["s"], selectText: true }} />
