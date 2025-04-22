import React from "react";
export interface CustomToolbarProps {
    /**
     * Título de la pantalla
     */
    title: string;
    /**
     * Callback para el botón de "Volver"
     */
    onBack?: () => void;
    /**
     * Callback para el botón de acción (Nuevo/Actualizar/etc.)
     */
    onNew?: () => void;
    /**
     * Texto personalizado para el botón de acción
     */
    newButtonText?: string;
    /**
     * Texto personalizado para el botón de "Volver"
     */
    backButtonText?: string;
}
declare const CustomToolbar: React.FC<CustomToolbarProps>;
export default CustomToolbar;
