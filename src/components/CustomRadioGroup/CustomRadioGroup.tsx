import React from "react";
import { Radio, RadioGroupProps } from "antd";

export interface CustomRadioGroupProps extends RadioGroupProps {}

const CustomRadioGroup: React.FC<CustomRadioGroupProps> = (props) => {
  return <Radio.Group {...props} />;
};

export default CustomRadioGroup;