import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, test } from "vitest";
import { focusKey } from "../src";

describe("focus-key", () => {
  let instance: null | ReturnType<typeof focusKey> = null;

  afterEach(() => {
    instance = null;
    document.body.innerHTML = "";
  });

  test("Default focus key '/'", async () => {
    document.body.innerHTML = "<input />";

    const input = document.querySelector("input")!;

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
    document.body.innerHTML = "<input />";

    const input = document.querySelector("input")!;

    instance = focusKey(input, { key: "s" });

    await userEvent.keyboard("s");
    expect(document.activeElement).toEqual(input);
    input.blur();

    await userEvent.keyboard("/");
    expect(document.activeElement).not.toEqual(input);
  });

  test("Multiple focus keys", async () => {
    document.body.innerHTML = "<input />";

    const input = document.querySelector("input")!;

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

  test("Combo keys", async () => {
    document.body.innerHTML = "<input />";

    const input = document.querySelector("input")!;

    instance = focusKey(input, { key: ["Meta+k"], selectText: true });

    await userEvent.keyboard("{meta>}{k}");
    expect(document.activeElement).toEqual(input);

    await userEvent.keyboard("text");
    input.blur();

    await userEvent.keyboard("{meta>}{k}");
    expect(input.selectionStart).toEqual(0);
    expect(input.selectionEnd).toEqual(4);
  });
});
