import { Button, ButtonProps } from "primereact/button";
import "./CustomButton.styles.css";
export interface CustomButtonProps extends Omit<ButtonProps, "size"> {
    /**
     * Estado de carga del botón
     */
    loading?: boolean;
    /**
     * Variante del botón
     */
    variant?: "primary" | "secondary" | "tertiary" | "danger" | "success";
    /**
     * Tamaño del botón
     */
    size?: "small" | "medium" | "large";
    /**
     * Indica si el botón ocupa todo el ancho disponible
     */
    fullWidth?: boolean;
    /**
     * Texto alternativo para accesibilidad
     */
    ariaLabel?: string;
    /**
     * Si el botón debe mostrar solo el contorno
     */
    outlined?: boolean;
}
declare const CustomButton: import("react").ForwardRefExoticComponent<CustomButtonProps & import("react").RefAttributes<Button>>;
export default CustomButton;
