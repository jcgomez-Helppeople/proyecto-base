import React from "react";
import { InputProps as AntInputProps, InputRef } from "antd";
export interface CustomInputProps extends AntInputProps {
    label?: string;
    placeholder?: string;
    type?: string;
    required?: boolean;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
declare const CustomInput: React.ForwardRefExoticComponent<CustomInputProps & React.RefAttributes<InputRef>>;
export default CustomInput;
