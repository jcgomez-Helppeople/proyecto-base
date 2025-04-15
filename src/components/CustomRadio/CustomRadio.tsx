import React from "react";
import { Radio as AntRadio, RadioProps as AntRadioProps, RadioGroupProps } from "antd";

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

export interface CustomRadioGroupProps extends RadioGroupProps {}

export const CustomRadioGroup: React.FC<CustomRadioGroupProps> = (props) => {
  return <AntRadio.Group {...props} />;
};

export default CustomRadio;