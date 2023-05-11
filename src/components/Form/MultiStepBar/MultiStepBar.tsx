import styles from "./MultiStepBar.module.css";

export function MultiStepBar() {
  return (
    <div className={styles.multiStepContainer}>
      <section className={styles.stepWizard}>
        <ul className={styles.stepWizardList}>
          <li className={styles.stepWizardItem}>
            <div className={styles.firstStepMark}>
              <span className={styles.progressCount}>1</span>
            </div>
            <span className={styles.progressLabel}>Dados da cobrança</span>
          </li>
          <li className={styles.stepWizardItem}>
            <span className={styles.progressCount}>2</span>
            <span className={styles.progressLabel}>Juros e Multa</span>
          </li>
          <li className={styles.stepWizardItem}>
            <span className={styles.progressCount}>3</span>
            <span className={styles.progressLabel}>Dados do cliente</span>
          </li>
          <li className={styles.stepWizardItem}>
            <span className={styles.progressCount}>4</span>
            <span className={styles.progressLabel}>Resumo</span>
          </li>
        </ul>
      </section>
    </div>
  );
}
