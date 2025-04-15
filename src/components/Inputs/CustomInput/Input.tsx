import React from "react";
import { Input as AntInput, InputProps as AntInputProps } from "antd";

export interface CustomInputProps extends AntInputProps {}

const CustomInput: React.FC<CustomInputProps> = (props) => {
  return <AntInput {...props} />;
};

export default CustomInput;