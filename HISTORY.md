```sh
# pnpm
npm install -g pnpm

# Router
pnpm i vue-router@4

# Pages
pnpm i vite-plugin-pages

# Layouts
pnpm i vite-plugin-vue-layouts

# vite.config.ts > path
# tsconfig.json
pnpm i @types/node

# SEO
pnpm i @vueuse/head

# Tailwind CSS
pnpm i tailwindcss postcss autoprefixer
npx tailwindcss init -p

# ICONS, autoInstall: true 自動安裝來源
pnpm i unplugin-icons @iconify/json

# UI
pnpm i @headlessui/vue
pnpm i daisyui

# form validate
pnpm i vee-validate@next yup

# store
pnpm i pinia

# axios
pnpm i axios

# vueuse
pnpm i @vueuse/integrations

# cookies
pnpm i universal-cookie
```

```diff
# vite.config.ts > path
# tsconfig.json
{
  "compilerOptions": {
    "types": [
+     "vite-plugin-pages/client",
+     "vite-plugin-vue-layouts/client",
+     "unplugin-icons/types/vue"
    ],
+   "paths": {
+     "~/*": ["./src/*"]
+   }
  },
}
```
