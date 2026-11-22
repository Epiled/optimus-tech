import Imagicon from "../Imagicon";
import Typography from "../Typography";
import styles from "./Card.module.scss";

import type { CardProps } from "./Card.types";

export default function Card({
  variant = "default",
  imagicon,
  value,
  title,
  text,
}: CardProps) {
  return (
    <div className={styles.card} data-variant={variant}>
      <Imagicon {...imagicon} />

      <div className={styles.card__content}>
        {value && <span className={styles.card__value}>{value}</span>}
        <Typography {...title} />
        <Typography {...text} />
      </div>
    </div>
  );
}
