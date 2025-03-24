module.exports = {
  apps: [
    {
      name: "backend-prod",
      script: "dist/main.js",
      cwd: "./server",
      env: {
        NODE_ENV: "production",
        PORT: 4022,
      },
    },
    {
      name: "frontend-prod",
      script: ".output/server/index.mjs",
      cwd: "./client",
      env: {
        NODE_ENV: "production",
        PORT: 3022,
        HOST: "0.0.0.0",
      },
    },
  ],
};
