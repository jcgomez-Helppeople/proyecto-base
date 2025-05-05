import React from "react";
import { Col, ColProps } from "antd";

export interface CustomColProps extends ColProps {
  // Puedes agregar propiedades personalizadas aquí si es necesario
}

export const CustomCol: React.FC<CustomColProps> = (props) => {
  return <Col {...props}>{props.children}</Col>;
};

export default CustomCol;