<script>
  import FocusKey from "svelte-focus-key";

  let input;
</script>

<input
  bind:this={input}
  value={'Press "e" to focus'}
  placeholder={'Press "e" to focus'}
/>

<FocusKey element={input} key="e" selectText />
