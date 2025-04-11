import "./CustomToolbar.styles.css";
interface CustomToolbarProps {
    title: string;
    onNewClick: () => void;
    onBackClick: () => void;
}
declare const CustomToolbar: ({ title, onNewClick, onBackClick }: CustomToolbarProps) => import("react/jsx-runtime").JSX.Element;
export default CustomToolbar;
