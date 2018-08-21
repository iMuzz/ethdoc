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
  }
}