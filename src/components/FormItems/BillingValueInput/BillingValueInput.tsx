import { DollarSignIcon } from "lucide-react";
import styles from "./BillingValueInput.module.css";
import { useRef } from "react";

export function BillingValueInput() {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (inputRef.current !== null) {
      inputRef.current.focus();
    }
  };

  return (
    <>
      <div className={styles.labelBox}>
        <label htmlFor="">Valor da cobrança</label>
      </div>
      <div className={styles.inputIconWrap}>
        <div ref={inputRef}>
          <DollarSignIcon className={styles.inputIcon} />
        </div>
        <div className={styles.inputBox}>
          <input type="number" placeholder="0,00" onClick={handleClick} />
        </div>
      </div>
    </>
  );
}
