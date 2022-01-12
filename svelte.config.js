import remarkAbbr from 'remark-abbr'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import adapter from '@sveltejs/adapter-static'
import preprocess from 'svelte-preprocess'
import { mdsvex } from 'mdsvex'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.md'],
  preprocess: [
    preprocess(),
    mdsvex({
      extensions: ['.md'],
      smartypants: {
        dashes: 'oldschool',
      },
      remarkPlugins: [remarkAbbr],
      rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'wrap' }]],
      layout: {
        page: './src/lib/layouts/Page.svelte',
        _: './src/lib/layouts/Default.svelte',
      },
    }),
  ],
  kit: {
    adapter: adapter(),
    prerender: {
      onError: 'continue',
    },
    target: 'body',
  },
}

export default config
