import React, { useEffect, useState } from "react";
import { ClearOutlined, FilterOutlined } from "@ant-design/icons";
import CustomDatePicker from "../CustomDatePicker/CustomDatePicker";
import CustomTooltip from "../CustomTooltip/CustomTooltip";
import { CustomButton } from "../CustomButton";
import { CustomInput } from "../Inputs";
import CustomNumericInput from "../Inputs/CustomNumericInput/CustomNumericInput";
import CustomSelect from "../CustomSelect/CustomSelect"; // Añadir esta importación

export type FilterField = {
  key: string;
  label?: string;
  placeholder?: string;
  type?: "text" | "number" | "date" | "range" | "select"; // Tipos soportados
  options?: { label: string; value: any }[]; // Opciones para select
  mode?: "multiple" | "tags"; // Agregar soporte para modos de selección múltiple
  allowClear?: boolean;
  showSearch?: boolean;
  optionFilterProp?: "label" | "value" | "children"; 
  filterOption?: boolean | ((inputValue: string, option: any) => boolean);
};

export type ToolbarAction = {
  icon: React.ReactNode;
  tooltip?: string;
  onClick: () => void;
  hide?: boolean;
  loading?: boolean;
};

export interface CustomFilterToolbarProps {
  fields: FilterField[];
  filters?: Record<string, any>;
  onFilter: (filters: Record<string, any>) => void;
  onClearFilters?: () => void;
  localeCode?: "es" | "en" | "pt";
  actions?: ToolbarAction[];
  onAdvancedFilters?: () => void;
  loading?: boolean;
}

const CustomFilterToolbar: React.FC<CustomFilterToolbarProps> = ({
  fields,
  filters: externalFilters,
  onFilter,
  onClearFilters,
  localeCode = "es",
  actions = [],
  onAdvancedFilters,
  loading = false,
}) => {
  // Estado para los filtros temporales (no aplicados aún)
  const [tempFilters, setTempFilters] = useState<Record<string, any>>(
    externalFilters || {}
  );

  // Sincronizar con los filtros externos cuando cambian
  useEffect(() => {
    if (externalFilters) {
      setTempFilters(externalFilters);
    }
  }, [externalFilters]);

  const handleChange = (key: string, val: any) => {
    // Solo actualizamos los filtros temporales, no llamamos a onFilter
    setTempFilters((prev) => ({ ...prev, [key]: val }));
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
          <div
            key={f.key}
            style={{
              display: "flex",
              flexDirection: "column",
              width: "200px", // Ancho fijo para todos los campos
            }}
          >
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
                    placeholder={f.placeholder}
                    value={tempFilters[f.key]}
                    onChange={(e) => handleChange(f.key, e.target.value)}
                    style={{ width: "100%" }} // Usar 100% para llenar el contenedor padre
                  />
                ),
                number: (
                  <CustomNumericInput
                    placeholder={f.placeholder}
                    value={tempFilters[f.key]}
                    onChange={(val) => handleChange(f.key, val)}
                    style={{ width: "100%" }} // Usar 100% para llenar el contenedor padre
                  />
                ),
                date: (
                  <CustomDatePicker
                    localeCode={localeCode}
                    onChange={(_, dateString) => handleChange(f.key, dateString)}
                    style={{ width: "100%" }} // Usar 100% para llenar el contenedor padre
                  />
                ),
                range: (
                  <CustomDatePicker.RangePicker
                    localeCode={localeCode}
                    onChange={(_, dateStrings) => handleChange(f.key, dateStrings)}
                    style={{ width: "100%" }} // Usar 100% para llenar el contenedor padre
                  />
                ),
                select: (
                  <CustomSelect
                    placeholder={f.placeholder}
                    options={f.options}
                    value={tempFilters[f.key]}
                    mode={f.mode}
                    allowClear={f.allowClear}
                    showSearch={f.showSearch}
                    optionFilterProp={f.optionFilterProp}
                    filterOption={f.filterOption}
                    onChange={(val) => handleChange(f.key, val)}
                    style={{ width: "100%" }} // Usar 100% para llenar el contenedor padre
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
          loading={loading}
          disabled={loading}
          style={{ marginTop: "18px" }}
          text="Aplicar"
        />
        <CustomButton
          size="small"
          icon={<ClearOutlined />}
          onClick={handleClear}
          style={{ marginTop: "18px" }}
          disabled={loading}
        />
      </div>

      {/* === DERECHA: Acciones y filtros avanzados === */}
      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
        {actions.map(
          (action, i) =>
            !action.hide && (
              <CustomTooltip key={i} content={action.tooltip}>
                <span>
                  <CustomButton
                    size="small"
                    icon={action.icon}
                    onClick={action.onClick}
                    style={{ border: "none", background: "none" }}
                    loading={action.loading}
                  />
                </span>
              </CustomTooltip>
            )
        )}
        {onAdvancedFilters && (
          <CustomTooltip content="Filtros avanzados">
            <span>
              <CustomButton
                size="small"
                icon={<FilterOutlined />}
                onClick={onAdvancedFilters}
                style={{ border: "none", background: "none" }}
              />
            </span>
          </CustomTooltip>
        )}
      </div>
    </div>
  );
};

export default CustomFilterToolbar;