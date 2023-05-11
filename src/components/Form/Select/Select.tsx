import styles from "./Select.module.css";
import { selectMethodsData } from "../../../data/dataMethods";
import { useState } from "react";

// interface SelectProps {
//   title: string;
// }

export function Select() {
  const [openSelect, setOpenSelect] = useState(false);
  const [select, setSelect] = useState<number | null>(null);

  return (
    <>
      {selectMethodsData.map((option, index) => {
        return (
          <>
            <div
              key={index}
              onClick={() => {
                setSelect(index);
                setOpenSelect(!openSelect);
              }}
              className={styles.paymentMethodBox}
            >
              <div className={styles.paymentMethodCheckbox}>
                <input type="checkbox" />
                <h3>{option.name}</h3>
              </div>
              <div className={styles.paymentInformations}>
                <div>
                  <p>Valor líquido por parcela: R$148,01</p>
                </div>
                <div className={styles.arrowIcon}>{option.icon}</div>
              </div>
            </div>
            <div>
              {select === index && openSelect && (
                <div className={styles.options}>
                  <div className={styles.paymentInsta}>
                    <input type="checkbox" />
                    <p>{option.option1}</p>
                  </div>
                  <div className={styles.paymentInsta}>
                    <input type="checkbox" />
                    <p className={styles.lastBold}>{option.option2}</p>
                  </div>
                  <div className={styles.paymentInsta}>
                    <input type="checkbox" />
                    <p className={styles.lastBold}>{option.option3}</p>
                  </div>
                </div>
              )}
            </div>
          </>
        );
      })}
    </>
  );
}
