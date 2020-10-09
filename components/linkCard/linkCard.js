import Link from "next/link";
import styles from "./linkCard.module.css";

export default function LinkCard({ card }) {
  const { imageSrc, title, description, link } = card;
  return (
    <Link as={link} href={link}>
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
  );
}
