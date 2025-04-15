import React from "react";
import { Spin as AntSpin, SpinProps as AntSpinProps } from "antd";

export interface CustomSpinProps extends AntSpinProps {
  /**
   * Texto opcional para mostrar debajo del spinner
   */
  tip?: string;
}

const CustomSpin: React.FC<CustomSpinProps> = ({ tip, ...rest }) => {
  return <AntSpin tip={tip} {...rest} />;
};

export default CustomSpin;