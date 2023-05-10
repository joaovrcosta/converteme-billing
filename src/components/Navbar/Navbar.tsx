// import { useState } from "react";
import styles from "./Navbar.module.css";
import {
  LayoutDashboard,
  ShoppingCart,
  ShoppingBag,
  MenuIcon,
  PencilIcon,
  DollarSignIcon,
  Smartphone,
  Users2Icon,
  Settings,
  User2,
  HelpCircleIcon,
} from "lucide-react";

export function Navbar() {
  // const [isOpen, setIsOpen] = useState(true);
  // const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <aside className={styles.sidebarNavigation}>
        <nav>
          <div className={styles.toggleMenuIcon}>
            <MenuIcon className={styles.iconItem} />
          </div>
          <a href="" className={styles.navLink}>
            <LayoutDashboard className={styles.iconItem} />
            Dashboard
          </a>
          <a href="" className={styles.navLink}>
            <ShoppingCart className={styles.iconItem} />
            Minhas Vendas
          </a>
          <a href="" className={styles.navLink}>
            <ShoppingBag className={styles.iconItem} />
            Meus Produtos
          </a>
          <a href="" className={styles.navLink}>
            <PencilIcon className={styles.iconItem} />
            Assinaturas
          </a>
          <a href="" className={styles.navLink}>
            <DollarSignIcon className={styles.iconItem} />
            Cobrança
          </a>
          <a href="" className={styles.navLink}>
            <Smartphone className={styles.iconItem} />
            Banco Virtual
          </a>
          <a href="" className={styles.navLink}>
            <Users2Icon className={styles.iconItem} />
            Clientes
          </a>
          <a href="" className={styles.navLink}>
            <Settings className={styles.iconItem} />
            Configurações
          </a>
          <a href="" className={styles.navLink}>
            <User2 className={styles.iconItem} />
            Minha conta
          </a>
          <a href="" className={styles.navLink}>
            <HelpCircleIcon className={styles.iconItem} />
            Ajuda
          </a>
        </nav>
      </aside>
    </>
  );
}
