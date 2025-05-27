import React from "react";
import { Drawer, Button, Space, Tooltip } from "antd";
import { ClearOutlined } from "@ant-design/icons";

interface CustomFilterDrawerHpProps {
  visible: boolean;
  title: string;
  filters: Record<string, any>;
  onChange: (key: string, value: any) => void;
  onClose: () => void;
  onSubmit: () => void;
  onClear: () => void;
  children: (utils: {
    filters: Record<string, any>;
    onChange: (key: string, value: any) => void;
  }) => React.ReactNode;
  loading?: boolean;
}

const CustomFilterDrawerHp: React.FC<CustomFilterDrawerHpProps> = ({
  visible,
  title,
  filters,
  onChange,
  onClose,
  onSubmit,
  onClear,
  children,
  loading = false,
}) => {
  return (
    <Drawer
      title={title}
      placement="right"
      onClose={onClose}
      open={visible}
      width={400}
      styles={{
        body: { 
          paddingBottom: 80,
          display: "flex",
          flexWrap: "wrap",
          gap: 16
        },
        footer: {
          background: "#fff",
          borderTop: "1px solid #e0e0e0",
          padding: "10px 16px",
          textAlign: "right"
        }
      }}
      footer={
        <div style={{ textAlign: "right" }}>
          <Space>
            <Button
              type="primary"
              onClick={onSubmit}
              loading={loading}
              disabled={loading}
            >
              Aplicar
            </Button>
            <Tooltip title="Limpiar filtros">
              <Button
                icon={<ClearOutlined />}
                onClick={onClear}
                disabled={loading}
              />
            </Tooltip>
          </Space>
        </div>
      }
    >
      {children({ filters, onChange })}
    </Drawer>
  );
};

export default CustomFilterDrawerHp;
