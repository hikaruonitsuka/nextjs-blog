import { NextSeo } from 'next-seo';
import { getStaticPaths, getStaticProps } from '@/feature/post/hooks/useGetPost';
import type { Post, Category } from '@/types/post';
import Layout from '@/components/Layout';
import Inner from '@/components/Inner';
import PublishDate from '@/components/PublishDate';
import UpdateDate from '@/components/UpdateDate';
import { PostCategory } from '@/components/PostCategory';

type Props = {
  post: Post;
};

const PostPage = ({ post }: Props) => {
	console.log(post.body);
  return (
    <Layout>
      <NextSeo
        title={post.title}
        description={post.description}
        openGraph={{
          title: `${post.title}`,
          description: `${post.description}`,
        }}
      />
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
            <div className='mt-4 flex flex-wrap items-center gap-2'>
              {post.category.map((category) => (
                <PostCategory key={category.id} name={category.name} />
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

export default PostPage;
export { getStaticProps, getStaticPaths };
