import Link from "next/link";
import styles from "./linkCard.module.css";
import Swal from "sweetalert2";

export default function LinkCard({ card }) {
  const { imageSrc, title, description, link } = card;
  return (
    <div
      onClick={(e) => {
        if (card.id !== 5) {
          Swal.fire({
            title: "صفحه وجود ندارد",
            text: "بخش مورد نظر در حال کامل شدن می باشد و هنوز اضافه نشده",
            icon: "error",
            confirmButtonText: "باشه 😒",
          });
        }
      }}
    >
      <Link as={card.id !== 5 ? "" : link} href={card.id !== 5 ? "" : link}>
        <div className={styles.flipCard}>
          <div className={styles.flipCardInner}>
            <div className={styles.flipCardFront}>
              <img
                src={imageSrc}
                alt={`img-${title}`}
                style={{ width: "200px", height: "200px" }}
              />
            </div>
            <div className={styles.flipCardBack}>
              <h4>{title}</h4>
              <p className={styles.text}>{description}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
