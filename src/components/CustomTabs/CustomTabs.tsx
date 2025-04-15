import React from "react";
import { Tabs as AntTabs, TabsProps as AntTabsProps } from "antd";

export interface CustomTabsProps extends AntTabsProps {
  /**
   * Título opcional para los tabs
   */
  customTitle?: string;
}

const CustomTabs: React.FC<CustomTabsProps> = ({ customTitle, ...rest }) => {
  return (
    <div style={{ padding: "1rem" }}>
      {customTitle && <h2>{customTitle}</h2>}
      <AntTabs {...rest} />
    </div>
  );
};

export default CustomTabs;