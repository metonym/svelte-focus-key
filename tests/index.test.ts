import { expect, test } from "vitest";
import * as pkg from "../package.json";
import * as API from "../src";

test("Library has 0 dependencies", () => {
  // @ts-expect-error
  expect(Object.keys(pkg.dependencies ?? {}).length).toEqual(0);
});

test("Library has exports", () => {
  expect(Object.keys(API)).toMatchInlineSnapshot(`
    [
      "default",
      "focusKey",
    ]
  `);
});
