<script>
  import "github-markdown-css";
</script>

<main class="markdown-body">
  <slot />
</main>

<style global>
  .markdown-body {
    box-sizing: border-box;
    min-width: 200px;
    max-width: 980px;
    margin: 0 auto;
    padding: 45px;
  }

  @media (max-width: 767px) {
    .markdown-body {
      padding: 15px;
    }
  }

  .language-yaml {
    color: #0550ae;
  }
  .language-typescript {
    color: #0550ae;
  }
  .language-typescript .string {
    color: #0a3069;
  }
  .language-typescript .number {
    color: #005cc5;
  }
  .language-typescript .class-name {
    color: #24292f;
  }
  .token.keyword {
    color: #d73a49;
  }
  .token.language-javascript {
    color: #24292e;
  }
  .token.language-javascript .function {
    color: #005cc5;
  }
  .token.language-javascript .string {
    color: #032f62;
  }
  .token.language-javascript .number {
    color: #005cc5;
  }
  .token.language-javascript .keyword {
    color: #d73a49;
  }
  .token.each {
    color: #d73a49;
  }
  .token.punctuation {
    color: #24292e;
  }
  .token.tag {
    color: #22863a;
  }
  .token.attr-name {
    color: #6f42c1;
  }
  .token.attr-value {
    color: #032f62;
  }
  .token.operator {
    color: #d73a49;
  }
  .token.comment {
    color: #6a737d;
  }
  .token.function {
    color: #6f42c1;
  }
  .token.string {
    color: #032f62;
  }
  .token.each .language-javascript:last-child {
    color: #e36209;
  }
  .language-css {
    color: #032f62;
  }
  .language-css .selector {
    color: #22863a;
  }
  .language-css .property {
    color: #005cc5;
  }

  .markdown-body pre {
    margin-top: 16px;
  }

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
</style>
