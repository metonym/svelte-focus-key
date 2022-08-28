# svelte-focus-key

[![NPM][npm]][npm-url]

> Svelte component and action to focus an element when pressing a key

The primary use case is to focus a search input when pressing the forward slash key ("/").

## Installation

```bash
# Yarn
yarn add -D svelte-focus-key

# NPM
npm i -D svelte-focus-key

# pnpm
pnpm i -D svelte-focus-key
```

## Usage

### `FocusKey` component

Use the [bind:this](https://svelte.dev/docs#bind_element) directive to pass the element to focus to the `FocusKey` component.

<!-- example-start demo/Basic.svelte -->

```svelte
<script>
  import FocusKey from "svelte-focus-key";

  let element;
</script>

<input bind:this={element} placeholder={'Press "/" to focus'} />

<FocusKey {element} />
```

<!-- example-end -->

### Custom focus key

The default focus key is the forward slash (`/`). Customize the key using the `key` prop.

<!-- example-start demo/CustomFocusKey.svelte -->

```svelte
<script>
  import FocusKey from "svelte-focus-key";

  let element;
</script>

<textarea bind:this={element} placeholder={'Press "s" to focus'} />

<FocusKey element={element} key="s" />
```

<!-- example-end -->

### Multiple focus keys

The `key` prop can also accept an array of keys.

<!-- example-start demo/MultipleFocusKeys.svelte -->

```svelte
<script>
  import FocusKey from "svelte-focus-key";

  let element;
</script>

<input bind:this={element} placeholder={'Press "a" or "b"'} />

<FocusKey element={element} key={["a", "b"]} />
```

<!-- example-end -->

### Select text on focus

Set `selectText` to `true` to select the text in the element when focusing.

<!-- example-start demo/SelectTextOnFocus.svelte -->

```svelte
<script>
  import FocusKey from "svelte-focus-key";

  let element;
</script>

<input
  bind:this={element}
  value={'Press "e" to focus'}
  placeholder={'Press "e" to focus'}
/>

<FocusKey {element} key="e" selectText />
```

<!-- example-end -->

### `focusKey` action

This utility also provides a [Svelte action](https://svelte.dev/docs#use_action).

<!-- example-start demo/FocusKeyAction.svelte -->

```svelte
<script>
  import { focusKey } from "svelte-focus-key";
</script>

<input use:focusKey={{ key: "k" }} placeholder={'Press "k" to focus'} />
```

<!-- example-end -->

## API

### Props

| Name       | Description                       | Type                   | Default value |
| :--------- | :-------------------------------- | :--------------------- | :------------ |
| element    | HTML element to focus             | `HTMLElement`          | `null`        |
| key        | Key to trigger focus when pressed | `string` or `string[]` | `"/"`         |
| selectText | Select element text when focusing | `boolean`              | `false`       |

The `focusKey` action has the same props as `FocusKey` except for `element`.

[npm]: https://img.shields.io/npm/v/svelte-focus-key.svg?style=for-the-badge&color=%23ff3e00
[npm-url]: https://npmjs.com/package/svelte-focus-key
