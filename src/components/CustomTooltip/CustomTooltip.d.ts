import React from "react";
import { TooltipProps as AntTooltipProps } from "antd";
export type CustomTooltipProps = AntTooltipProps & {
    /**
     * Contenido del tooltip
     */
    content: React.ReactNode;
};
declare const CustomTooltip: React.FC<CustomTooltipProps>;
export default CustomTooltip;
