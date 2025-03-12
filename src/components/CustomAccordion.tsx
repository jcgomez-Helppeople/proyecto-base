// src/components/CustomAccordion.tsx
import React from 'react';
import { Accordion, AccordionProps } from 'primereact/accordion';
import { ProgressSpinner } from 'primereact/progressspinner';

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

const CustomAccordion: React.FC<CustomAccordionProps> = ({
  label,
  error,
  loading,
  children,
  ...rest
}) => {
  return (
    <div className="custom-accordion" style={{ position: 'relative' }}>
      {label && <label className="custom-accordion-label">{label}</label>}
      <Accordion {...rest}>
        {children}
      </Accordion>
      {error && <small className="p-error">{error}</small>}
      {loading && (
        <div
          className="custom-accordion-loading"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(255,255,255,0.7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1
          }}
        >
          <ProgressSpinner style={{ width: '50px', height: '50px' }} strokeWidth="4" />
        </div>
      )}
    </div>
  );
};

export default CustomAccordion;
