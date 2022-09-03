<script>
  import FocusKey from "svelte-focus-key";

  let element;
</script>

<textarea bind:this={element} placeholder={'Press "s" to focus'} />

<FocusKey {element} key="s" />
