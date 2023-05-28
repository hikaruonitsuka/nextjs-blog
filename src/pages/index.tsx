import Link from 'next/link';
import { client } from '@/lib/client';
import type { Blog } from '@/types/blog';
import Wrapper from '@/components/layout/Wrapper';
import Inner from '@/components/layout/Inner';

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: 'blog' });

  return {
    props: {
      blog: data.contents,
    },
  };
};

type Props = {
  blog: Blog[];
};

const Home = ({ blog }: Props) => (
  <Wrapper>
    <Inner>
      <ul className='flex flex-col gap-4'>
        {blog.map((blog) => (
          <li key={blog.id}>
            <Link className='block text-xl font-bold' href={`/blog/${blog.id}`}>
              {blog.title}
            </Link>
          </li>
        ))}
      </ul>
    </Inner>
  </Wrapper>
);

export default Home;
