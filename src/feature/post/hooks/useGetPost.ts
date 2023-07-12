import { client } from '@/utils/client';

// ディレクトリパス
const PATH = '/post/';

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: 'blog' });
  const paths = data.contents.map((content: any) => `${PATH}${content.id}`);

  return { paths, fallback: false };
};

export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: 'blog', contentId: id });

  // 前後記事の取得
  const prev = await client.get({
    endpoint: 'blog',
    queries: {
      limit: 1,
      orders: '-publishedAt',
      filters: `publishedAt[less_than]${data.publishedAt}`,
    },
  });
  const next = await client.get({
    endpoint: 'blog',
    queries: {
      limit: 1,
      orders: 'publishedAt',
      filters: `publishedAt[greater_than]${data.publishedAt}`,
    },
  });

  const prevPost = prev.contents[0]
    ? {
        title: prev.contents[0].title,
        link: `${PATH}${prev.contents[0].id}`,
      }
    : null;
  const nextPost = next.contents[0]
    ? {
        title: next.contents[0].title,
        link: `${PATH}${next.contents[0].id}`,
      }
    : null;

  return {
    props: {
      post: data,
      prevPost: prevPost,
      nextPost: nextPost,
    },
  };
};
