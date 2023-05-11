import styles from "./Toggle.module.css";

export function Toggle() {
  return (
    <>
      <label className={styles.switch}>
        <input type="checkbox" id="btn" name="btn" />
        <span className={styles.slider}></span>
      </label>
    </>
  );
}
