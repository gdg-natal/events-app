/** @type {import('next').NextConfig} */
const withImages = require('next-images')

const nextConfig = withImages({
  compiler: {
    styledComponents:  {
      displayName: true
    }
  }
})

module.exports = nextConfig
