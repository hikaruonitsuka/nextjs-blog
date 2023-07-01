import { GetStaticProps, NextPage } from 'next';
import { client } from '@/utils/client';
import { Post } from '@/types/post';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Inner from '@/components/Inner';
import PublishDate from '@/components/PublishDate';
import UpdateDate from '@/components/UpdateDate';
import { NextSeo } from 'next-seo';
import { SITE_NAME } from '@/config';

type Props = { post: Post[] };


const metaTags = {
  title: 'HOME',
  ogTitle: SITE_NAME,
  description: 'おにの備忘録ブログです',
};

const Home: NextPage<Props> = ({ post }: Props) => {
  return (
    <Layout>
      <NextSeo
        title={metaTags.title}
        description={metaTags.description}
        openGraph={{
          type: 'website',
          title: `${metaTags.ogTitle}`,
          description: `${metaTags.description}`,
        }}
      />
      {post.length > 0 ? (
        <Inner>
          <div className='mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3'>
            {post.map((post: Post) => (
              <Link
                className='flex flex-col justify-start gap-4 rounded-xl bg-secondary-50 p-6 transition duration-300 hover:scale-105 dark:bg-secondary-900 sm:aspect-square'
                href={`/post/${post.id}`}
                key={post.id}
              >
                <span className='aspect-square self-center text-4xl'>{post.icon}</span>
                <span className='flex flex-grow flex-col justify-between'>
                  <h2 className='font-bold'>{post.title}</h2>
                  {post.publishedAt === post.updatedAt ? (
                    <PublishDate date={post.publishedAt} />
                  ) : (
                    <UpdateDate date={post.updatedAt} />
                  )}
                </span>
              </Link>
            ))}
          </div>
        </Inner>
      ) : (
        <div className='mt-8 flex h-full items-center justify-center'>
          <p className='font-bold'>記事が存在しません</p>
        </div>
      )}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.get({ endpoint: 'blog' });

  return {
    props: {
      post: data.contents,
    },
  };
};

export default Home;
