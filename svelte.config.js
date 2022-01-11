import adapter from '@sveltejs/adapter-static'
import preprocess from 'svelte-preprocess'
import md from 'mdsvex'
import mdsvexConfig from './mdsvex.config.js'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', ...mdsvexConfig.extensions],
  preprocess: [preprocess(), md.mdsvex(mdsvexConfig)],
  kit: {
    adapter: adapter(),
    prerender: {
      onError: 'continue',
    },
    target: 'body',
  },
}

export default config
