module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(require('@x-govuk/govuk-eleventy-plugin'), {
      stylesheets: [
        '/styles/application.css'
      ],
      headingPermalinks: true,
      header: {
        organisationLogo: false,
        organisationName: 'Planning Data',
        productName: 'Standards',
        search: {
          indexPath: '/search.json',
          sitemapPath: '/sitemap'
        }
      }
    })
  
    // Passthrough
    eleventyConfig.addPassthroughCopy({ './app/images': '.' })
  
    // Config
    return {
      dataTemplateEngine: 'njk',
      htmlTemplateEngine: 'njk',
      markdownTemplateEngine: 'njk',
      dir: {
        input: 'app',
        output: 'public',
        layouts: '_layouts',
        includes: '_components'
      }
    }
  }