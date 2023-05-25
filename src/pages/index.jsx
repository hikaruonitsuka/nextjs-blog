import Layout from "@/components/Layout";
import { getPostsData } from "@/lib/post";
import Link from "next/link";

// SSGの場合
export async function getStaticProps() {
  const allPostsData = getPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <ul>
        {allPostsData.map(({ id, title, date }) => (
          <li key={id}>
            <Link href={`/posts/${id}`}>
              <article>
                <h2>{title}</h2>
                <time dateTime={`${date}`}>{date}</time>
              </article>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
