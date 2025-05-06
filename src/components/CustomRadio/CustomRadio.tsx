import React from "react";
import { Radio as AntRadio, RadioProps as AntRadioProps } from "antd";

export interface CustomRadioProps extends AntRadioProps {
  /**
   * Etiqueta para mostrar junto al radio
   */
  label?: string;
}

const CustomRadio: React.FC<CustomRadioProps> = ({ label, ...rest }) => {
  return (
    <AntRadio {...rest}>
      {label}
    </AntRadio>
  );
};

export default CustomRadio;