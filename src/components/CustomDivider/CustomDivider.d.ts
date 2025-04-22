import React from "react";
import { DividerProps as AntDividerProps } from "antd";
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
declare const CustomDivider: React.FC<CustomDividerProps>;
export default CustomDivider;
