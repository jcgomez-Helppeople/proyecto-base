import React from "react";
import { InputNumberProps as AntInputNumberProps } from "antd";
export interface CustomNumericInputProps extends AntInputNumberProps {
}
declare const CustomNumericInput: React.FC<CustomNumericInputProps>;
export default CustomNumericInput;
