import { useNavigate } from "react-router";

import Badge from "@/components/Badge";
import Button from "@/components/Button";
import Typography from "@/components/Typography";

import Planet from "@/assets/svg/optimus-tech-planet.svg?react";

import styles from "./NotFound.module.scss";

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.notFound} aria-labelledby="not-found-title">
      <Badge label="Página não encontrada" type="brand" />

      <Typography as="span" variant="display" text="404" aria-hidden="true" />

      <Typography
        as="h1"
        variant="heading-lg"
        text="Ops! Página não encontrada"
        id="not-found-title"
      />

      <div className={styles.notFound__paragraphs}>
        <Typography
          variant="lead"
          text="A página que você está procurando nãp existe, foi movida ou está temporariamnete indisponível."
        />

        <Typography
          variant="lead"
          text="Mas não se preocupe, vamos te ajudar  econtrar o que precisa."
        />
      </div>

      <div className={styles.notFound__image}>
        <Planet aria-hidden="true" focusable="false" />
      </div>

      <Button text="Voltar para o início" onClick={() => navigate("/")} />
    </section>
  );
};
