<script>
  import { focusKey } from "svelte-focus-key";
</script>

<input use:focusKey={{ key: "k" }} placeholder={'Press "k" to focus'} />
