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
declare const CustomTabs: React.FC<CustomTabsProps>;
export default CustomTabs;
