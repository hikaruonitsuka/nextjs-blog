import Inner from '@/components/layout/Inner';
import Wrapper from '@/components/layout/Wrapper';
import { client } from '@/lib/client';
import { Blog } from '@/types/blog';

type Props = {
  blog: Blog;
};

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: 'blog' });

  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: 'blog', contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};

const BlogId = ({ blog }: Props) => (
  <Wrapper>
    <Inner>
      <article>
        <h1>{blog.title}</h1>
        <p>{blog.publishedAt}</p>
        <p>{blog.category && blog.category.name}</p>
        <div
          dangerouslySetInnerHTML={{
            __html: `${blog.body}`,
          }}
        />
      </article>
    </Inner>
  </Wrapper>
);

export default BlogId;
