import { describe, it, expect } from "vitest";
import * as API from "../src";
import pkg from "../package.json";

describe("Library", () => {
  it("has 0 dependencies", () => {
    // @ts-expect-error
    expect(Object.keys(pkg.dependencies ?? {}).length).toEqual(0);
  });

  it("has exports", () => {
    expect(Object.keys(API)).toMatchInlineSnapshot(`
      [
        "default",
        "focusKey",
      ]
    `);
  });
});
