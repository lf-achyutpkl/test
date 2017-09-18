module.exports = {
  apps: [
    {
      name: 'auth',
      script: 'dist/index.js',
      instances: process.env.APP_INSTANCES || 2
    }
  ]
};
