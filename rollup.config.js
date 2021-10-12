import svelteReadme from "svelte-readme";

export default svelteReadme({
  style: `
    input {
      height: 3rem;
      background: #f4f4f4;
      border: 0;
      border-bottom: 1px solid #8d8d8d;
      padding: 0 1rem;
    }

    input:focus {
      outline: #0f62fe solid 2px;
      outline-offset: -2px;
    }
  `,
});
