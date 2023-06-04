/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // HTMLのlang属性を設定
  i18n: {
    locales: ['ja'],
    defaultLocale: 'ja',
  },
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({ ...nextConfig });
