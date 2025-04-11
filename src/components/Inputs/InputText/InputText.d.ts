import { InputTextProps } from 'primereact/inputtext';
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
declare const CustomInputText: import("react").ForwardRefExoticComponent<CustomInputTextProps & import("react").RefAttributes<HTMLInputElement>>;
export default CustomInputText;
