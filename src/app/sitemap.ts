import { BASE_URL } from '@/config';
import { getList } from '@/lib/microcms';
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  if (!process.env.BASE_URL) {
    throw new Error('BASE_URL is not defined in the environment variables');
  }

  const { contents } = await getList();
  const lastModified = new Date();

  const staticPaths = [
    {
      url: BASE_URL,
      lastModified,
    },
  ];

  const dynamicPaths = contents.map((post) => {
    return {
      url: `${BASE_URL}/post/${post.id}`,
      lastModified,
    };
  });

  return [...staticPaths, ...dynamicPaths];
}
