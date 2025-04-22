import React from "react";
import { RadioProps as AntRadioProps, RadioGroupProps } from "antd";
export interface CustomRadioProps extends AntRadioProps {
    /**
     * Etiqueta para mostrar junto al radio
     */
    label?: string;
}
declare const CustomRadio: React.FC<CustomRadioProps>;
export interface CustomRadioGroupProps extends RadioGroupProps {
}
export declare const CustomRadioGroup: React.FC<CustomRadioGroupProps>;
export default CustomRadio;
