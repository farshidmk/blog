import LinkCard from "./linkCard";

export default function LinkCards() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
      }}
    >
      {cards.map((card) => (
        <LinkCard key={card.id} card={card} />
      ))}
    </div>
  );
}

const cards = [
  {
    id: 1,
    title: "کتاب",
    description:
      "توی این بخش کتابهایی که خوندم و متنها یا نکات قشنگی یا خلاصه کل کتاب رو مینویسم",
    imageSrc: "/images/sections/book.png",
    link: "/books",
  },
  {
    id: 2,
    title: "آموزشی",
    description:
      "هرچی که یاد میگیرم و فکر میکنم به کار میاد رو توی این بخش به زبون خودم مینویسم. که هم یادم نره هم شاید به درد یکی دیگه بخوره",
    imageSrc: "/images/sections/learning.png",
    link: "/learning",
  },
  {
    id: 3,
    title: "معرفی",
    description:
      "معرفی همه چیزهایی که برام جالب بوده و باهاشون ارتباط برقرار کردم. از نرم افزار تا سریال تا .... خلاصه همه چی !!",
    imageSrc: "/images/sections/introduce.png",
    link: "/introduce",
  },
  {
    id: 4,
    title: "ادبیات طور",
    description:
      "در این بخش به مبحث ادبیات پرداخته میشود. شعرهای زیبا نوشته های خودم و سایر مباحث زیبای ادبی",
    imageSrc: "/images/sections/literature.png",
    link: "/literature",
  },
  {
    id: 5,
    title: "رزومه",
    description: "رزومه خودم که چه کارهایی کردم و نکردم ",
    imageSrc: "/images/sections/resume.png",
    link: "/resume",
  },
];
