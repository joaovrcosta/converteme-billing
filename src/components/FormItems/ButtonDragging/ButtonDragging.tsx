import { useState } from "react";
import styles from "./ButtonDragging.module.css";

interface ButtonDraggingProps {
  title1: string;
  title2: string;
}

export function ButtonDragging({ title1, title2 }: ButtonDraggingProps) {
  const [parceladoClicado, setParceladoClicado] = useState(false);
  const [assinaturaClicado, setAssinaturaClicado] = useState(false);

  const handleClickParcelado = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setParceladoClicado(true);
    setAssinaturaClicado(false);
  };

  const handleClickAssinatura = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setAssinaturaClicado(true);
    setParceladoClicado(false);
  };

  const classeParcelado = parceladoClicado ? `${styles.ativo} ativoAzul` : "";
  const classeAssinatura = assinaturaClicado ? `${styles.ativo} ativoAzul` : "";

  return (
    <>
      <div className={styles.draggingButtonBox}>
        <button
          onClick={handleClickParcelado}
          className={`${styles.botao} ${classeParcelado}`}
          disabled={parceladoClicado}
        >
          {title1}
        </button>
        <button
          onClick={handleClickAssinatura}
          className={`${styles.botao} ${classeAssinatura}`}
          disabled={assinaturaClicado}
        >
          {title2}
        </button>
      </div>
    </>
  );
}
