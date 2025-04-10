import { forwardRef } from 'react';
import { InputText as PrimeInputText, InputTextProps } from 'primereact/inputtext';
import { classNames } from 'primereact/utils';
import './InputText.styles.css';

export interface CustomInputTextProps extends Omit<InputTextProps, 'size'> {
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
}

const CustomInputText = forwardRef<PrimeInputText, CustomInputTextProps>(({
  size = 'medium',
  error,
  errorMessage,
  helperText,
  fullWidth,
  className,
  ...rest
}, ref) => {
  const inputClassName = classNames(
    'custom-input',
    `custom-input--${size}`,
    { 
      'custom-input--error': error,
      'custom-input--full-width': fullWidth
    },
    className
  );

  return (
    <div className="custom-input-wrapper">
      <PrimeInputText
        {...rest}
        ref={ref}
        className={inputClassName}
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

CustomInputText.displayName = 'CustomInputText';

export default CustomInputText;