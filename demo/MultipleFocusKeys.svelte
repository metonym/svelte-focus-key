<script>
  import FocusKey from "svelte-focus-key";

  let node;
</script>

<input bind:this={node} placeholder={'Press "a" or "b"'} />

<FocusKey element={node} key={["a", "b"]} />
