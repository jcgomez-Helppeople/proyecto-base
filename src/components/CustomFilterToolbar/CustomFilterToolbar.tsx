import React, { useState } from "react";
import { Input, Button, Space } from "antd";
import { ClearOutlined } from "@ant-design/icons"; // Ícono de escoba

export interface FilterField {
  key: string;
  placeholder: string;
  label?: string; // Título opcional para el input
}

export interface CustomFilterToolbarProps {
  fields: FilterField[];
  onFilter: (filters: Record<string, string>) => void;
  onClearFilters?: () => void;
}

const CustomFilterToolbar: React.FC<CustomFilterToolbarProps> = ({
  fields,
  onFilter,
  onClearFilters,
}) => {
  const [filters, setFilters] = useState<Record<string, string>>({});

  const handleInputChange = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleApplyFilters = () => {
    onFilter(filters);
  };

  const handleClearFilters = () => {
    setFilters({});
    if (onClearFilters) {
      onClearFilters();
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "1rem",
        marginBottom: "1rem",
        alignItems: "flex-start", // Alinear elementos al inicio verticalmente
        padding: "1rem",
        backgroundColor: "#ffffff", // Fondo blanco
        border: "1px solid #e0e0e0", // Borde sutil
        borderRadius: "8px", // Bordes redondeados
      }}
    >
      <Space wrap>
        {fields.map((field) => (
          <div key={field.key} style={{ display: "flex", flexDirection: "column" }}>
            {field.label && (
              <label
                style={{
                  marginBottom: "0.5rem",
                  fontWeight: "bold",
                  fontSize: "12px", // Tamaño de fuente 12px
                  fontFamily: "'Open Sans', sans-serif", // Fuente Open Sans
                  color: "#333", // Color oscuro
                }}
              >
                {field.label}
              </label>
            )}
            <Input
              placeholder={field.placeholder}
              value={filters[field.key] || ""}
              onChange={(e) => handleInputChange(field.key, e.target.value)}
              style={{ width: "200px" }}
            />
          </div>
        ))}
      </Space>
      <Space style={{ marginTop: "1.5rem" }}> {/* Ajuste de margen superior */}
        <Button type="primary" onClick={handleApplyFilters}>
          Aplicar Filtros
        </Button>
        <Button
          type="default"
          onClick={handleClearFilters}
          icon={<ClearOutlined />} // Ícono de escoba
        />
      </Space>
    </div>
  );
};

export default CustomFilterToolbar;