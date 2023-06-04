import Category from '@/components/Category';
import Inner from '@/components/Inner';
import Layout from '@/components/Layout';
import PublishDate from '@/components/PublishDate';
import UpdateDate from '@/components/UpdateDate';
import { client } from '@/lib/client';
import { Blog } from '@/types/blog';

type Props = {
	post: Blog;
};

export const getStaticPaths = async () => {
	const data = await client.get({ endpoint: 'blog' });

	const paths = data.contents.map((content) => `/post/${content.id}`);
	return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
	const id = context.params.id;
	const data = await client.get({ endpoint: 'blog', contentId: id });

	return {
		props: {
			post: data,
		},
	};
};

const BlogId = ({ post }: Props) => (
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

export default BlogId;
