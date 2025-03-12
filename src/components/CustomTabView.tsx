// src/components/CustomTabView.tsx
import React from 'react';
import { TabView, TabViewProps } from 'primereact/tabview';
import { ProgressSpinner } from 'primereact/progressspinner';

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
}

const CustomTabView: React.FC<CustomTabViewProps> = ({
  label,
  error,
  loading,
  children,
  ...rest
}) => {
  return (
    <div className="custom-tabview" style={{ position: 'relative' }}>
      {label && <label className="custom-tabview-label">{label}</label>}
      <TabView {...rest}>
        {children}
      </TabView>
      {error && <small className="p-error">{error}</small>}
      {loading && (
        <div
          className="custom-tabview-loading"
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

export default CustomTabView;
