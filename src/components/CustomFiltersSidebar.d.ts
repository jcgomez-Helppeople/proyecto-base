import React from "react";
export interface CustomFiltersSidebarProps {
    /** Controla la visibilidad del Sidebar */
    visible: boolean;
    /** Función para ocultar el Sidebar */
    onHide: () => void;
    /** Título o header del Sidebar */
    header?: React.ReactNode;
    /** Contenido dinámico para los filtros */
    children?: React.ReactNode;
    /** Función para aplicar los filtros */
    onApplyFilters?: () => void;
    /** Función para limpiar los filtros */
    onClearFilters?: () => void;
}
declare const CustomFiltersSidebar: React.FC<CustomFiltersSidebarProps>;
export default CustomFiltersSidebar;
