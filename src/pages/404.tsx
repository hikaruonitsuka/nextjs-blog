import LinkButton from '@/components/button/LinkButton';
import Layout from '@/components/Layout';

export const custom404 = () => {
  return (
    <Layout center>
      <div className='flex flex-col items-center gap-10'>
        <p className='font-bold'>ページが見つかりませんでした</p>
        <LinkButton href='/'>TOPへ戻る</LinkButton>
      </div>
    </Layout>
  );
};

export default custom404;
