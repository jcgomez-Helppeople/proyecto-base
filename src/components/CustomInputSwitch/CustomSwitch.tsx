import React from "react";
import { Switch as AntSwitch, SwitchProps as AntSwitchProps } from "antd";

export interface CustomSwitchProps extends AntSwitchProps {
  /**
   * Etiqueta para mostrar junto al switch
   */
  label?: string;
}

const CustomSwitch: React.FC<CustomSwitchProps> = ({ label, ...rest }) => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
      <AntSwitch {...rest} />
      {label && <span>{label}</span>}
    </div>
  );
};

export default CustomSwitch;