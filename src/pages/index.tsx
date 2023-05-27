import Link from 'next/link';
import { client } from '@/lib/client';
import type { Blog } from '@/types/blog';
import Wrapper from '@/components/layout/Wrapper';

// APIリクエスト
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

export default function Home({ blog }) {
  return (
    <Wrapper>
      <ul>
        {blog.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
}
