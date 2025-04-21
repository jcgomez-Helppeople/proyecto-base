import React from "react";

interface Tab {
  key: string;
  label: string;
}

interface CustomTabsProps {
  activeKey: string;
  onChange: (key: string) => void;
  tabs: Tab[];
}

const CustomTabs: React.FC<CustomTabsProps> = ({ activeKey, onChange, tabs }) => {
  return (
    <div style={{ display: "flex", borderBottom: "1px solid #e0e0e0", marginBottom: "1rem" }}>
      {tabs.map((tab) => (
        <div
          key={tab.key}
          onClick={() => onChange(tab.key)}
          style={{
            padding: "1rem",
            cursor: "pointer",
            borderBottom: activeKey === tab.key ? "2px solid #1890ff" : "none",
            color: activeKey === tab.key ? "#1890ff" : "#000000",
            fontWeight: activeKey === tab.key ? "bold" : "normal",
          }}
        >
          {tab.label}
        </div>
      ))}
    </div>
  );
};

export default CustomTabs;