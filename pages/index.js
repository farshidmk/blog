import Head from "next/head";
import Layout, { siteTitle } from "../components/layout.js";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date.js";
import LinkCards from "../components/linkCard/linkCards";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          من فرشید منوچهری کلانتری هستم. دارای مدرک کارشناسی ارشد از دانشگاه
          صنعتی شیراز در رشته مهندسی کامپیوتر.
          <br />
          <strong>
            مجردم. ورزشکارم. تقریبا کتاب زیاد میخونم. بردگیم دوست دارم و به برنامه نویسی تحت وب
            علاقه زیادی دارم
          </strong>
          &nbsp;تو این وبلاگ قراره خلاصه یا نکات مهمی از کتابهایی که میخونم رو
          توش بنویسم. نکات مهمی که یاد میگیرم تو دنیای برنامه نویسی رو اینجا
          ذخیره میکنم(هم خودم بهتر یاد میگیرم هم شاید یکی دعامون کرد و مشکل گشا
          بود) و چیزهای دیگه که فکر میکنم ارزش به اشتراک گذاشتن با بقیه رو داره
          رو قراره تو این وبلاگ بنویسم
        </p>

        {/* شبکه های اجتماعی
        linkedin
         */}
        <small>
          این وبلاگ با&nbsp;
          <a href="https://nextjs.org/">Next.js</a>
          &nbsp; نوشته شده سورس وبلاگ داخل گیت هابم هست
        </small>
      </section>
      <section>
        <LinkCards />
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>آخرین نوشته ها</h2>
        <p style={{ color: "#808080" }}>خالیه. !!</p>
        {/* <div className={utilStyles.postsSection}>
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
        </div> */}
      </section>
    </Layout>
  );
}
