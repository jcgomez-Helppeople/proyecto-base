import React from "react";
export type FilterField = {
    key: string;
    label?: string;
    placeholder?: string;
    type?: "text" | "number" | "date" | "range" | "select";
    options?: {
        label: string;
        value: any;
    }[];
    mode?: "multiple" | "tags";
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
declare const CustomFilterToolbar: React.FC<CustomFilterToolbarProps>;
export default CustomFilterToolbar;
