<script lang="ts">
  /**
   * Specify the element to focus.
   */
  export let element: null | HTMLInputElement | HTMLTextAreaElement = null;

  /**
   * Specify the key(s) to trigger the element focus.
   */
  export let key: string | string[] = "/";

  /**
   * Set to `true` to select text in the element when focused.
   */
  export let selectText = false;

  $: keys = Array.isArray(key) ? key : [key];

  let pressedKeys: string[] = [];
</script>

<svelte:body
  on:keydown={(e) => {
    pressedKeys = [...pressedKeys, e.key];
  }}
  on:keyup={(e) => {
    const currentKey = pressedKeys.join("+");

    if (
      keys.some((key) => key === currentKey) &&
      element !== null &&
      document.activeElement?.tagName === "BODY" &&
      document.activeElement !== element
    ) {
      e.preventDefault();
      element.focus();
      if (selectText) element.select();
    }

    pressedKeys = [];
  }}
/>
