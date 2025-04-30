import React from "react";
export type FilterField = {
    key: string;
    label: string;
    placeholder?: string;
    type: "text" | "number" | "select";
    options?: {
        label: string;
        value: any;
    }[];
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
declare const CustomFilterDrawer: React.FC<CustomFilterDrawerProps>;
export default CustomFilterDrawer;
