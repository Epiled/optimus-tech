import type { IconBaseProps } from "./Icon.types";
import styles from "./Icon.module.scss";

export default function IconBase({
  children,
  size = 24,
  color,
  label,
  className,
  strokeWidth = 2,
  onClick,
}: IconBaseProps) {
  return (
    <svg
      data-color={color}
      data-action={Boolean(onClick)}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${styles.icon} ${className ?? ""}`}
      aria-hidden={label ? undefined : true}
      role={label ? "img" : undefined}
      aria-label={label}
      focusable="false"
      onClick={onClick}
    >
      {children}
    </svg>
  );
}
