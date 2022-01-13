```sh
# pnpm
npm install -g pnpm

# 路由
pnpm i vue-router@4

# 頁面
pnpm i vite-plugin-pages

# Layout
pnpm i vite-plugin-vue-layouts

# vite.config.ts > path
# tsconfig.json
pnpm i @types/node

# SEO
pnpm i @vueuse/head
```

```diff
# vite.config.ts > path
# tsconfig.json
{
  "compilerOptions": {
+   "paths": {
+     "~/*": ["./src/*"]
+   }
  },
}
```
