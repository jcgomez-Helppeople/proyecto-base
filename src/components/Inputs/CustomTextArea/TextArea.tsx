import React from "react";
import { Input as AntInput } from "antd";

export interface CustomTextAreaProps extends React.ComponentProps<typeof AntInput.TextArea> {}

const CustomTextArea: React.FC<CustomTextAreaProps> = (props) => {
  return <AntInput.TextArea {...props} />;
};

export default CustomTextArea;