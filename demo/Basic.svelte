<script>
  import FocusKey from "svelte-focus-key";

  let element;
</script>

<input bind:this={element} placeholder={'Press "/" to focus'} />

<FocusKey {element} />
