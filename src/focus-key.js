/**
 * @param {HTMLElement} element
 * @param {{ key?: string; }} [options]
 */
export function focusKey(element, options = {}) {
  const key = options.key || '/';

  const handleKeydown = e => {
    if (
      e.key === key &&
      element != null &&
      document.activeElement.tagName === "BODY" &&
      document.activeElement !== element
    ) {
      e.preventDefault();
      element.focus();
    }
  }

  document.body.addEventListener('keydown', handleKeydown)

  return {
    destroy() {
      document.body.removeEventListener('keydown', handleKeydown)
    }
  }
}