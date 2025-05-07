import React from "react";
import { Card as AntCard, CardProps as AntCardProps } from "antd";

export interface CustomCardProps extends AntCardProps {
  // Puedes agregar propiedades personalizadas aquí si es necesario
}

const CustomCard: React.FC<CustomCardProps> = (props) => {
  return <AntCard {...props} />;
};

export default CustomCard;