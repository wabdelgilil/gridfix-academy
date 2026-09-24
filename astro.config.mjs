// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { courses } from './src/data/courses.ts';

const plannedCourseIds = courses.filter((c) => c.status !== 'live').map((c) => c.id);

export default defineConfig({
  site: 'https://academy.gridfix.net',
  output: 'static',
  integrations: [
    react(),
    mdx(),
    sitemap({
      filter: (page) => {
        const path = new URL(page).pathname;
        return !plannedCourseIds.some((id) => path.startsWith(`/${id}`));
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
  },
});