import React from "react";
import { Space, SpaceProps } from "antd";

export interface CustomSpaceProps extends SpaceProps {
  // Puedes agregar propiedades personalizadas aquí si es necesario
}

export const CustomSpace: React.FC<CustomSpaceProps> = (props) => {
  return <Space {...props}>{props.children}</Space>;
};

export default CustomSpace;