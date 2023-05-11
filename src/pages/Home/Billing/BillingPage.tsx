import { ArrowLeft } from "lucide-react";
import { Header } from "../../../components/Header/Header";
import { Navbar } from "../../../components/Navbar/Navbar";
import styles from "./BillingPage.module.css";
import { MultiStepBar } from "../../../components/FormItems/MultiStepBar/MultiStepBar";
import { AdditionalInfo } from "../../../components/AdditionalInfo/AdditionalInfo";
import { Select } from "../../../components/FormItems/Select/Select";
import { Button } from "../../../components/FormItems/Button/Button";
import { BillingValueInput } from "../../../components/FormItems/BillingValueInput/BillingValueInput";
import { ButtonDragging } from "../../../components/FormItems/ButtonDragging/ButtonDragging";

export function BillingPage() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.navbarComponent}>
          <Navbar />
        </div>
        <main className={styles.mainContainer}>
          <div className={styles.mainWrapper}>
            <div className={styles.arrowBack}>
              <a href="" className={styles.arrowBackLink}>
                <ArrowLeft className={styles.arrowLeft} />
                Voltar
              </a>
            </div>
            <h2 className={styles.billingTitle}>Cobrança</h2>
            <div className={styles.billingBox}>
              <form>
                <div>
                  <div className={styles.billingStep}>
                    <MultiStepBar />
                  </div>
                </div>
                <div className={styles.formFielsContainer}>
                  <div className={styles.formFiels}>
                    <h2 className={styles.whatToCharge}>O que cobrar?</h2>
                    <label className={styles.priceAmount} htmlFor="">
                      Valor da cobrança
                    </label>

                    <BillingValueInput />

                    <div className={styles.textArea}>
                      <label htmlFor="">
                        Descrição da cobrança<span>(Opcional)</span>
                      </label>
                      <textarea placeholder="A descrição informada será impressa na fatura"></textarea>
                    </div>
                  </div>
                  <AdditionalInfo />
                </div>
                <div className={styles.test}>
                  <div className={styles.paymentMethodBilling}>
                    <h2>Qual será a forma de pagamento?</h2>
                    <ButtonDragging
                      title1="À vista ou parcelado"
                      title2="Assinatura"
                    />
                    <p>
                      O valor será cobrado apenas uma vez, podendo ser parcelado
                      conforme definido abaixo.
                    </p>
                  </div>
                  <div className={styles.billingInformationInputs}>
                    <div className={styles.inputBox}>
                      <label htmlFor="">Parcelamento</label>
                      <select name="fruits">
                        <option value="a vista">À vista (R$ 150,00)</option>
                        <option value="2x">Parcelado (2x de R$75,00)</option>
                        <option value="3x">Parcelado (3x de R$50,00)</option>
                        <option value="4x">Parcelado (4x de R$37,50)</option>
                      </select>
                    </div>
                    <div className={styles.inputBox}>
                      <label htmlFor="">Vencimento da cobrança</label>
                      <input type="date" id="birthdate" name="birthdate" />
                    </div>
                  </div>
                  <div className={styles.paymentMethod}>
                    <div>
                      <h2>Como seu cliente poderá pagar?</h2>
                    </div>
                    <div>
                      <Select />
                    </div>
                  </div>
                </div>
                <div className={styles.buttonContainer}>
                  <Button title="Avançar" />
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
