import Wrapper from '@/components/layout/Wrapper';
import { client } from '@/lib/client';

/**
 * ブログ詳細ページ
 */
export default function BlogId({ blog }) {
  return (
    <Wrapper>
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
    </Wrapper>
  );
}

/**
 * microCMSから記事データまでのパスを取得して返す
 */
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: 'blog' });

  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

/**
 * 取得したパスからブログの詳細データをpropsで返す
 */
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: 'blog', contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};
