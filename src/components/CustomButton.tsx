import React from 'react';
import { Button, ButtonProps } from 'primereact/button';

export interface CustomButtonProps extends ButtonProps {
  /**
   * Estado de carga. Si es true, el botón se deshabilitará y mostrará el indicador de carga.
   */
  loading?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({ loading, ...rest }) => {
  return (
    <Button
      {...rest}
      loading={loading}
      disabled={rest.disabled || loading}
    />
  );
};

export default CustomButton;