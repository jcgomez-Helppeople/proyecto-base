import { forwardRef } from "react";
import { Button, ButtonProps } from "primereact/button";
import { classNames } from "primereact/utils";
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

const CustomButton = forwardRef<Button, CustomButtonProps>(
  (
    {
      loading,
      variant = "primary",
      size = "small",
      fullWidth,
      outlined,
      className,
      ariaLabel,
      disabled,
      ...rest
    },
    ref
  ) => {
    const buttonClassName = classNames(
      "custom-button",
      `custom-button--${variant}`,
      `custom-button--${size}`,
      {
        "custom-button--full-width": fullWidth,
        "custom-button--outlined": outlined,
        [`custom-button--outlined-${variant}`]: outlined,
      },
      className
    );

    return (
      <Button
        {...rest}
        ref={ref}
        loading={loading}
        disabled={disabled || loading}
        className={buttonClassName}
        aria-label={ariaLabel || rest.label}
        aria-disabled={disabled || loading} // Mejora de accesibilidad
      />
    );
  }
);

CustomButton.displayName = "CustomButton";

export default CustomButton;
