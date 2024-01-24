import { client } from '@/utils/client';

export const getStaticProps = async () => {
	/* eslint-disable */
  const data = await client.get({ endpoint: 'blog' });

  return {
    props: {
      post: data.contents,
    },
  };
};
