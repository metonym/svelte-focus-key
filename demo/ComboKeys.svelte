<script>
  import FocusKey from "svelte-focus-key";

  let element;
</script>

<input bind:this={element} placeholder={'Press "⌘+k" to focus'} />

<FocusKey {element} key="Meta+k" />
