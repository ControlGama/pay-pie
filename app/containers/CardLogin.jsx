import containerStyles from "../../styles/containers.module.css";

export function CardLogin({ children }) {
  return (
    <>
      <div className={containerStyles.top__bar}></div>
      <div className={containerStyles.card__container}>
        <div className={containerStyles.ellipse}>
          <div className={containerStyles.card}>{children}</div>
        </div>
      </div>
      <div className={containerStyles.bottom__bar}></div>
    </>
  );
}
