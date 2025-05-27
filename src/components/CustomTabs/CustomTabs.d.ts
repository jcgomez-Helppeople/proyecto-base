import React from "react";
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
declare const CustomTabs: React.FC<CustomTabsProps>;
export default CustomTabs;
