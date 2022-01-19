/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

interface ImportMetaEnv extends Readonly<Record<string, string | boolean | number | undefined>> {
  readonly VITE_API_URL: string,
  readonly VITE_PASSWORD_GRANT_CLIENT_ID: string,
  readonly VITE_PASSWORD_GRANT_CLIENT_SECRET: string,
  readonly VITE_FIREBASE_PROJECT_ID: string,
  readonly VITE_FIREBASE_APP_ID: string,
  readonly VITE_FIREBASE_API_KEY: string,
  // more env variables...
}