import React from "react";
import { Row, RowProps } from "antd";

export interface CustomRowProps extends RowProps {
  // Puedes agregar propiedades personalizadas aquí si es necesario
}
export const CustomRow: React.FC<CustomRowProps> = (props) => {
  return <Row {...props}>{props.children}</Row>;
};

export default CustomRow;