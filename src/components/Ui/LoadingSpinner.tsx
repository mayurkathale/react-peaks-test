import styles from "./LoadingSpinner.module.scss";

export const LoadingSpinner = () => {
  return (
    <div className={styles.spinnerContainer}>
      <div className={styles.loadingSpinner}></div>
    </div>
  );
};
