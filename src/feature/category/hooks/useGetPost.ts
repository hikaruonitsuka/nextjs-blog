import { client } from '@/utils/client';

// ディレクトリパス
const PATH = '/category/';

export const getStaticPaths = async () => {
	/* eslint-disable */
  const data = await client.get({ endpoint: 'categories' });
  const paths = data.contents.map((content: any) => `${PATH}${content.id}`);

  return { paths, fallback: false };
};

export const getStaticProps = async (context: any) => {
  const id = context.params.id;

  // カテゴリー名を取得
  const categoryName = await client.get({
    endpoint: 'categories',
    queries: { filters: `id[contains]${id}` },
  });

  // カテゴリ記事のみ絞り込む
  const data = await client.get({
    endpoint: 'blog',
    queries: { filters: `category[contains]${id}` },
  });

  return {
    props: {
      categoryName: categoryName.contents[0].name,
      post: data.contents,
    },
  };
};
