import Layout from "@/components/Layout";
import { getAllPostsId, getPostData } from "@/lib/post";

export async function getStaticPaths() {
  const paths = getAllPostsId();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export const Post = ({ postData }) => {
  return (
    <Layout>
      <article>
        <h2>{postData.title}</h2>
        <time dateTime={`${postData.date}`}>{postData.date}</time>
        <div dangerouslySetInnerHTML={{ __html: postData.blogContentHTML }} />
      </article>
    </Layout>
  );
};

export default Post;
