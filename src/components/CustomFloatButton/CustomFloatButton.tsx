import React from "react";
import { FloatButton as AntFloatButton, FloatButtonProps as AntFloatButtonProps } from "antd";
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

const CustomFloatButton: React.FC<CustomFloatButtonProps> = ({
  icon,
  ariaLabel,
  loading,
  ...rest
}) => {
  return (
    <AntFloatButton
      {...rest}
      icon={loading ? <span className="anticon anticon-loading"></span> : icon}
      aria-label={ariaLabel}
    />
  );
};

export default CustomFloatButton;