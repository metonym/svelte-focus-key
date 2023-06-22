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
  let pressedKeys: string[] = [];

  const keydown = (e: KeyboardEvent) => {
    pressedKeys = [...pressedKeys, e.key];
  };

  const keyup = (e: KeyboardEvent) => {
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
  };

  document.body.addEventListener("keydown", keydown);
  document.body.addEventListener("keyup", keyup);

  return {
    update(options) {
      ({ keys, selectText } = setOptions(options));
      element.selectionStart = element.selectionEnd;
    },
    destroy() {
      document.body.removeEventListener("keydown", keydown);
      document.body.removeEventListener("keyup", keyup);
    },
  };
};
