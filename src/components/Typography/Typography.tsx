import type { ElementType } from "react";
import classNames from "classnames";

import styles from "./Typography.module.scss";
import type { TypographyProps } from "./Typography.types";

export default function Typography<T extends ElementType = "p">({
  as,
  variant = "body",
  text,
  className,
  ...props
}: TypographyProps<T>) {
  const Component: ElementType = as ?? "p";

  return (
    <Component
      className={classNames(styles.typography, styles[variant], className)}
      {...props}
    >
      {text}
    </Component>
  );
}
