/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.API_BASE_URL,
  generateRobotsTxt: true,
  sitemapSize: 7000,
};
