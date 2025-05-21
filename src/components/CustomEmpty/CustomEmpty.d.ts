import React from "react";
import { EmptyProps as AntEmptyProps } from "antd";
export interface CustomEmptyProps extends AntEmptyProps {
}
declare const CustomEmpty: React.FC<CustomEmptyProps>;
export default CustomEmpty;
