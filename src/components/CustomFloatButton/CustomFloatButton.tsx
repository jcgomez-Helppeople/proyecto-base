import React from "react";
import { FloatButton as AntFloatButton, FloatButtonProps, FloatButtonGroupProps } from "antd";

export interface CustomFloatButtonProps extends FloatButtonProps {
  /**
   * Texto para el tooltip del botón
   */
  tooltip?: React.ReactNode;
}

export interface CustomFloatButtonGroupProps extends FloatButtonGroupProps {}

const CustomFloatButton: React.FC<CustomFloatButtonProps> & {
  Group: React.FC<CustomFloatButtonGroupProps>;
  BackTop: typeof AntFloatButton.BackTop;
} = ({ className, tooltip, ...props }) => {
  return (
    <AntFloatButton
      className={`custom-float-button ${className || ""}`}
      tooltip={tooltip}
      {...props}
    />
  );
};

// Exportar los subcomponentes
CustomFloatButton.Group = (props: CustomFloatButtonGroupProps) => {
  return <AntFloatButton.Group {...props} className={`custom-float-button-group ${props.className || ""}`} />;
};

CustomFloatButton.BackTop = AntFloatButton.BackTop;

export default CustomFloatButton;