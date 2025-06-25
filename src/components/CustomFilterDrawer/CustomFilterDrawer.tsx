import React from "react";
import { Drawer, Button, Space, Input, Select, InputNumber, Tooltip } from "antd";
import { ClearOutlined } from "@ant-design/icons";

export type FilterField = {
  key: string;
  label: string;
  placeholder?: string;
  type: "text" | "number" | "select";
  options?: { label: string; value: any }[]; // Solo para select
};

export interface CustomFilterDrawerProps {
  visible: boolean;
  title: string;
  fields: FilterField[];
  filters: Record<string, any>;
  onClose: () => void;
  onApplyFilters: () => void;
  onClearFilters: () => void;
  onChange: (key: string, value: any) => void;
}

const CustomFilterDrawer: React.FC<CustomFilterDrawerProps> = ({
  visible,
  title,
  fields,
  filters,
  onClose,
  onApplyFilters,
  onClearFilters,
  onChange,
}) => {
  return (
    <Drawer
      title={title}
      placement="right"
      onClose={onClose}
      visible={visible}
      width={400}
      bodyStyle={{ paddingBottom: 80 }}
      footer={
        <div style={{ textAlign: "right" }}>
          <Space>
            <Button type="primary" onClick={onApplyFilters}>
              Aplicar filtros
            </Button>
            <Tooltip title="Limpiar filtros">
              <Button
                icon={<ClearOutlined />}
                onClick={onClearFilters}
              />
            </Tooltip>
          </Space>
        </div>
      }
      footerStyle={{
        background: "#fff",
        borderTop: "1px solid #e0e0e0",
        padding: "10px 16px",
      }}
    >
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
        {fields.map((field) => (
          <div
            key={field.key}
            style={{
              display: "flex",
              flexDirection: "column",
              width: "calc(50% - 8px)", // Dos columnas por fila
            }}
          >
            <label
              style={{
                marginBottom: 4,
                fontFamily: "var(--toolbar-title-font-family)",
                fontWeight: "var(--toolbar-title-font-weight)",
                fontSize: "var(--toolbar-labels-font-size)",
              }}
            >
              {field.label}
            </label>
            {{
              text: (
                <Input
                  placeholder={field.placeholder}
                  value={filters[field.key]}
                  onChange={(e) => onChange(field.key, e.target.value)}
                />
              ),
              number: (
                <InputNumber
                  placeholder={field.placeholder}
                  value={filters[field.key]}
                  onChange={(value) => onChange(field.key, value)}
                  style={{ width: "100%" }}
                />
              ),
              select: (
                <Select
                  placeholder={field.placeholder}
                  options={field.options}
                  value={filters[field.key]}
                  onChange={(value) => onChange(field.key, value)}
                  style={{ width: "100%" }}
                />
              ),
            }[field.type]}
          </div>
        ))}
      </div>
    </Drawer>
  );
};

export default CustomFilterDrawer;