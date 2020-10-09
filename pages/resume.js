import Head from "next/head";
import Layout from "../components/layout";
import styles from "../styles/resume.module.css";

export default function Books() {
  const abilities = [
    { id: 1, name: "Js", percent: 80 },
    { id: 2, name: "React", percent: 70 },
    { id: 3, name: "TypeScript", percent: 40 },
    { id: 4, name: "MaterialUi", percent: 80 },
    { id: 5, name: "NodeJs", percent: 45 },
    { id: 6, name: "Git", percent: 65 },
    { id: 7, name: "HtmlCss", percent: 75 },
    { id: 8, name: "NextJs", percent: 55 },
  ];
  return (
    <Layout>
      <Head>
        <title>رزومه</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <section style={{ display: "flex" }}>
        <div>
          <h4 className={styles.heading}>درباره من</h4>
          <p className={styles.paragraph}>
            من فرشید منوچهری کلانتری هستم. متولد بهمن ۱۳۷۱ هستم. مدرک کارشناسی
            خود را از دانشگاه آزاد تهران شمال و مدرک کارشناسی ارشد را از دانشگاه
            صنعتی شیراز دریافت کرده ام. در هر دو مقطع رشته ی تحصیلیم کامپیوتر 💻
            و گرایش نرم افزار بوده است. پسری آرام - شوخ طبع و ... هستم - (کمی تا
            قسمتی هم خجالتی 😎) مشمول برای خدمت سربازی و علاقه مند به یادگیری و
            کتاب و برنامه نویسی تحت وب هستم.
          </p>
          <h4 className={styles.heading}>توانایی ها</h4>
          <div className={styles.abilities}>
            {abilities.map((ab) => (
              <div className={styles.abilityRoot}>
                <p style={{ marginBottom: "-5px" }}>{ab.name}</p>
                <div className={styles.ability}>
                  <div className={styles[`abilityValue${ab.name}`]}>
                    {ab.percent}%
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p>
            {" "}
            <a
              href="https://farshidmk.github.io/farshid/"
              className={styles.link}
            >
              اینجا
            </a>
            رزومه قبلیم هستش هنوز که با Material-Ui و Reactدرست شده. هنوز خیلی
            جای کار داشت و داره که نصفه و نیمه ول شده ت ایه روزی ...
          </p>
        </div>
        <div className={styles.pictureContainer}>
          <img src="/images/stand-simple.png" />
        </div>
      </section>
      <h4 className={styles.heading}> سوابق کاری</h4>
      <p className={styles.paragraph}>
        سوابق کاری که انجام دادم از سال اول دانشگاه شروع کردم و چندین شغل مختلف
        و چالش های مختلف رو تجربه کردم تا بلاخره اون شعلی که مد نظرم هست و بهش
        علاقه دارم رو پیدا کردم.
        <ul>
          <li>کار آموز در شرکت پارس ريز پرداز ۱۳۹۰-۱۳۹۳</li>
          <li>برنامه نويس در شرکت اندیشه نگار پارس ۱۳۹۴-۱۳۹۵</li>
          <li>برنامه نویسی وب به عنوان فریلنسر ۱۳۹۸ تا الان</li>
        </ul>
        توی این دو ویدیو هم فیلم کوتاهی از نمونه کارهایی که انجام دادم رو نشون
        <ul>
          <li>
            <a href="https://www.loom.com/share/a950be489b8d462888f1e5457e0a29a6">
              {" "}
              ایجاد اینباکس برای شرکت resharmonic. (امکان فرستادن پیام هم و لود
              شدن پیام ها به صورت پیجینگ و .... )
            </a>
          </li>
          <li>برنامه نويس در شرکت اندیشه نگار پارس ۱۳۹۴-۱۳۹۵</li>
          <li>برنامه نویسی وب به عنوان فریلنسر ۱۳۹۸ تا الان</li>
        </ul>
        دادم
      </p>
    </Layout>
  );
}
