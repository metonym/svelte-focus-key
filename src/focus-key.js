/**
 * @param {HTMLElement} element
 * @param {{ key?: string; selectText?: boolean; }} [options]
 */
export function focusKey(element, options = {}) {
  const key = options.key || "/";
  const selectText = options.selectText === true;

  const handleKeydown = (e) => {
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
  };

  document.body.addEventListener("keydown", handleKeydown);

  return {
    destroy() {
      document.body.removeEventListener("keydown", handleKeydown);
    },
  };
}
