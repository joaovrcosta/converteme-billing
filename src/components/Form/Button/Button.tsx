import styles from "./Button.module.css";

interface ButtonProps {
  title: string;
}

export function Button({ title }: ButtonProps) {
  return <button className={styles.nextStepButton}>{title}</button>;
}
