// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  devServer: {
    port: 3021,
    host: '0.0.0.0'
  },
  vite: {
    server: {
      watch: {
        usePolling: true, // Force Vite à surveiller les fichiers en continu
        interval: 100 // Vérifie plus fréquemment
      },
      hmr: {
        clientPort: 3021, // Assure la connexion HMR
      }
    }
  }
})
