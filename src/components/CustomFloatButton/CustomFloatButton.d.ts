import React from "react";
import { FloatButton as AntFloatButton, FloatButtonProps, FloatButtonGroupProps } from "antd";
export interface CustomFloatButtonProps extends FloatButtonProps {
    /**
     * Texto para el tooltip del botón
     */
    tooltip?: React.ReactNode;
}
export interface CustomFloatButtonGroupProps extends FloatButtonGroupProps {
}
declare const CustomFloatButton: React.FC<CustomFloatButtonProps> & {
    Group: React.FC<CustomFloatButtonGroupProps>;
    BackTop: typeof AntFloatButton.BackTop;
};
export default CustomFloatButton;
