/** @type {import('next').NextConfig} */

module.exports = {
  trailingSlash: true,
  pageExtensions: ['js', 'tsx', 'ts'],
  images: {
    domains: [],
    basePath: '/images',
  },
}