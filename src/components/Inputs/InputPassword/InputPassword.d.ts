import { Password as PrimeInputPassword } from 'primereact/password';
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
declare const CustomInputPassword: import("react").ForwardRefExoticComponent<CustomInputPasswordProps & import("react").RefAttributes<PrimeInputPassword>>;
export default CustomInputPassword;
