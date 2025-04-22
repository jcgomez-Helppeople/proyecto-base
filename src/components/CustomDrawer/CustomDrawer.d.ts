import React from "react";
import { DrawerProps as AntDrawerProps } from "antd";
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
declare const CustomDrawer: React.FC<CustomDrawerProps>;
export default CustomDrawer;
