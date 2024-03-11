import Link from 'next/link';
import PostDate from '@/components/PostDate';
import normalizeTime from '@/utils/normalizeTime';
import { getList } from '@/lib/microcms';

const Home = async () => {
  const { contents } = await getList();

  if (!contents || contents.length === 0) {
    return (
      <div className='mt-8 flex h-full items-center justify-center'>
        <p className='font-bold'>記事が存在しません</p>
      </div>
    );
  }
  return (
    <div className='mt-8 grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-4 sm:grid-cols-3 sm:gap-8'>
      {contents.map((post) => {
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
                <PostDate time='publish' date={publishedAt} />
              ) : (
                <div className='flex flex-col gap-1'>
                  <PostDate time='update' date={updatedAt} />
                </div>
              )}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Home;
