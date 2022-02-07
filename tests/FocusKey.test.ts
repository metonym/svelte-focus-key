import { test, expect, describe, afterEach } from "vitest";
import userEvent from "@testing-library/user-event";
import { tick } from "svelte";
import { default as FocusKey } from "../src";

describe("FocusKey", () => {
  let instance: FocusKey = null;

  afterEach(() => {
    instance?.$destroy();
    instance = null;
    document.body.innerHTML = "";
  });

  test("Default focus key '/'", () => {
    document.body.innerHTML = `
      <div id="target">
        <input />
      </div>
    `;

    const target = document.getElementById("target");
    const input = document.querySelector("input");

    instance = new FocusKey({
      target,
      props: {
        element: input,
      },
    });

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
      <div id="target">
        <input />
      </div>
    `;

    const target = document.getElementById("target");
    const input = document.querySelector("input");

    instance = new FocusKey({
      target,
      props: {
        element: input,
        key: "s",
      },
    });

    userEvent.keyboard("s");
    expect(document.activeElement).toEqual(input);
    input.blur();

    userEvent.keyboard("/");
    expect(document.activeElement).not.toEqual(input);
  });

  test("Multiple focus keys", async () => {
    document.body.innerHTML = `
      <div id="target">
        <input />
      </div>
    `;

    const target = document.getElementById("target");
    const input = document.querySelector("input");

    instance = new FocusKey({
      target,
      props: {
        element: input,
        key: ["s", "/"],
      },
    });

    userEvent.keyboard("/");
    expect(document.activeElement).toEqual(input);
    input.blur();

    userEvent.keyboard("s");
    expect(document.activeElement).toEqual(input);
    input.blur();

    instance.$set({
      key: "y",
      selectText: true,
    });

    await tick();

    userEvent.keyboard("/");
    expect(document.activeElement).not.toEqual(input);

    userEvent.keyboard("y");
    expect(document.activeElement).toEqual(input);

    userEvent.keyboard("y");
    expect(input.value).toEqual("y");

    input.blur();

    userEvent.keyboard("y");
    expect(input.selectionStart).toEqual(0);
    expect(input.selectionEnd).toEqual(1);
  });
});
