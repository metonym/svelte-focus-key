interface FocusKeyOptions {
  key?: string | string[];
  selectText?: boolean;
}

export function focusKey(
  element: HTMLInputElement | HTMLTextAreaElement,
  options: FocusKeyOptions = {}
) {
  let key = options.key || "/";
  let keys = Array.isArray(key) ? key : [key];
  let selectText = options.selectText === true;

  const keydown = (e: KeyboardEvent) => {
    if (
      keys.some((key) => key === e.key) &&
      document.activeElement?.tagName === "BODY" &&
      document.activeElement !== element
    ) {
      e.preventDefault();
      element.focus();
      if (selectText) element.select();
    }
  };

  document.body.addEventListener("keydown", keydown);

  return {
    update(options: FocusKeyOptions = {}) {
      key = options.key || "/";
      keys = Array.isArray(key) ? key : [key];
      selectText = options.selectText === true;
      element.selectionStart = element.selectionEnd;
    },
    destroy() {
      document.body.removeEventListener("keydown", keydown);
    },
  };
}
