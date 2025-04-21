import React from "react";
import { Space } from "antd";
import CustomButton from "../CustomButton/CustomButton";

export interface CustomToolbarProps {
  /**
   * Título de la pantalla
   */
  title: string;

  /**
   * Callback para el botón de "Volver"
   */
  onBack?: () => void;

  /**
   * Callback para el botón de acción (Nuevo/Actualizar/etc.)
   */
  onNew?: () => void;

  /**
   * Texto personalizado para el botón de acción
   */
  newButtonText?: string;

  /**
   * Texto personalizado para el botón de "Volver"
   */
  backButtonText?: string;
}

const CustomToolbar: React.FC<CustomToolbarProps> = ({
  title,
  onBack,
  onNew,
  newButtonText = "Nueva",
  backButtonText = "Volver",
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap", // Permitir que los elementos se ajusten en pantallas pequeñas
        justifyContent: "space-between",
        alignItems: "center",
        gap: "1rem", // Espaciado entre elementos
        padding: "1rem 1.5rem",
        backgroundColor: "#ffffff", // Fondo blanco
        borderBottom: "1px solid #e0e0e0", // Borde inferior sutil
        marginBottom: "1rem",
      }}
    >
      {/* Título */}
      <h2
        style={{
          margin: 0,
          fontFamily: "'Open Sans', sans-serif", // Fuente Open Sans
          fontWeight: 600, // Seminegrita
          fontSize: "14px", // Tamaño de 14px
          color: "#333333", // Color oscuro
          flex: "1 1 auto", // Permitir que el título ocupe espacio disponible
        }}
      >
        {title}
      </h2>

      {/* Botones */}
      <Space wrap>
        {onBack && (
          <CustomButton
            type="default"
            onClick={onBack}
            icon={<i className="fas fa-arrow-left" />}
            style={{ fontSize: "12px" }}
            text={backButtonText} // Usa la propiedad 'text'
          />
        )}
        {onNew && (
          <CustomButton
            type="primary"
            onClick={onNew}
            icon={<i className="fas fa-plus" />}
            style={{ fontSize: "12px" }}
            text={newButtonText} // Usa la propiedad 'text'
          />
        )}
      </Space>
    </div>
  );
};

export default CustomToolbar;