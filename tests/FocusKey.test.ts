import userEvent from "@testing-library/user-event";
import { tick } from "svelte";
import { default as FocusKey } from "svelte-focus-key";
import { afterEach, describe, expect, test } from "vitest";

describe("FocusKey", () => {
  let instance: null | FocusKey = null;

  afterEach(() => {
    instance?.$destroy();
    instance = null;
    document.body.innerHTML = "";
  });

  test("Default focus key '/'", async () => {
    document.body.innerHTML = `
      <div id="target">
        <input />
      </div>
    `;

    const target = document.getElementById("target")!;
    const input = document.querySelector("input")!;

    instance = new FocusKey({
      target,
      props: {
        element: input,
      },
    });

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
      <div id="target">
        <input />
      </div>
    `;

    const target = document.getElementById("target")!;
    const input = document.querySelector("input")!;

    instance = new FocusKey({
      target,
      props: {
        element: input,
        key: "s",
      },
    });

    await userEvent.keyboard("s");
    expect(document.activeElement).toEqual(input);
    input.blur();

    await userEvent.keyboard("/");
    expect(document.activeElement).not.toEqual(input);
  });

  test("Multiple focus keys", async () => {
    document.body.innerHTML = `
      <div id="target">
        <input />
      </div>
    `;

    const target = document.getElementById("target")!;
    const input = document.querySelector("input")!;

    instance = new FocusKey({
      target,
      props: {
        element: input,
        key: ["s", "/"],
      },
    });

    await userEvent.keyboard("/");
    expect(document.activeElement).toEqual(input);
    input.blur();

    await userEvent.keyboard("s");
    expect(document.activeElement).toEqual(input);
    input.blur();

    instance.$set({
      key: "y",
      selectText: true,
    });

    await tick();

    await userEvent.keyboard("/");
    expect(document.activeElement).not.toEqual(input);

    await userEvent.keyboard("y");
    expect(document.activeElement).toEqual(input);

    await userEvent.keyboard("y");
    expect(input.value).toEqual("y");

    input.blur();

    await userEvent.keyboard("y");
    expect(input.selectionStart).toEqual(0);
    expect(input.selectionEnd).toEqual(1);
  });

  test("Combo keys", async () => {
    document.body.innerHTML = `
      <div id="target">
        <input />
      </div>
    `;

    const target = document.getElementById("target")!;
    const input = document.querySelector("input")!;

    instance = new FocusKey({
      target,
      props: {
        element: input,
        key: ["Meta+k"],
      },
    });

    await userEvent.keyboard("{meta>}{k}");
    expect(document.activeElement).toEqual(input);
  });
});
