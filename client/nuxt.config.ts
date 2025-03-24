// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  devServer: {
    port: 3021,
    host: '0.0.0.0'
  },
  nitro: {
    preset: 'node-server'
  },
  serverMiddleware: [
    '~/server/middleware/metrics.global.ts'
  ],
  vite: {
    server: {
      watch: {
        usePolling: true,
        interval: 100
      },
      hmr: {
        clientPort: 3021
      }
    }
  }
})
