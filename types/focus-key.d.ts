import { FocusKeyProps } from "./FocusKey.svelte";

type FocusKeyOptions = Pick<FocusKeyProps, "key">;

export function focusKey(
  element: HTMLElement,
  options?: FocusKeyOptions
): {
  update: (options?: FocusKeyOptions) => void;
  destroy: () => void;
};
