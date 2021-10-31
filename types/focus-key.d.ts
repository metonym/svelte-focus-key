import { FocusKeyProps } from "./FocusKey.svelte";

export function focusKey(
  element: HTMLElement,
  options?: Pick<FocusKeyProps, "key">
): {
  destroy: () => void;
};
