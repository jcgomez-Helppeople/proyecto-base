import React from 'react';
import { SidebarProps } from 'primereact/sidebar';
export interface CustomSidebarProps extends SidebarProps {
    /**
     * Etiqueta que se mostrará encima del Sidebar.
     */
    label?: string;
    /**
     * Mensaje de error que se mostrará debajo del Sidebar.
     */
    error?: string;
    /**
     * Estado de carga. Si es true, se mostrará un overlay con un spinner.
     */
    loading?: boolean;
}
declare const CustomSidebar: React.FC<CustomSidebarProps>;
export default CustomSidebar;
