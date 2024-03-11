import { MetadataRoute } from 'next';

// # Host
// Host: https://oni-log.vercel.app

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://oni-log.vercel.app/sitemap.xml',
  };
}
