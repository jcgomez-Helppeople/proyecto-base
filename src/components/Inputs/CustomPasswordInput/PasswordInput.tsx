import React from "react";
import { Input as AntInput, InputProps as AntInputProps } from "antd";

export interface CustomPasswordInputProps extends AntInputProps { }

const CustomPasswordInput: React.FC<CustomPasswordInputProps> = (props) => {
  return (
    <AntInput.Password
      {...props}
      style={{
        ...props.style,
        fontSize: "var(--toolbar-labels-font-size)",
      }}
    />
  );
};

export default CustomPasswordInput;
