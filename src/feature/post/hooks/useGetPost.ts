import { client } from '@/utils/client';

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: 'blog' });
  const paths = data.contents.map((content: any) => `/post/${content.id}`);

  return { paths, fallback: false };
};

export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: 'blog', contentId: id });

  return {
    props: {
      post: data,
    },
  };
};
