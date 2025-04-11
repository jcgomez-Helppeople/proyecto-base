import React from "react";
export interface CustomToolbarProps {
    /**
     * Muestra el input de búsqueda si es true.
     */
    showSearch?: boolean;
    /**
     * Valor actual del input de búsqueda.
     */
    searchValue?: string;
    /**
     * Función que se ejecuta al cambiar el valor del input de búsqueda.
     */
    onSearchChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    /**
     * Función a ejecutar cuando se presiona el botón "Crear".
     */
    onCreate?: () => void;
    /**
     * Función a ejecutar cuando se presiona el botón "Filtrar".
     */
    onFilter?: () => void;
    /**
     * Función a ejecutar cuando se presiona el botón "Volver".
     */
    onBack?: () => void;
    /**
     * Permite personalizar el contenido del lado izquierdo (start).
     * Si se proporciona, se ignoran las opciones por defecto.
     */
    startTemplate?: React.ReactNode;
    /**
     * Permite personalizar el contenido del lado derecho (end).
     * Si se proporciona, se ignoran las opciones por defecto.
     */
    endTemplate?: React.ReactNode;
    /**
     * Función a ejecutar cuando se presiona el botón "Exportar".
     */
    onExport?: () => void;
}
declare const CustomToolbar: React.FC<CustomToolbarProps>;
export default CustomToolbar;
