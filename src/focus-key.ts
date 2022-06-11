import type { Action } from "svelte/action";

interface FocusKeyOptions {
  key?: string | string[];
  selectText?: boolean;
}

type FocusKeyAction = Action<
  HTMLInputElement | HTMLTextAreaElement,
  FocusKeyOptions
>;

const setOptions = (options: FocusKeyOptions = {}) => {
  const key = options.key || "/";

  return {
    keys: Array.isArray(key) ? key : [key],
    selectText: options.selectText === true,
  };
};

export const focusKey: FocusKeyAction = (element, options) => {
  let { keys, selectText } = setOptions(options);

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
    update(options) {
      ({ keys, selectText } = setOptions(options));
      element.selectionStart = element.selectionEnd;
    },
    destroy() {
      document.body.removeEventListener("keydown", keydown);
    },
  };
};
