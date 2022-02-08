<script>
  import { focusKey } from "svelte-focus-key";

  let selectText = false;
  let key = "k";
  let value = "text";
</script>

<input
  use:focusKey={{ key, selectText }}
  placeholder={'Press "k" to focus'}
  bind:value
/>

<div>
  <button
    on:click={() => {
      key = Array.isArray(key) ? "k" : ["/"];
      selectText = !selectText;
    }}
  >
    Toggle options
  </button>
</div>
