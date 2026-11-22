import type { ImagiconProps } from "../Imagicon/Imagicon.types";
import type { TypographyProps } from "../Typography";

export interface CardProps {
  variant?: "default" | "alternative";
  imagicon: ImagiconProps;
  value?: number;
  title: TypographyProps;
  text: TypographyProps;
}
