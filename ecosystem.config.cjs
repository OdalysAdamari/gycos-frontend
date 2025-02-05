module.exports = {
  apps: [
    {
      name: 'gycos-frontend',
      script: "npm run dev",
      env: {
        PM2_SERVE_PATH: "./dist",
        PM2_SERVE_PORT: 5173,
        PM2_SERVE_SPA: "true",
        NODE_ENV: 'production',
      },
    },
  ],
};
