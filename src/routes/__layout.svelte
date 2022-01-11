<svelte:head>
  <meta name="description" content="스테이정글 블로그, 건겅한 식단, 정기배송" />
  <title>스테이정글 블로그</title>
</svelte:head>

<main>
  <slot />
</main>

<style>
  @import url('@picocss/pico');

  :global(body) {
    line-height: 1.6;
    word-break: keep-all;
    font-family: -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI',
      'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
  }

  :global(h1, h2, h3, h4, h5, h6) {
    font-weight: normal;
    margin-bottom: 1rem;
  }

  main {
    max-width: 40rem;
    margin: 0 auto;
    padding: 4rem 2rem;
  }
</style>
