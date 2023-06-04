import { InferGetStaticPropsType, NextPage } from 'next';
import { client } from '@/lib/client';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Inner from '@/components/Inner';
import PublishDate from '@/components/PublishDate';
import UpdateDate from '@/components/UpdateDate';
import { Blog } from '@/types/blog';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticProps = async () => {
	const data: Blog = await client.get({ endpoint: 'blog' });

	return {
		props: {
			post: data.contents,
		},
	};
};

const Home: NextPage<Props> = ({ post }: Props) => (
	<Layout>
		{post.length > 0 ? (
			<Inner>
				<div className='mt-8 grid grid-cols-repeat gap-8 sm:grid-cols-2 md:grid-cols-3'>
					{post.map((post) => (
						<Link
							className='flex aspect-square flex-col justify-center gap-4 rounded-xl bg-secondary-50 p-6 transition duration-300 hover:scale-105 dark:bg-secondary-900'
							href={`/post/${post.id}`}
							key={post.id}
						>
							<span className='aspect-square self-center text-4xl'>{post.icon}</span>
							<h2 className='font-bold'>{post.title}</h2>
							{post.publishedAt === post.updatedAt ? (
								<PublishDate date={post.publishedAt} />
							) : (
								<UpdateDate date={post.updatedAt} />
							)}
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

export default Home;
