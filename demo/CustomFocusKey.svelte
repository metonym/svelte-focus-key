<script>
  import FocusKey from "svelte-focus-key";

  let textarea;
</script>

<textarea bind:this={textarea} placeholder={'Press "s" to focus'} />

<FocusKey element={textarea} key="s" />
