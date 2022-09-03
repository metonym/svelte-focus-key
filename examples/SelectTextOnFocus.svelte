<script>
  import FocusKey from "svelte-focus-key";

  let element;
</script>

<input
  bind:this={element}
  value={'Press "e" to focus'}
  placeholder={'Press "e" to focus'}
/>

<FocusKey {element} key="e" selectText />
