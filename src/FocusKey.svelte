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
    }
  }} />
