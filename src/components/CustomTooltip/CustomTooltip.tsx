import React from "react";
import { Tooltip as AntTooltip, TooltipProps as AntTooltipProps } from "antd";

export type CustomTooltipProps = AntTooltipProps & {
  /**
   * Contenido del tooltip
   */
  content: React.ReactNode;
};

const CustomTooltip: React.FC<CustomTooltipProps> = ({ content, children, ...rest }) => {
  return (
    <AntTooltip title={content} {...rest}>
      {children}
    </AntTooltip>
  );
};

export default CustomTooltip;