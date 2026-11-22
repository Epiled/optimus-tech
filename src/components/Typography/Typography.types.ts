import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

export type TypographyVariant =
  | "display"
  | "heading-xl"
  | "heading-lg"
  | "lead"
  | "title"
  | "body"
  | "body-sm"
  | "link"
  | "caption"
  | "metadata";

export type TypographyProps<T extends ElementType = "p"> = {
  as?: T;
  variant?: TypographyVariant;
  text: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "variant" | "className">;
