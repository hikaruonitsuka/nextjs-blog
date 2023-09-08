import { client } from '@/utils/client';
import hljs, { HighlightResult } from 'highlight.js';
import { load } from 'cheerio';

// ディレクトリパス
const PATH = '/post/';

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: 'blog' });
  const paths = data.contents.map((content: any) => `${PATH}${content.id}`);

  return { paths, fallback: false };
};

export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: 'blog', contentId: id });

  /**
   * シンタックスハイライトの追加
   * @see https://codeseterpie.com/blog/e91oc4aaef58/
   */

  // APIから取得したリッチエディタのHTMLからcheerioオブジェクトを生成
  const $ = load(data.body);

  // コードブロックのシンタックスハイライトを行う
  $('pre code').each((_, elm) => {
    const language = $(elm).attr('class') || '';
    let result: HighlightResult;

		result = hljs.highlightAuto($(elm).text());
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
  data.body = $.html();

  // 前後記事の取得
  const prev = await client.get({
    endpoint: 'blog',
    queries: {
      limit: 1,
      orders: '-publishedAt',
      filters: `publishedAt[less_than]${data.publishedAt}`,
    },
  });
  const next = await client.get({
    endpoint: 'blog',
    queries: {
      limit: 1,
      orders: 'publishedAt',
      filters: `publishedAt[greater_than]${data.publishedAt}`,
    },
  });

  const prevPost = prev.contents[0]
    ? {
        title: prev.contents[0].title,
        link: `${PATH}${prev.contents[0].id}`,
      }
    : null;
  const nextPost = next.contents[0]
    ? {
        title: next.contents[0].title,
        link: `${PATH}${next.contents[0].id}`,
      }
    : null;

  return {
    props: {
      post: data,
      prevPost: prevPost,
      nextPost: nextPost,
    },
  };
};
