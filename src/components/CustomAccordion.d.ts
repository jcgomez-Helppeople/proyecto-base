import React from 'react';
import { AccordionProps } from 'primereact/accordion';
export interface CustomAccordionProps extends AccordionProps {
    /**
     * Etiqueta que se mostrará encima del Accordion.
     */
    label?: string;
    /**
     * Mensaje de error a mostrar debajo del Accordion.
     */
    error?: string;
    /**
     * Estado de carga. Si es true, se mostrará un spinner sobre el Accordion.
     */
    loading?: boolean;
}
declare const CustomAccordion: React.FC<CustomAccordionProps>;
export default CustomAccordion;
