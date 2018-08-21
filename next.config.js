// This how you create a static build

/*
> npm run build && npm run export 
*/

module.exports = {
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/demo': { page: '/demo' },
    }
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
    // Perform customizations to webpack config
    // Important: return the modified config
    config.node = {
      fs: "empty"
    };
    return config;
  },
}