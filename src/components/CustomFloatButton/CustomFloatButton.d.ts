import React from "react";
import { FloatButtonProps as AntFloatButtonProps } from "antd";
import { ReactNode } from "react";
export interface CustomFloatButtonProps extends AntFloatButtonProps {
    /**
     * Ícono a mostrar en el botón flotante
     */
    icon?: ReactNode;
    /**
     * Texto alternativo para accesibilidad
     */
    ariaLabel?: string;
    /**
     * Indica si el botón está en estado de carga
     */
    loading?: boolean;
}
declare const CustomFloatButton: React.FC<CustomFloatButtonProps>;
export default CustomFloatButton;
