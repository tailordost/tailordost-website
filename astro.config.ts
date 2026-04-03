// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadEnv } from 'vite';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Load .env so COLOR_THEME is available even when not set in the shell
const env = loadEnv(process.env.NODE_ENV ?? 'development', __dirname, '');
const colorTheme = (env.COLOR_THEME ?? process.env.COLOR_THEME ?? 'boutique').trim();
const validThemes = ['mono', 'boutique'];
const activeTheme = validThemes.includes(colorTheme) ? colorTheme : 'boutique';

/**
 * Vite plugin that writes src/styles/theme-active.css before the build
 * or dev server starts.  globals.css imports this file so Tailwind's
 * PostCSS plugin sees the correct @theme block.
 *
 * To switch themes set COLOR_THEME in your .env file (or shell) and
 * restart the dev server / rebuild:
 *
 *   COLOR_THEME=boutique   →  src/styles/theme-boutique.css  (default)
 *   COLOR_THEME=mono       →  src/styles/theme-mono.css
 */
function colorThemePlugin() {
  return {
    name: 'color-theme-generator',
    configResolved() {
      const src = readFileSync(
        resolve(__dirname, `src/styles/theme-${activeTheme}.css`),
        'utf-8',
      );
      writeFileSync(resolve(__dirname, 'src/styles/theme-active.css'), src);
      console.log(`[color-theme] Active theme: ${activeTheme}`);
    },
  };
}

// https://astro.build/config
export default defineConfig({
  integrations: [icon()],
  vite: {
    plugins: [colorThemePlugin()],
  },
  server: {
    host: '0.0.0.0',
    port: 5000,
    allowedHosts: true, // don't touch this!
  },
});
