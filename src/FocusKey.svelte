<script>
  /**
   * Specify the element to focus
   * @type {HTMLElement}
   */
  export let element = null;

  /**
   * Specify the key to trigger the element focus
   */
  export let key = "/";

  /**
   * Set to `true` to select text in the element when focused
   */
  export let selectText = false;
</script>

<svelte:body
  on:keydown={(e) => {
    if (
      e.key === key &&
      element != null &&
      document.activeElement.tagName === "BODY" &&
      document.activeElement !== element
    ) {
      e.preventDefault();
      element.focus();
      if (selectText) element.select();
    }
  }} />
