import Head from "next/head";
import Layout, { siteTitle } from "../../components/layout.js";
import utilStyles from "../../styles/utils.module.css";
import { getSortedPostsData } from "../../lib/booksPosts";
import Link from "next/link";
import Date from "../../components/date.js";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Books({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>📚 کتاب ها:</h2>
        <div className={utilStyles.postsSection}>
          {allPostsData.map(({ id, date, title, picture }) => (
            <Link key={id} as={`/posts/${id}`} href={`/posts/${id}`}>
              <div className={utilStyles.postCard}>
                <img src={picture} />
                <p style={{ fontSize: "0.9rem" }}>{title}</p>
                <small className={utilStyles.dateText}>
                  <Date dateString={date} />
                </small>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
}
