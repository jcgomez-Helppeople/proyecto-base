import React from "react";
import { Radio as AntRadio, RadioProps as AntRadioProps, RadioGroupProps } from "antd";

export interface CustomRadioProps extends AntRadioProps {
  /**
   * Etiqueta para mostrar junto al radio
   */
  label?: string;
}

const CustomRadio: React.FC<CustomRadioProps>
& { Group: React.FC<RadioGroupProps> } = ({ label, ...rest }) => {
  return (
    <AntRadio {...rest}>
      {label}
    </AntRadio>
  );
};

CustomRadio.Group = (props: RadioGroupProps) => {
  return <AntRadio.Group {...props} />;
};

export default CustomRadio;