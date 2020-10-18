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
    { id: 9, name: "English", percent: 70 },
  ];
  return (
    <Layout>
      <Head>
        <title>رزومه</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <h4 className={styles.heading}>درباره من</h4>
      <p className={styles.paragraph}>
        من فرشید منوچهری کلانتری هستم. متولد بهمن ۱۳۷۱ هستم. مدرک کارشناسی خود
        را از دانشگاه آزاد تهران شمال و مدرک کارشناسی ارشد را از دانشگاه صنعتی
        شیراز دریافت کرده ام. در هر دو مقطع رشته ی تحصیلیم کامپیوتر 💻 و گرایش
        نرم افزار بوده است. پسری آرام - شوخ طبع و ... هستم - (کمی تا قسمتی هم
        خجالتی 😎) مشمول برای خدمت سربازی و علاقه مند به یادگیری و کتاب و برنامه
        نویسی تحت وب هستم.
      </p>
      <section style={{ display: "flex" }}>
        <div>
          <h4 className={styles.heading}>توانایی ها</h4>
          <div className={styles.abilities}>
            {abilities.map((ab) => (
              <div key={ab.id} className={styles.abilityRoot}>
                <p style={{ marginBottom: "-5px" }}>{ab.name}</p>
                <div className={styles.ability}>
                  <div className={styles[`abilityValue${ab.name}`]}>
                    {ab.percent}%
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.pictureContainer}>
          <img src="/images/stand-simple.png" className={styles.image} />
        </div>
      </section>
      <hr />
      <section>
        <h4 className={styles.heading}> سوابق کاری</h4>
        <p>
          {" "}
          <a
            href="https://farshidmk.github.io/farshid/"
            className={styles.link}
          >
            اینجا
          </a>
          رزومه قبلیم هستش که با Material-Ui و Reactدرست شده. هنوز خیلی جای کار
          داشت و داره که نصفه و نیمه ول شده تا یه روزی ...
        </p>
        <p className={styles.paragraph}>
          سوابق کاری که انجام دادم. از سال اول دانشگاه شروع کردم به کار و چندین
          شغل مختلف و چالش های مختلف رو تجربه کردم تا بالاخره اون شعلی که مد
          نظرم هست و بهش علاقه دارم رو پیدا کردم.{" "}
        </p>
        <ul>
          <li>کار آموز در شرکت پارس ريز پرداز ۱۳۹۰-۱۳۹۳</li>
          <li>برنامه نويس در شرکت اندیشه نگار پارس ۱۳۹۴-۱۳۹۵</li>
          <li> فریلنسري ۱۳۹۸ تا الان</li>
        </ul>
        نمونه کارهایی که انجام داده ام داخل لینک های زیر نشان داده شده است
        <ul>
          <li>
            <a href="https://www.loom.com/share/fea5085d864f42cea7b8ae949d908e14">
              {" "}
              ایجاد اینباکس برای شرکت resharmonic. (امکان فرستادن پیام هم و لود
              شدن پیام ها به صورت پیجینگ و .... )
            </a>
          </li>
          <li>
            <a href="https://www.loom.com/share/24698a9bcdbf436bbaa000878d92eceb">
              {" "}
              برنامه ای برای خط تولید شرکتی که به صورت آنلاین کاربرانش به آن
              دسترسی دارند و می توانند کارهایی که انجام داده اند و کارهایی که
              باید انجام دهند را مشاهده کنند. برنامه شامل پنل ادمین است که
              کاربران را مدیریت یا خط تولیدی یا محصول جدیدی در سیستم تعریف کند
            </a>
          </li>
          <li>
            <a href="https://www.loom.com/share/ce7d8e9e263e4c2f944e5a0a7df9e4f4">
              {" "}
              بخشی از پروژه که امکان خرید لوازم اضافی برای اتاق و مدت زمانی که
              رزو کرده را مهیا میکند. در این پروژه از ریداکس استفاده شده است.
            </a>
          </li>
        </ul>
      </section>
    </Layout>
  );
}
