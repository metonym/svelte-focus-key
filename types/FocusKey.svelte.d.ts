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
}

export default class extends SvelteComponentTyped<FocusKeyProps, {}, {}> {}
