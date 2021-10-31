# svelte-focus-key

[![NPM][npm]][npm-url]

> Svelte component and action to focus an element when pressing a key

<!-- REPO_URL -->

The primary use case is to focus a search input when pressing the forward slash key ("/").

---

<!-- TOC -->

## Installation

**Yarn**

```bash
yarn add -D svelte-focus-key
```

**NPM**

```bash
npm i -D svelte-focus-key
```

**pnpm**

```bash
pnpm i -D svelte-focus-key
```

## Usage

### Basic

Use the [bind:this](https://svelte.dev/docs#bind_element) directive to pass the element to focus to the `FocusKey` component.

```svelte
<script>
  import FocusKey from "svelte-focus-key";

  let element;
</script>

<input bind:this={element} placeholder={'Press "/" to focus'} />

<FocusKey {element} />
```

### Custom focus key

The default focus key is the forward slash (`/`). Customize the key using the `key` prop.

```svelte
<script>
  import FocusKey from "svelte-focus-key";

  let textarea;
</script>

<textarea bind:this={textarea} placeholder={'Press "s" to focus'} />

<FocusKey element={textarea} key="s" />
```

### focusKey action

This utility is also available as a [Svelte action](https://svelte.dev/docs#use_action).

```svelte
<script>
  import { focusKey } from "svelte-focus-key";
</script>

<input use:focusKey={{ key: "k" }} placeholder={'Press "k" to focus'} />
```

## API

### Props

| Prop name | Type          | Default value |
| :-------- | :------------ | :------------ |
| element   | `HTMLElement` | `null`        |
| key       | `string`      | `"/"`         |

## TypeScript

Svelte version 3.31 or greater is required to use this component with TypeScript.

TypeScript definitions are located in the [types folder](types/).

## Changelog

[CHANGELOG.md](CHANGELOG.md)

## License

[MIT](LICENSE)

[npm]: https://img.shields.io/npm/v/svelte-focus-key.svg?style=for-the-badge&color=%23ff3e00
[npm-url]: https://npmjs.com/package/svelte-focus-key
