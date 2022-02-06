import { test, expect, describe, afterEach } from "vitest";
import userEvent from "@testing-library/user-event";
import { focusKey } from "../src";

describe("focus-key", () => {
  let instance: ReturnType<typeof focusKey> = null;

  afterEach(() => {
    instance?.destroy();
    instance = null;
    document.body.innerHTML = "";
  });

  test("Default focus key '/'", () => {
    document.body.innerHTML = `
      <input />
    `;

    const input = document.querySelector("input");

    instance = focusKey(input);

    userEvent.keyboard("/");
    expect(document.activeElement).toEqual(input);

    userEvent.keyboard("/");
    expect(input.value).toEqual("/");
    input.blur();

    userEvent.keyboard("s");
    expect(document.activeElement).not.toEqual(input);
  });

  test("Custom focus key 's'", () => {
    document.body.innerHTML = `
      <input />
    `;

    const input = document.querySelector("input");

    instance = focusKey(input, { key: "s" });

    userEvent.keyboard("s");
    expect(document.activeElement).toEqual(input);
    input.blur();

    userEvent.keyboard("/");
    expect(document.activeElement).not.toEqual(input);
  });

  test("Multiple focus keys", () => {
    document.body.innerHTML = `
      <input />
    `;

    const input = document.querySelector("input");

    instance = focusKey(input, { key: ["s", "/"] });

    userEvent.keyboard("/");
    expect(document.activeElement).toEqual(input);
    input.blur();

    userEvent.keyboard("s");
    expect(document.activeElement).toEqual(input);
    input.blur();
  });
});
