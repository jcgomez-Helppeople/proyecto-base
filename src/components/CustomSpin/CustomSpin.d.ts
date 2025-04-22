import React from "react";
import { SpinProps as AntSpinProps } from "antd";
export interface CustomSpinProps extends AntSpinProps {
    /**
     * Texto opcional para mostrar debajo del spinner
     */
    tip?: string;
}
declare const CustomSpin: React.FC<CustomSpinProps>;
export default CustomSpin;
