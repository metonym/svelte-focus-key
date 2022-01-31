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
</script>

<svelte:body
  on:keydown={(e) => {
    if (
      keys.some((key) => key === e.key) &&
      element != null &&
      document.activeElement?.tagName === "BODY" &&
      document.activeElement !== element
    ) {
      e.preventDefault();
      element.focus();
      if (selectText) element.select();
    }
  }} />
