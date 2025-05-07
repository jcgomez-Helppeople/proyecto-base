import React from "react";
import { Tag as AntTag, TagProps as AntTagProps } from "antd";

export interface CustomTagProps extends AntTagProps {
  // Puedes agregar propiedades personalizadas aquí si es necesario
}

const CustomTag: React.FC<CustomTagProps> = (props) => {
  return <AntTag {...props} />;
};

export default CustomTag;