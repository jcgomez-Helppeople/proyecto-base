// src/components/CustomConfirmDialog.tsx
import React from 'react';
import { ConfirmDialog, ConfirmDialogProps } from 'primereact/confirmdialog';
import { ProgressSpinner } from 'primereact/progressspinner';

export interface CustomConfirmDialogProps extends ConfirmDialogProps {
  /**
   * Etiqueta que se mostrará encima del ConfirmDialog (opcional).
   */
  label?: string;
  /**
   * Mensaje de error a mostrar debajo del ConfirmDialog (opcional).
   */
  error?: string;
  /**
   * Estado de carga. Si es true, se muestra un overlay con un spinner.
   */
  loading?: boolean;
}

const CustomConfirmDialog: React.FC<CustomConfirmDialogProps> = ({
  label,
  error,
  loading,
  ...rest
}) => {
  return (
    <div className="custom-confirm-dialog" style={{ position: 'relative' }}>
      {label && <label className="custom-confirm-dialog-label">{label}</label>}
      <ConfirmDialog {...rest} />
      {error && <small className="p-error">{error}</small>}
      {loading && (
        <div
          className="custom-confirm-dialog-loading"
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

export default CustomConfirmDialog;
