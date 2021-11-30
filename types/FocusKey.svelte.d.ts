/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FocusKeyProps {
  /**
   * Specify the element to focus
   * @default null
   */
  element?: HTMLElement;

  /**
   * Specify the key to trigger the element focus
   * @default "/"
   */
  key?: string;

  /**
   * Set to `true` to select text in the element when focused
   * @default false
   */
  selectText?: boolean;
}

export default class extends SvelteComponentTyped<FocusKeyProps, {}, {}> {}
