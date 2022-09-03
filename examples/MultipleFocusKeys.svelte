<script>
  import FocusKey from "svelte-focus-key";

  let element;
</script>

<input bind:this={element} placeholder={'Press "a" or "b"'} />

<FocusKey {element} key={["a", "b"]} />
