<script>
  import { focusKey } from "svelte-focus-key";
</script>

<input use:focusKey={{ key: "q" }} placeholder={'Press "q" to focus'} />
