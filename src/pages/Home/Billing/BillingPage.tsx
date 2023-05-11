import { Header } from "../../../components/Header/Header";
import { Navbar } from "../../../components/Navbar/Navbar";
import { Form } from "../../../components/Form/Form";
import { ArrowBack } from "../../../components/ArrowBack/ArrowBack";
import styles from "./BillingPage.module.css";

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
            <ArrowBack />
            <Form />
          </div>
        </main>
      </div>
    </div>
  );
}
