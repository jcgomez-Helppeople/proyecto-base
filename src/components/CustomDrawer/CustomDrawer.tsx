import React from "react";
import { Drawer as AntDrawer, DrawerProps as AntDrawerProps } from "antd";

export interface CustomDrawerProps extends AntDrawerProps {
  /**
   * Título del Drawer
   */
  title?: string;

  /**
   * Contenido del Drawer
   */
  children: React.ReactNode;
}

const CustomDrawer: React.FC<CustomDrawerProps> = ({ title, children, ...rest }) => {
  return (
    <AntDrawer title={title} {...rest}>
      {children}
    </AntDrawer>
  );
};

export default CustomDrawer;