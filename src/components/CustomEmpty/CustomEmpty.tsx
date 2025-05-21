import React from "react";
import { Empty as AntEmpty, EmptyProps as AntEmptyProps } from "antd";

export interface CustomEmptyProps extends AntEmptyProps {
  // Puedes agregar propiedades personalizadas aquí si es necesario
}

const CustomEmpty: React.FC<CustomEmptyProps> = (props) => {
  return <AntEmpty {...props} />;
};

export default CustomEmpty;