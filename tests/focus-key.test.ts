import { test, expect, describe, afterEach } from "vitest";
import userEvent from "@testing-library/user-event";
import { focusKey } from "../src";

describe("focus-key", () => {
  let instance: ReturnType<typeof focusKey> = null;

  afterEach(() => {
    instance = null;
    document.body.innerHTML = "";
  });

  test("Default focus key '/'", async () => {
    document.body.innerHTML = "<input />";

    const input = document.querySelector("input");

    instance = focusKey(input);

    await userEvent.keyboard("/");
    expect(document.activeElement).toEqual(input);

    await userEvent.keyboard("/");
    expect(input.value).toEqual("/");
    input.blur();

    await userEvent.keyboard("s");
    expect(document.activeElement).not.toEqual(input);
  });

  test("Custom focus key 's'", async () => {
    document.body.innerHTML = `
      <input />
    `;

    const input = document.querySelector("input");

    instance = focusKey(input, { key: "s" });

    await userEvent.keyboard("s");
    expect(document.activeElement).toEqual(input);
    input.blur();

    await userEvent.keyboard("/");
    expect(document.activeElement).not.toEqual(input);
  });

  test("Multiple focus keys", async () => {
    document.body.innerHTML = "<input />";

    const input = document.querySelector("input");

    instance = focusKey(input, { key: ["s", "/"], selectText: true });

    await userEvent.keyboard("/");
    expect(document.activeElement).toEqual(input);
    input.blur();

    await userEvent.keyboard("s");
    expect(document.activeElement).toEqual(input);
    input.blur();

    await userEvent.keyboard("/");
    expect(document.activeElement).toEqual(input);

    await userEvent.keyboard("text");
    input.blur();

    await userEvent.keyboard("/");
    expect(input.selectionStart).toEqual(0);
    expect(input.selectionEnd).toEqual(4);
  });
});
