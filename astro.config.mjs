// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  compressHTML: false,
  redirects: {
    '/blogs': '/posts',
    '/blogs/[...slug]': '/posts/[...slug]',
    '/blogs/cors': '/posts/cors',
    '/blogs/empty-strings-and-zero-length-arrays': '/posts/empty-strings-and-zero-length-arrays',
    '/blogs/just-loving-what-you-do-isnt-enough': '/posts/just-loving-what-you-do-isnt-enough',
    '/blogs/learning-by-reading': '/posts/learning-by-reading',
    '/blogs/redis-keyspace-notifications': '/posts/redis-keyspace-notifications',
    '/blogs/superficial-motivator': '/posts/superficial-motivator',
    '/blogs/what-is-polling': '/posts/what-is-polling',
    '/blogs/wrote-code-today': '/posts/wrote-code-today',
  },
});
