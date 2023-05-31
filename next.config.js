/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // HTMLのlang属性を設定
  i18n: {
    locales: ['ja'],
    defaultLocale: 'ja',
  },
};

module.exports = nextConfig;
