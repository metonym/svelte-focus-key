import { FocusKeyProps } from "./FocusKey.svelte";

export function focusKey(
  element: HTMLElement,
  options?: Omit<FocusKeyProps, "element">
): {
  destroy: () => void;
};
