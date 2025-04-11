import { InputNumber as PrimeInputNumber } from 'primereact/inputnumber';
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
declare const CustomInputNumber: import("react").ForwardRefExoticComponent<CustomInputNumberProps & import("react").RefAttributes<PrimeInputNumber>>;
export default CustomInputNumber;
