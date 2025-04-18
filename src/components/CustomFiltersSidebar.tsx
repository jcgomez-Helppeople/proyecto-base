// src/components/CustomFiltersSidebar.tsx
import React from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";

export interface CustomFiltersSidebarProps {
  /** Controla la visibilidad del Sidebar */
  visible: boolean;
  /** Función para ocultar el Sidebar */
  onHide: () => void;
  /** Título o header del Sidebar */
  header?: React.ReactNode;
  /** Contenido dinámico para los filtros */
  children?: React.ReactNode;
  /** Función para aplicar los filtros */
  onApplyFilters?: () => void;
  /** Función para limpiar los filtros */
  onClearFilters?: () => void;
}

const CustomFiltersSidebar: React.FC<CustomFiltersSidebarProps> = ({
  visible,
  onHide,
  header = "Filtros",
  children,
  onApplyFilters,
  onClearFilters,
}) => {
  return (
    <Sidebar
      visible={visible}
      onHide={onHide}
      position="right"
      header={header}
      style={{ width: "600px" }}
    >
      <div className="filters-grid">{children}</div>
      <div className="p-d-flex p-jc-end p-mt-3 mt-6">
        {onClearFilters && (
          <Button
            label="Limpiar"
            icon="pi pi-times"
            onClick={onClearFilters}
            className="p-button-primary"
            outlined
            style={{ marginRight: "1rem" }}
          />
        )}
        {onApplyFilters && (
          <Button
            label="Aplicar"
            icon="pi pi-check"
            onClick={onApplyFilters}
            className="p-button-primary"
            outlined
          />
        )}
      </div>
    </Sidebar>
  );
};

export default CustomFiltersSidebar;
