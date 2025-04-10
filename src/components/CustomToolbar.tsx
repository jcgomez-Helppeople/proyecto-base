// src/components/CustomToolbar.tsx
import React from "react";
import { Toolbar } from "primereact/toolbar";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

export interface CustomToolbarProps {
  /**
   * Muestra el input de búsqueda si es true.
   */
  showSearch?: boolean;
  /**
   * Valor actual del input de búsqueda.
   */
  searchValue?: string;
  /**
   * Función que se ejecuta al cambiar el valor del input de búsqueda.
   */
  onSearchChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * Función a ejecutar cuando se presiona el botón "Crear".
   */
  onCreate?: () => void;
  /**
   * Función a ejecutar cuando se presiona el botón "Filtrar".
   */
  onFilter?: () => void;
  /**
   * Función a ejecutar cuando se presiona el botón "Volver".
   */
  onBack?: () => void;
  /**
   * Permite personalizar el contenido del lado izquierdo (start).
   * Si se proporciona, se ignoran las opciones por defecto.
   */
  startTemplate?: React.ReactNode;
  /**
   * Permite personalizar el contenido del lado derecho (end).
   * Si se proporciona, se ignoran las opciones por defecto.
   */
  endTemplate?: React.ReactNode;
  /**
   * Función a ejecutar cuando se presiona el botón "Exportar".
   */
  onExport?: () => void;
}

const CustomToolbar: React.FC<CustomToolbarProps> = ({
  showSearch = false,
  searchValue,
  onSearchChange,
  onCreate,
  onFilter,
  onBack,
  startTemplate,
  endTemplate,
  onExport,
}) => {
  // Template por defecto para el lado "start" del Toolbar.
  const defaultStart = (
    <div className="custom-toolbar-container">
      {showSearch && (
        <span className="p-input-icon-left">
          <InputText
            value={searchValue}
            onChange={onSearchChange}
            placeholder="Buscar..."
            className="custom-toolbar-search"
          />
        </span>
      )}
      <div className="custom-toolbar-buttons">
        {onCreate && (
          <Button
            label="Nuevo"
            icon="pi pi-plus"
            onClick={onCreate}
            className="btn-custom"
          />
        )}
        {onFilter && (
          <Button
            label="Filtrar"
            icon="pi pi-filter"
            onClick={onFilter}
            className="p-button-outlined"
          />
        )}
        {onExport && (
          <Button
            label="Exportar"
            icon="pi pi-download"
            onClick={onExport}
            className="p-button-outlined"
          />
        )}
      </div>
    </div>
  );

  // Template por defecto para el lado "end" del Toolbar.
  const defaultEnd = (
    <>
      {onBack && (
        <Button
          label="Volver"
          icon="pi pi-arrow-left"
          onClick={onBack}
          className="p-button-text"
        />
      )}
    </>
  );

  return (
    <Toolbar
      start={startTemplate ? startTemplate : defaultStart}
      end={endTemplate ? endTemplate : defaultEnd}
    />
  );
};

export default CustomToolbar;
