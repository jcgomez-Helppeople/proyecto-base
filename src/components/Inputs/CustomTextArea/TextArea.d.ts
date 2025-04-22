import React from "react";
import { Input as AntInput } from "antd";
export interface CustomTextAreaProps extends React.ComponentProps<typeof AntInput.TextArea> {
}
declare const CustomTextArea: React.FC<CustomTextAreaProps>;
export default CustomTextArea;
