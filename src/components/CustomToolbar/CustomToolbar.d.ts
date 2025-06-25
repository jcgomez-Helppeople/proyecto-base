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
    /**
     * Estado de carga para el botón de acción new
     */
    newButtonLoading?: boolean;
    /**
     * Estado disabled para el botón de acción new
     */
    newButtonDisabled?: boolean;
    /**
     * tipo de página donde se usa el toolbar
     */
    pageType?: "list" | "form" | "detail";
}
declare const CustomToolbar: React.FC<CustomToolbarProps>;
export default CustomToolbar;
