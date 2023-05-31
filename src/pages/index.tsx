import Link from 'next/link';
import { client } from '@/lib/client';
import type { Blog } from '@/types/blog';
import Layout from '@/components/layout/Layout';
import Inner from '@/components/layout/Inner';
import normalizeTime from '@/lib/normalizeTime';

type Props = {
  blog: Blog[];
};

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: 'blog' });

  return {
    props: {
      blog: data.contents,
    },
  };
};

const Home = ({ blog }: Props) => (
  <Layout>
    <Inner>
      <div className='mt-8 grid grid-cols-repeat gap-8 sm:grid-cols-2 md:grid-cols-3'>
        {blog.map((blog) => (
          <Link
            className='flex aspect-square flex-col justify-center gap-4 rounded-xl p-6 transition duration-300 hover:scale-105 dark:hover:bg-dark-black-secondary'
            href={`/blog/${blog.id}`}
            key={blog.id}
          >
            <span className='aspect-square self-center text-4xl'>{blog.icon}</span>
            <h2 className='text-lg font-bold'>{blog.title}</h2>
            <time className='text-sm' dateTime={normalizeTime(blog.publishedAt)}>
              {normalizeTime(blog.publishedAt)}
            </time>
          </Link>
        ))}
      </div>
    </Inner>
  </Layout>
);

export default Home;
