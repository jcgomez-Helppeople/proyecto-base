import React from "react";
import { SwitchProps as AntSwitchProps } from "antd";
export interface CustomSwitchProps extends AntSwitchProps {
    /**
     * Etiqueta para mostrar junto al switch
     */
    label?: string;
}
declare const CustomSwitch: React.FC<CustomSwitchProps>;
export default CustomSwitch;
