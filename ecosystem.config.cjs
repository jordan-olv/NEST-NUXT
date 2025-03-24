module.exports = {
  apps: [
    {
      name: "backend-dev",
      script: "dist/main.js",
      cwd: "./server",
      env: {
        NODE_ENV: "development",
      },
    },
    {
      name: "frontend-dev",
      script: ".output/server/index.mjs",
      cwd: "./client",
      env: {
        NODE_ENV: "development",
        PORT: 3022,
        HOST: "0.0.0.0",
      },
    },
  ],
};
