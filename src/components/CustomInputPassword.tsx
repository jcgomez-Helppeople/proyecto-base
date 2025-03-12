// src/components/CustomPassword.tsx
import React from 'react';
import { Password, PasswordProps } from 'primereact/password';

export interface CustomPasswordProps extends PasswordProps {
  /**
   * Estado de carga. Si es true, el input se deshabilitará.
   */
  loading?: boolean;
  /**
   * Mensaje de error para mostrar debajo del input.
   */
  error?: string;
}

const CustomPassword: React.FC<CustomPasswordProps> = ({ loading, error, ...rest }) => {
  return (
    <div className="custom-password">
      <Password 
        {...rest}
        disabled={rest.disabled || loading}
      />
      {error && <small className="p-error">{error}</small>}
    </div>
  );
};

export default CustomPassword;
