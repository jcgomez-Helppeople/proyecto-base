import { forwardRef } from "react";
import { Button as AntButton, ButtonProps as AntButtonProps } from "antd";
import { ReactNode } from "react";

export interface CustomButtonProps extends Omit<AntButtonProps, "size"> {
  /**
   * Tamaño del botón
   */
  size?: "small" | "medium" | "large";

  /**
   * Texto alternativo para accesibilidad
   */
  ariaLabel?: string;

  /**
   * Ícono a mostrar en el botón
   */
  icon?: ReactNode;

  /**
   * Indica si el botón está en estado de carga
   */
  loading?: boolean;

  /**
   * Posición del ícono de carga (izquierda o derecha)
   */
  loadingPosition?: "left" | "right";
}

const CustomButton = forwardRef<HTMLButtonElement, CustomButtonProps>(
  (
    { size = "medium", ariaLabel, icon, loading, loadingPosition = "left", children, ...rest },
    ref
  ) => {
    // Mapear tamaños personalizados a los tamaños de Ant Design
    const antSize = size === "medium" ? "middle" : size;

    return (
      <AntButton
        {...rest}
        ref={ref}
        size={antSize}
        aria-label={ariaLabel}
        icon={loading && loadingPosition === "left" ? undefined : icon}
        style={{ fontSize: "12px" }}
      >
        {loading && loadingPosition === "right" ? (
          <>
            {children}
            <span style={{ marginLeft: "0.5rem" }} className="anticon anticon-loading">
              <svg
                viewBox="0 0 1024 1024"
                focusable="false"
                data-icon="loading"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M988 548H872c-4.4 0-8-3.6-8-8 0-229.8-186.2-416-416-416S32 310.2 32 540c0 229.8 186.2 416 416 416 4.4 0 8 3.6 8 8v116c0 4.4-3.6 8-8 8C229.2 1088 0 858.8 0 540S229.2-8 540-8s540 229.2 540 540c0 4.4-3.6 8-8 8z"></path>
              </svg>
            </span>
          </>
        ) : (
          children
        )}
      </AntButton>
    );
  }
);

CustomButton.displayName = "CustomButton";

export default CustomButton;