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
  label?: string;
}

const CustomPassword: React.FC<CustomPasswordProps> = ({ loading, error, label, ...rest }) => {
  return (
    <div className="w-full custom-password">
      {
        label && (
          <label className="block text-gray-700 font-semibold mb-1 text-base">
            {label}
          </label>
        )
      }
      <Password
        {...rest}
        disabled={rest.disabled || loading}
        className='w-full  shadow-md'
        inputClassName="w-full"
      />
      {error && <small className="p-error">{error}</small>}
    </div>
  );
};

export default CustomPassword;
