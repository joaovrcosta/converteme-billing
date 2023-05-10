import styles from "./Header.module.css";
import { Bell, HelpCircleIcon } from "lucide-react";
import logoConverte from "../../assets/logo_laranja_branco_converte_me.png";

export function Header() {
  return (
    <>
      <header className={styles.container}>
        <div className={styles.logoConvertContainer}>
          <img src={logoConverte} alt="" />
        </div>
        <div className={styles.helperContainer}>
          <div className={styles.containerIcons}>
            <Bell />
            <HelpCircleIcon className={styles.helpIcon} />
          </div>
          <div className={styles.imageCircle}>
            <img
              src="https://avatars.githubusercontent.com/u/70654718?v=4"
              alt=""
            />
          </div>
        </div>
      </header>
    </>
  );
}
