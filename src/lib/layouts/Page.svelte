<script lang="ts">
  import { onMount } from 'svelte'
  import { page } from '$app/stores'

  export let title = ''
  export let summary = '스테이정글, 블로그, 건겅한 식단, 정기배송'

  $: plainTextTitle = title.replace(/<.+?>/g, '')
  onMount(() => {
    console.log('👩‍💻 개발자 콘솔을 열어본 당신, 개발자가 분명하군요! 어서 지원하세요! 🙋🏻‍♀️ 🙋🏾‍♂️')
    console.log('https://blog.stayjungle.com/dev-recruit/')
  })
</script>

<svelte:head>
  <title>{plainTextTitle}</title>
  <meta name="description" content={summary} />
  <meta name="twitter:card" content="summary_large_image" />

  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="스테이정글 블로그" />
  <meta property="og:url" content={$page.url.pathname} />
  <meta property="og:title" content={plainTextTitle} />
  <meta property="og:description" content={summary} />
  <meta property="og:image" content="https://blog.stayjungle.com/images/big-logo.png" />
  <meta property="og:image:alt" content="스테이정글 로고" />
</svelte:head>

<main>
  <h1>{@html title}</h1>
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

  :global(h2, h3, h4, h5, h6) {
    font-weight: normal;
    margin-bottom: 1rem;
  }

  h1 {
    margin-bottom: 2em;
  }

  main {
    max-width: 40rem;
    margin: 0 auto;
    padding: 4rem 2rem;
  }
</style>
