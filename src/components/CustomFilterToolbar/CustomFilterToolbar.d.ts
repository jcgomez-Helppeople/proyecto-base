import React from "react";
export interface FilterField {
    key: string;
    placeholder: string;
    label?: string;
}
export interface CustomFilterToolbarProps {
    fields: FilterField[];
    onFilter: (filters: Record<string, string>) => void;
    onClearFilters?: () => void;
}
declare const CustomFilterToolbar: React.FC<CustomFilterToolbarProps>;
export default CustomFilterToolbar;
