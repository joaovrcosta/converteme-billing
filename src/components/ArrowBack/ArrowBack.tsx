import { ArrowLeft } from "lucide-react";
import styles from "./ArrowBack.module.css";

export function ArrowBack() {
  return (
    <>
      <div className={styles.arrowBack}>
        <a href="" className={styles.arrowBackLink}>
          <ArrowLeft className={styles.arrowLeft} />
          Voltar
        </a>
      </div>
      <h2 className={styles.billingTitle}>Cobrança</h2>
    </>
  );
}
