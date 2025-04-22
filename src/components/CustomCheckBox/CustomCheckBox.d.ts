import React from "react";
import { CheckboxProps as AntCheckboxProps } from "antd";
export interface CustomCheckboxProps extends AntCheckboxProps {
    /**
     * Etiqueta para mostrar junto al checkbox
     */
    label?: string;
}
declare const CustomCheckbox: React.FC<CustomCheckboxProps>;
export default CustomCheckbox;
