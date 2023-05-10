// import { useState } from "react";
import { useState } from "react";
import styles from "./Navbar.module.css";
import { selectOptions } from "../../data/data";

import { MenuIcon } from "lucide-react";

export function Navbar() {
  const [openSelect, setOpenSelect] = useState(false);
  const [select, setSelect] = useState<number | null>(null);
  const [navCollapse, setNavCollapse] = useState(false);

  return (
    <>
      <aside
        className={
          navCollapse
            ? styles.sidebarNavigation
            : `${styles.sidebarNavigation} ${styles.hideSidebar}`
        }
      >
        <nav>
          <div className={styles.toggleMenuIcon}>
            <MenuIcon onClick={() => setNavCollapse(!navCollapse)} />
          </div>
          {selectOptions.map((option, index) => {
            return (
              <div className={styles.optionContainer}>
                <div
                  key={index}
                  onClick={() => {
                    setSelect(index);
                    setOpenSelect(!openSelect);
                  }}
                >
                  <div>
                    <div className={styles.navLink}>
                      <div className={styles.optionTitle}>
                        <div className={styles.iconItem}>{option.icon}</div>
                        <h3>{option.name}</h3>
                        <div className={styles.arrowIcon}>{option.arrow}</div>
                      </div>
                    </div>
                    <div>
                      {select === index && openSelect && (
                        <div className={styles.options}>
                          <p>{option.option1}</p>
                          <p className={styles.lastBold}>{option.option2}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
