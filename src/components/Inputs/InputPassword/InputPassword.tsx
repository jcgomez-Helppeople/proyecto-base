import { forwardRef } from 'react';
import { Password as PrimeInputPassword } from 'primereact/password';
import { classNames } from 'primereact/utils';
import './InputPassword.styles.css';

export interface CustomInputPasswordProps {
  /**
   * Valor del input
   */
  value?: string | null;

  /**
   * Función a ejecutar cuando cambia el valor
   */
  onChange?: (value: string | null) => void;

  /**
   * Tamaño del input
   */
  size?: 'small' | 'medium' | 'large';

  /**
   * Estado de error
   */
  error?: boolean;

  /**
   * Mensaje de error
   */
  errorMessage?: string;

  /**
   * Texto de ayuda
   */
  helperText?: string;

  /**
   * Si el input ocupa todo el ancho disponible
   */
  fullWidth?: boolean;

  /**
   * Texto placeholder
   */
  placeholder?: string;

  /**
   * Si el input está deshabilitado
   */
  disabled?: boolean;

  /**
   * Label del input
   */
  label?: string;
}

const CustomInputPassword = forwardRef<InstanceType<typeof PrimeInputPassword>, CustomInputPasswordProps>(({
  value,
  onChange,
  size = 'medium',
  error,
  errorMessage,
  helperText,
  fullWidth,
  placeholder = 'Ingrese su contraseña',
  disabled = false,
  label,
  ...rest
}, ref) => {
  const inputClassName = classNames(
    'custom-input',
    `custom-input--${size}`,
    { 
      'custom-input--error': error,
      'custom-input--full-width': fullWidth
    }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      // Convertir cadena vacía a null para consistencia, si lo deseas
      onChange(e.target.value === '' ? null : e.target.value);
    }
  };

  return (
    <div className="custom-input-wrapper">
      <PrimeInputPassword
        ref={ref}
        value={value ?? ''}
        onChange={handleChange}
        className={inputClassName}
        placeholder={placeholder}
        disabled={disabled}
        {...rest}
      />
      {(error && errorMessage) && (
        <small className="custom-input__error-message">{errorMessage}</small>
      )}
      {(!error && helperText) && (
        <small className="custom-input__helper-text">{helperText}</small>
      )}
    </div>
  );
});

CustomInputPassword.displayName = 'CustomInputPassword';

export default CustomInputPassword;
