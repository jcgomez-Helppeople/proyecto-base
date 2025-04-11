import React from 'react';
import { TabViewProps } from 'primereact/tabview';
export interface CustomTabViewProps extends TabViewProps {
    /**
     * Etiqueta que se mostrará encima del TabView.
     */
    label?: string;
    /**
     * Mensaje de error a mostrar debajo del TabView.
     */
    error?: string;
    /**
     * Estado de carga. Si es true, se mostrará un overlay de carga sobre el TabView.
     */
    loading?: boolean;
    header?: string;
}
declare const CustomTabView: React.FC<CustomTabViewProps>;
export default CustomTabView;
