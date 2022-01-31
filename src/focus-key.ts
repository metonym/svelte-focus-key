interface FocusKeyOptions {
  key?: string | string[];
  selectText?: boolean;
}

export function focusKey(
  element: HTMLInputElement | HTMLTextAreaElement,
  options: FocusKeyOptions = {}
) {
  const key = options.key || "/";
  const keys = Array.isArray(key) ? key : [key];
  const selectText = options.selectText === true;
  const keydown = (e: KeyboardEvent) => {
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
  };

  document.body.addEventListener("keydown", keydown);

  return {
    destroy() {
      document.body.removeEventListener("keydown", keydown);
    },
  };
}
