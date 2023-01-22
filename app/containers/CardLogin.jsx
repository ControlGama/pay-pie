import styles from "../../styles/login.module.css";

export function CardLogin({ children }) {
  return (
    <>
      <div className={styles.top__bar}></div>
      <div className={styles.card__container}>
        <div className={styles.ellipse}>
          <div className={styles.card}>{children}</div>
        </div>
      </div>
      <div className={styles.bottom__bar}></div>
    </>
  );
}
