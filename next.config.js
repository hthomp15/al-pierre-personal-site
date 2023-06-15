/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  basePath: '/al-pierre-personal-site',
  assetPrefix: '/al-pierre-personal-site/',
  publicRuntimeConfig: {
    basePath: process.env.BASE_PATH || 'al-pierre-personal-site',
  },
}

