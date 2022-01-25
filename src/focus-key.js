/**
 * @param {HTMLElement} element
 * @param {{ key?: string | string[]; selectText?: boolean; }} [options]
 */
export function focusKey(element, options = {}) {
  const key = options.key || "/";
  const keys = Array.isArray(key) ? key : [key]
  const selectText = options.selectText === true;

  const handleKeydown = (e) => {
    if (
      keys.some((key) => key === e.key) &&
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
