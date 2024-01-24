import type { Post } from '@/types/post';
import { NextSeo } from 'next-seo';
import { getStaticProps } from '@/feature/index/hooks/useGetPost';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Inner from '@/components/Inner';
import { SITE_NAME } from '@/config';
import Date from '@/components/Date';
import normalizeTime from '@/utils/normalizeTime';

type Props = { post: Post[] };

const metaTags = {
  title: 'HOME',
  ogTitle: SITE_NAME,
  description: 'おにの備忘録ブログです',
};

const Home = ({ post }: Props) => {
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
          <div className='mt-8 grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-4 sm:grid-cols-3 sm:gap-8'>
            {post.map((post) => {
              const publishedAt = normalizeTime(post.publishedAt);
              const updatedAt = normalizeTime(post.updatedAt);

              return (
                <Link
                  className='flex flex-col justify-start gap-4 rounded-xl bg-secondary-50 p-6 transition duration-300 hover:scale-105 dark:bg-secondary-900 sm:aspect-square'
                  href={`/post/${post.id}`}
                  key={post.id}
                >
                  <span className='aspect-square self-center text-4xl'>{post.icon}</span>
                  <div className='flex flex-grow flex-col justify-between gap-4'>
                    <h2 className='font-bold'>{post.title}</h2>
                    {publishedAt === updatedAt ? (
                      <Date time='publish' date={publishedAt} />
                    ) : (
                      <div className='flex flex-col gap-1'>
                        <Date time='update' date={updatedAt} />
                      </div>
                    )}
                  </div>
                </Link>
              );
            })}
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

export default Home;

export { getStaticProps };
