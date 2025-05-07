import React from "react";
import { CardProps as AntCardProps } from "antd";
export interface CustomCardProps extends AntCardProps {
}
declare const CustomCard: React.FC<CustomCardProps>;
export default CustomCard;
