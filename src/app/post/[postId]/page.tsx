import Link from 'next/link';
import { notFound } from 'next/navigation';
import hljs, { HighlightResult } from 'highlight.js';
import { load } from 'cheerio';
import PostDate from '@/components/PostDate';
import { getDetail, getList } from '@/lib/microcms';
import normalizeTime from '@/utils/normalizeTime';

export async function generateStaticParams() {
  const { contents } = await getList();

  const paths = contents.map((post) => {
    return {
      postId: post.id,
    };
  });

  return [...paths];
}

export default async function PostPage({ params: { postId } }: { params: { postId: string } }) {
  const post = await getDetail(postId);

  if (!post) {
    notFound();
  }

  /**
   * シンタックスハイライトの追加
   * @see https://codeseterpie.com/blog/e91oc4aaef58/
   */

  // APIから取得したリッチエディタのHTMLからcheerioオブジェクトを生成
  const $ = load(post.body);

  // コードブロックのシンタックスハイライトを行う
  $('pre code').each((_, elm) => {
    // const language = $(elm).attr('class') || '';

    const result: HighlightResult = hljs.highlightAuto($(elm).text());
    // if (language == '') {
    //   // 言語が入力なしの場合、自動判定
    // } else {
    //   // 言語が入力ありの場合、入力された言語で判定
    //   result = hljs.highlight($(elm).text(), {
    //     language: language.replace('language-', ''),
    //   });
    // }
    $(elm).html(result.value);
    $(elm).addClass('hljs');
  });

  // 編集したHTMLを再設定
  post.body = $.html();

  /**
   * 前後記事の取得
   */
  // const prev = await client.get({
  //   endpoint: 'blog',
  //   queries: {
  //     limit: 1,
  //     orders: '-publishedAt',
  //     filters: `publishedAt[less_than]${data.publishedAt}`,
  //   },
  // });
  // const next = await client.get({
  //   endpoint: 'blog',
  //   queries: {
  //     limit: 1,
  //     orders: 'publishedAt',
  //     filters: `publishedAt[greater_than]${data.publishedAt}`,
  //   },
  // });

  // const prevPost = prev.contents[0]
  //   ? {
  //       title: prev.contents[0].title,
  //       link: `${PATH}${prev.contents[0].id}`,
  //     }
  //   : null;
  // const nextPost = next.contents[0]
  //   ? {
  //       title: next.contents[0].title,
  //       link: `${PATH}${next.contents[0].id}`,
  //     }
  //   : null;

  const publishedAt = normalizeTime(post.publishedAt);
  const updatedAt = normalizeTime(post.updatedAt);

  return (
    <>
      <article className='mt-10'>
        <div className='flex items-center gap-4'>
          {publishedAt === updatedAt ? (
            <PostDate time='publish' date={publishedAt} />
          ) : (
            <>
              <PostDate time='publish' date={publishedAt} />
              <PostDate time='update' date={updatedAt} />
            </>
          )}
        </div>
        <h1 className='mt-4 text-2xl font-bold leading-normal'>{post.title}</h1>
        {post.category.length > 0 && (
          <div className='mt-4 flex flex-wrap items-center gap-2'>
            {post.category.map((category) => (
              <Link
                href={`/category/${category.id}`}
                className='rounded-md bg-secondary-100 p-2 text-xs leading-none transition-opacity hover:opacity-60 dark:bg-secondary-800'
                key={category.id}
              >
                {category.name}
              </Link>
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
    </>
  );
}

{
  /* <div
          className={`flex gap-10 ${!nextPost ? 'justify-end' : ''}${
            !prevPost ? 'justify-start' : ''
          }${prevPost && nextPost ? 'justify-between' : ''}`}
        >
          {nextPost && (
            <Link
              href={nextPost.link}
              className="inline-flex items-center gap-2 underline transition-opacity before:h-2 before:w-2 before:shrink-0 before:rotate-[-45deg] before:border-l-2 before:border-t-2 before:border-solid before:border-current before:content-[''] hover:opacity-60"
            >
              {nextPost.title}
            </Link>
          )}
          {prevPost && (
            <Link
              href={prevPost.link}
              className="inline-flex items-center gap-2 underline transition-opacity after:h-2 after:w-2 after:shrink-0 after:rotate-[135deg] after:border-l-2 after:border-t-2 after:border-solid after:border-current after:content-[''] hover:opacity-60"
            >
              {prevPost.title}
            </Link>
          )}
        </div> */
}
