import React from "react";
import { Tabs } from "antd";

export interface CustomTabsProps {
  items: {
    key: string;
    label: React.ReactNode;
    content: React.ReactNode;
  }[];
  defaultActiveKey?: string;
  activeKey?: string;
  onChange?: (key: string) => void;
  type?: "line" | "card" | "editable-card";
}

const CustomTabs: React.FC<CustomTabsProps> = ({
  items,
  defaultActiveKey,
  activeKey,
  onChange,
  type = "line",
}) => {
  return (
    <div
      style={{
        backgroundColor: "#ffffff", // Fondo blanco
        border: "1px solid #e0e0e0", // Borde sutil
        borderRadius: "8px", // Bordes redondeados
        padding: "1rem", // Espaciado interno
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Sombra ligera
      }}
    >
      <Tabs
        defaultActiveKey={defaultActiveKey}
        activeKey={activeKey}
        onChange={onChange}
        type={type}
        tabBarStyle={{
          fontFamily: "'Open Sans', sans-serif", // Fuente Open Sans
          fontSize: "12px", // Tamaño de fuente 12px
          lineHeight: "1.5", // Asegúrate de ajustar el line-height si es necesario
        }}
        items={items.map((item) => ({
          key: item.key,
          label: (
            <div style={{ fontSize: "12px" }}>
              {item.label}
            </div>
          ),
          children: (
            <div
              style={{
                padding: "1rem", // Espaciado interno para el contenido
                backgroundColor: "#ffffff", // Fondo blanco para el contenido
              }}
            >
              {item.content}
            </div>
          ),
        }))}
      />
    </div>
  );
};

export default CustomTabs;