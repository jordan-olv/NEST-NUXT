module.exports = {
  apps: [
    {
      name: 'backend',
      cwd: './server',
      script: 'dist/main.js',
      env: {
        NODE_ENV: 'production',
        PORT: 4021
      }
    },
    {
      name: 'frontend',
      cwd: './client',
      script: '.output/server/index.mjs',
      env: {
        NODE_ENV: 'production',
        PORT: 3021,
        HOST: '0.0.0.0'
      }
    }
  ]
}
