import { Toggle } from "../Form/Toggle/Toggle";
import styles from "./AdditionalInfo.module.css";

export function AdditionalInfo() {
  return (
    <>
      <div className={styles.additionalOptions}>
        <h2>Opções adicionais</h2>
        <div className={styles.additionalOptionsContent}>
          <div>
            <h3>Inserir documentos e arquivos</h3>
            <p>
              Deseja adicionar documentos para o seu cliente visualizar e baixar
              quando receber esta cobrança
            </p>
          </div>
          <div>
            <Toggle />
          </div>
        </div>
        <div className={styles.additionalOptionsContent}>
          <div>
            <h3>Inserir documentos e arquivos</h3>
            <p>
              Deseja adicionar documentos para o seu cliente visualizar e baixar
              quando receber esta cobrança
            </p>
          </div>
          <div>
            <Toggle />
          </div>
        </div>
      </div>
    </>
  );
}
