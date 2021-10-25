import svelteReadme from "svelte-readme";

export default svelteReadme({
  style: `
    input,
    textarea {
      font: inherit;
      background: #f4f4f4;
      border: 0;
      border-bottom: 1px solid #8d8d8d;
      padding: 0.75rem 1rem;
    }

    input:focus,
    textarea:focus {
      outline: #0f62fe solid 2px;
      outline-offset: -2px;
    }
  `,
});
