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
pnpm i unplugin-icons
pnpm i @iconify/json

# UI
pnpm i @headlessui/vue
pnpm i daisyui

# form validate
pnpm i vee-validate@next
pnpm i yup

# store
pnpm i pinia

# axios
pnpm i axios

# vueuse
pnpm i @vueuse/core
pnpm i @vueuse/integrations

# cookies
pnpm i universal-cookie

# firebase
pnpm i @vueuse/firebase
pnpm i firebase

# toast
pnpm i vue-toastification@next

# graphql
pnpm i graphql
pnpm i graphql-tag
pnpm i @apollo/client

# vue-apollo
# composable api
pnpm i @vue/apollo-composable
# components
pnpm i @vue/apollo-components

# graphql-codegen
pnpm i @graphql-codegen/cli
pnpm i @graphql-codegen/typescript
pnpm i @graphql-codegen/typescript-operations
pnpm i @graphql-codegen/typescript-vue-apollo

# graphql-codegen init
pnpm graphql-codegen init

# storybook (wip:pnpm)
rm -rf node_modules
npm install
npx sb@next init --builder storybook-builder-vite
npm run storybook

# Vite SVG loader
pnpm i vite-svg-loader
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


```sh
docker build -t vite-nginx .

docker run --name vite-nginx -d -p 8080:80 vite-nginx

docker exec -it vite-nginx /bin/sh
```
