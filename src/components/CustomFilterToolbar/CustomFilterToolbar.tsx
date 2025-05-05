import React, { useEffect, useState } from "react";
import { Select } from "antd";
import { ClearOutlined, FilterOutlined } from "@ant-design/icons";
import CustomDatePicker from "../CustomDatePicker/CustomDatePicker";
import CustomTooltip from "../CustomTooltip/CustomTooltip";
import { CustomButton } from "../CustomButton";
import { CustomInput } from "../Inputs";
import CustomNumericInput from "../Inputs/CustomNumericInput/CustomNumericInput";

export type FilterField = {
  key: string;
  label?: string;
  placeholder?: string;
  type?: "text" | "number" | "date" | "range" | "select"; // Tipos soportados
  options?: { label: string; value: any }[]; // Opciones para select
  mode?: "multiple" | "tags"; // Agregar soporte para modos de selección múltiple
};

export type ToolbarAction = {
  icon: React.ReactNode;
  tooltip?: string;
  onClick: () => void;
  hide?: boolean;
};

export interface CustomFilterToolbarProps {
  fields: FilterField[];
  filters?: Record<string, any>;
  onFilter: (filters: Record<string, any>) => void;
  onClearFilters?: () => void;
  localeCode?: "es" | "en" | "pt";
  actions?: ToolbarAction[];
  onAdvancedFilters?: () => void;
}

const CustomFilterToolbar: React.FC<CustomFilterToolbarProps> = ({
  fields,
  filters: externalFilters,
  onFilter,
  onClearFilters,
  localeCode = "es",
  actions = [],
  onAdvancedFilters,
}) => {
  // Estado para los filtros temporales (no aplicados aún)
  const [tempFilters, setTempFilters] = useState<Record<string, any>>(externalFilters || {});

  // Sincronizar con los filtros externos cuando cambian
  useEffect(() => {
    if (externalFilters) {
      setTempFilters(externalFilters);
    }
  }, [externalFilters]);

  const handleChange = (key: string, val: any) => {
    // Solo actualizamos los filtros temporales, no llamamos a onFilter
    setTempFilters(prev => ({ ...prev, [key]: val }));
  };

  const handleApplyFilters = () => {
    // Solo aquí llamamos a onFilter con los filtros temporales
    onFilter(tempFilters);
  };

  const handleClear = () => {
    // Limpiar los filtros temporales
    setTempFilters({});
    // Llamar al callback de limpieza
    onClearFilters?.();
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
      {/* === IZQUIERDA: Inputs y filtros === */}
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
                  <CustomInput
                    size="small"
                    placeholder={f.placeholder}
                    value={tempFilters[f.key]}
                    onChange={(e) => handleChange(f.key, e.target.value)}
                  />
                ),
                number: (
                  <CustomNumericInput
                    size="small"
                    placeholder={f.placeholder}
                    value={tempFilters[f.key]}
                    onChange={(val) => handleChange(f.key, val)}
                  />
                ),
                date: (
                  <CustomDatePicker
                    size="small"
                    localeCode={localeCode}
                    onChange={(_, dateString) =>
                      handleChange(f.key, dateString)
                    }
                  />
                ),
                range: (
                  <CustomDatePicker.RangePicker
                    size="small"
                    localeCode={localeCode}
                    onChange={(_, dateStrings) =>
                      handleChange(f.key, dateStrings)
                    }
                  />
                ),
                select: (
                  <Select
                    size="small"
                    placeholder={f.placeholder}
                    options={f.options}
                    value={tempFilters[f.key]}
                    mode={f.mode} // Soporte para selección múltiple
                    onChange={(val) => handleChange(f.key, val)}
                  />
                ),
              }[f.type || "text"]
            }
          </div>
        ))}

        {/* Botones de aplicar/limpiar */}
        <CustomButton
          type="primary"
          size="small"
          onClick={handleApplyFilters}
          style={{ marginTop: "18px" }}
          text="Aplicar"
        >
        </CustomButton>
        <CustomButton
          size="small"
          icon={<ClearOutlined />}
          onClick={handleClear}
          style={{ marginTop: "18px" }}
        />
      </div>

      {/* === DERECHA: Acciones y filtros avanzados === */}
      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
        {actions.map((action, i) => (
          !action.hide && (
            <CustomTooltip key={i} content={action.tooltip}>
              <CustomButton
                size="small"
                icon={action.icon}
                onClick={action.onClick}
                style={{ border: "none", background: "none" }}
              />
            </CustomTooltip>
          )
        ))}
        {onAdvancedFilters && (
          <CustomTooltip content="Filtros avanzados">
            <CustomButton
              size="small"
              icon={<FilterOutlined />}
              onClick={onAdvancedFilters}
              style={{ border: "none", background: "none" }}
            />
          </CustomTooltip>
        )}
      </div>
    </div>
  );
};

export default CustomFilterToolbar;
