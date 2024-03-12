import { Blog } from '@/types/Blog';
import { createClient } from 'microcms-js-sdk';
import type { MicroCMSQueries } from 'microcms-js-sdk';

if (!process.env.SERVICE_DOMAIN) {
  throw new Error('SERVICE_DOMAIN is required');
}

if (!process.env.API_KEY) {
  throw new Error('API_KEY is required');
}

export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN,
  apiKey: process.env.API_KEY,
});

// 投稿一覧を取得
export const getList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<Blog>({
    endpoint: 'blog',
    queries,
  });

  return listData;
};

// 投稿詳細ページを取得
export const getDetail = async (contentId: string, queries?: MicroCMSQueries) => {
  const detailData = await client.getListDetail<Blog>({
    endpoint: 'blog',
    contentId,
    queries,
  });

  return detailData;
};
