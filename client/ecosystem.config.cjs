
module.exports = {
  apps: [
    {
      name: 'NuxtAppName',
      port: '3021',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs'
    }
  ]
}
