import React, { useState } from "react";
import { Input, Button, Select, InputNumber, Tooltip } from "antd";
import { ClearOutlined, FilterOutlined } from "@ant-design/icons";
import CustomDatePicker from "../CustomDatePicker/CustomDatePicker";

export type FilterField = {
  key: string;
  label?: string;
  placeholder?: string;
  type?: "text" | "number" | "date" | "range" | "select"; // Agregado "range" para RangePicker
  options?: { label: string; value: any }[]; // Sólo para select
};

export type ToolbarAction = {
  icon: React.ReactNode; // Ícono a mostrar
  tooltip?: string; // Texto del tooltip
  onClick: () => void; // Acción al hacer clic
};

export interface CustomFilterToolbarProps {
  fields: FilterField[];
  onFilter: (filters: Record<string, any>) => void;
  onClearFilters?: () => void;
  localeCode?: "es" | "en" | "pt";
  actions?: ToolbarAction[]; // Nuevas acciones personalizadas
  onAdvancedFilters?: () => void; // Acción para abrir filtros avanzados
}

const CustomFilterToolbar: React.FC<CustomFilterToolbarProps> = ({
  fields,
  onFilter,
  onClearFilters,
  localeCode = "es",
  actions = [],
  onAdvancedFilters,
}) => {
  const [filters, setFilters] = useState<Record<string, any>>({});

  const handleChange = (key: string, val: any) => {
    setFilters((prev) => ({ ...prev, [key]: val }));
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        padding: "8px 12px",
        background: "#fff",
        border: "1px solid #e0e0e0",
        borderRadius: 6,
        marginBottom: 12,
      }}
    >
      {/* === IZQUIERDA: inputs + filtros === */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "8px",
          alignItems: "center",
        }}
      >
        {fields.map((f) => (
          <div key={f.key} style={{ display: "flex", flexDirection: "column" }}>
            {f.label && (
              <label
                style={{
                  marginBottom: 4,
                  fontSize: 12,
                  fontWeight: 600,
                  fontFamily: "'Open Sans', sans-serif",
                }}
              >
                {f.label}
              </label>
            )}
            {
              {
                text: (
                  <Input
                    size="small"
                    placeholder={f.placeholder}
                    value={filters[f.key]}
                    onChange={(e) => handleChange(f.key, e.target.value)}
                    style={{ width: 150 }}
                  />
                ),
                number: (
                  <InputNumber
                    size="small"
                    placeholder={f.placeholder}
                    value={filters[f.key]}
                    onChange={(val) => handleChange(f.key, val)}
                    style={{ width: 150 }}
                  />
                ),
                date: (
                  <CustomDatePicker
                    size="small"
                    localeCode={localeCode}
                    onChange={(_, dateString) => handleChange(f.key, dateString)}
                    style={{ width: 200 }}
                  />
                ),
                range: (
                  <CustomDatePicker.RangePicker
                    size="small"
                    localeCode={localeCode}
                    onChange={(_, dateStrings) => handleChange(f.key, dateStrings)}
                    style={{ width: 200 }}
                  />
                ),
                select: (
                  <Select
                    size="small"
                    placeholder={f.placeholder}
                    options={f.options}
                    value={filters[f.key]}
                    onChange={(val) => handleChange(f.key, val)}
                    style={{ width: 150 }}
                  />
                ),
              }[f.type || "text"]
            }
          </div>
        ))}

        {/* Botones de aplicar/limpiar */}
        <Button
          type="primary"
          size="small"
          onClick={() => onFilter(filters)}
          style={{ marginTop: "18px" }}
        >
          Aplicar filtros
        </Button>
        <Button
          size="small"
          icon={<ClearOutlined />}
          onClick={() => {
            setFilters({});
            onClearFilters?.();
          }}
          style={{ marginTop: "18px" }}
        />
      </div>

      {/* === DERECHA: iconos Excel/PDF y botón de filtros avanzados === */}
      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
        {actions.map((action, i) => (
          <Tooltip key={i} title={action.tooltip}>
            <Button
              size="small"
              icon={action.icon}
              onClick={action.onClick}
              style={{ border: "none", background: "none" }}
            />
          </Tooltip>
        ))}
        {onAdvancedFilters && (
          <Button
            size="small"
            icon={<FilterOutlined />}
            onClick={onAdvancedFilters}
            style={{ border: "none", background: "none" }}
          >
            Filtros avanzados
          </Button>
        )}
      </div>
    </div>
  );
};

export default CustomFilterToolbar;
