import { forwardRef } from 'react';
import { InputNumber as PrimeInputNumber, InputNumberValueChangeEvent } from 'primereact/inputnumber';
import { classNames } from 'primereact/utils';
import './InputNumber.styles.css';

export interface CustomInputNumberProps {
  /**
   * Valor del input
   */
  value?: number | null;
  
  /**
   * Función a ejecutar cuando cambia el valor
   */
  onChange?: (value: number | null) => void;
  
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
   * Valor mínimo permitido
   */
  min?: number;
  
  /**
   * Valor máximo permitido
   */
  max?: number;
  
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
  
  /**
   * Modo de visualización
   */
  mode?: 'decimal' | 'currency';
  
  /**
   * Número de decimales
   */
  decimals?: number;

    /**
   * Código de moneda (requerido cuando mode es 'currency')
   */
    currency?: string;
}

const CustomInputNumber = forwardRef<PrimeInputNumber, CustomInputNumberProps>(({
  value,
  onChange,
  size = 'medium',
  error,
  errorMessage,
  helperText,
  fullWidth,
  min,
  max,
  placeholder = 'Ingrese un valor',
  disabled = false,
  label,
  mode = 'decimal',
  decimals = 2,
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

  const handleValueChange = (e: InputNumberValueChangeEvent) => {
    if (onChange) {
      // Convertimos undefined a null para mantener consistencia
      onChange(e.value === undefined ? null : e.value);
    }
  };

  return (
    <div className="custom-input-wrapper">
      <PrimeInputNumber
        ref={ref}
        value={value}
        onValueChange={handleValueChange}
        className={inputClassName}
        min={min}
        max={max}
        placeholder={placeholder}
        disabled={disabled}
        mode={mode}
        minFractionDigits={decimals}
        maxFractionDigits={decimals}
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

CustomInputNumber.displayName = 'CustomInputNumber';

export default CustomInputNumber;