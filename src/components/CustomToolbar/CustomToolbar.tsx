import React from "react";
import { Space } from "antd";
import CustomButton from "../CustomButton/CustomButton";
import { ArrowLeftOutlined, EditOutlined, PlusOutlined, SaveOutlined } from "@ant-design/icons";

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

  /**
   * Estado de carga para el botón de acción new
   */
  newButtonLoading?: boolean;

  /**
   * Estado disabled para el botón de acción new
   */
  newButtonDisabled?: boolean;

  /**
   * tipo de página donde se usa el toolbar
   */
  pageType?: "list" | "form" | "detail";
}

const CustomToolbar: React.FC<CustomToolbarProps> = ({
  title,
  onBack,
  onNew,
  newButtonText = "Nueva",
  backButtonText = "Volver",
  newButtonLoading = false,
  newButtonDisabled = false,
  pageType = "list",
}) => {

  const handleOnNewIcon = () => {
    if (pageType === "form") {
      return <SaveOutlined />;
    }
    if (pageType === "detail") {
      return <EditOutlined />;
    }
    return <PlusOutlined />;
  }

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
          fontFamily: "var(--toolbar-title-font-family)",
          fontWeight: "var(--toolbar-title-font-weight)",
          fontSize: "var(--toolbar-title-font-size)",
          color: "var(--toolbar-title-color)",
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
            icon={<ArrowLeftOutlined />}
            style={{ fontSize: "var(--toolbar-labels-font-size)" }}
            text={backButtonText} // Usa la propiedad 'text'
          />
        )}
        {onNew && (
          <CustomButton
            type="primary"
            onClick={onNew}
            icon={handleOnNewIcon()}
            style={{ fontSize: "var(--toolbar-labels-font-size)" }}
            text={newButtonText} // Usa la propiedad 'text'
            loading={newButtonLoading}
            disabled={newButtonDisabled}
          />
        )}
      </Space>
    </div>
  );
};

export default CustomToolbar;