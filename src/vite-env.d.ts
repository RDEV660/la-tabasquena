/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Canonical site URL (no trailing slash), e.g. https://latabasquenabakery.com */
  readonly VITE_SITE_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
