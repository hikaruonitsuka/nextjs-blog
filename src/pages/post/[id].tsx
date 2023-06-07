import * as cheerio from 'cheerio';
import hljs from 'highlight.js';
import { NextPage } from 'next';
import { client } from '@/lib/client';
import { Post } from '@/types/post';
import Category from '@/components/Category';
import Layout from '@/components/Layout';
import Inner from '@/components/Inner';
import PublishDate from '@/components/PublishDate';
import UpdateDate from '@/components/UpdateDate';

type PostPageProps = {
  post: Post;
};

const PostPage: NextPage<PostPageProps> = ({ post }) => {
  return (
    <Layout>
      <Inner>
        <article className='mt-10'>
          <div className='flex items-center gap-4'>
            {post.publishedAt === post.updatedAt ? (
              <PublishDate date={post.publishedAt} />
            ) : (
              <>
                <PublishDate date={post.publishedAt} />
                <UpdateDate date={post.updatedAt} />
              </>
            )}
          </div>
          <h1 className='mt-4 text-2xl font-bold leading-normal'>{post.title}</h1>
          {post.category.length > 0 && (
            <div className='mt-4 flex gap-2'>
              {post.category.map((category) => (
                <Category key={category.id} category={category.name} />
              ))}
            </div>
          )}
          <div
            className='single mt-8 border-t-2 border-solid border-body-black pt-8 dark:border-secondary-900'
            dangerouslySetInnerHTML={{
              __html: `${post.body}`,
            }}
          />
        </article>
      </Inner>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: 'blog' });
  const paths = data.contents.map((content: Post) => `/post/${content.id}`);

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: 'blog', contentId: id });

  const $ = cheerio.load(data.body);
  $('pre code').each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text());
    $(elm).html(result.value);
    $(elm).addClass('hljs');
  });
  data.body = $.html();

  return {
    props: {
      post: data,
    },
  };
};

export default PostPage;
