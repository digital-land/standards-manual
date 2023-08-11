module.exports = function (eleventyConfig) {
    // Options to customise the appearance of your design history
    // https://x-govuk.github.io/govuk-eleventy-plugin/options/
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