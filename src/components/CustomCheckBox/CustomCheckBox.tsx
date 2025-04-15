import React from "react";
import { Checkbox as AntCheckbox, CheckboxProps as AntCheckboxProps } from "antd";

export interface CustomCheckboxProps extends AntCheckboxProps {
  /**
   * Etiqueta para mostrar junto al checkbox
   */
  label?: string;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({ label, ...rest }) => {
  return (
    <AntCheckbox {...rest}>
      {label}
    </AntCheckbox>
  );
};

export default CustomCheckbox;