import React from "react";
import { Divider as AntDivider, DividerProps as AntDividerProps } from "antd";

export interface CustomDividerProps extends Omit<AntDividerProps, "orientation"> {
  /**
   * Texto opcional para mostrar en el divisor
   */
  text?: string;

  /**
   * Posición del texto en el divisor (solo para divisores horizontales)
   */
  textPosition?: "left" | "center" | "right";

  /**
   * Orientación del divisor
   */
  type?: "horizontal" | "vertical";
}

const CustomDivider: React.FC<CustomDividerProps> = ({
  text,
  textPosition = "center",
  type = "horizontal",
  ...rest
}) => {
  return (
    <AntDivider
      {...rest}
      orientation={type === "horizontal" ? textPosition : undefined}
      type={type}
    >
      {text}
    </AntDivider>
  );
};

export default CustomDivider;