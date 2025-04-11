import "./CustomFiltersToolbar.styles.css";
interface CustomFiltersToolbarProps {
    onFilterChange: (filters: {
        codeOrName: string;
        instructions: string;
        enabled: string;
    }) => void;
}
declare const CustomFiltersToolbar: ({ onFilterChange }: CustomFiltersToolbarProps) => import("react/jsx-runtime").JSX.Element;
export default CustomFiltersToolbar;
