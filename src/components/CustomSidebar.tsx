// src/components/CustomSidebar.tsx
import React from 'react';
import { Sidebar, SidebarProps } from 'primereact/sidebar';
import { ProgressSpinner } from 'primereact/progressspinner';

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

const CustomSidebar: React.FC<CustomSidebarProps> = ({
  label,
  error,
  loading,
  children,
  ...rest
}) => {
  return (
    <div className="custom-sidebar" style={{ position: 'relative' }}>
      {label && <label className="custom-sidebar-label">{label}</label>}
      <Sidebar {...rest}>
        {children}
      </Sidebar>
      {error && <small className="p-error">{error}</small>}
      {loading && (
        <div
          className="custom-sidebar-loading"
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
            zIndex: 1000
          }}
        >
          <ProgressSpinner style={{ width: '50px', height: '50px' }} strokeWidth="4" />
        </div>
      )}
    </div>
  );
};

export default CustomSidebar;
