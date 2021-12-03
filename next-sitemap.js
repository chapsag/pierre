const siteUrl = 'htpps://app.goffi.dev'

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', disallow: '/secret' },
      { userAgent: '*', allow: '/' }
    ]
  },
  exclude: ['/secret/*']
}
