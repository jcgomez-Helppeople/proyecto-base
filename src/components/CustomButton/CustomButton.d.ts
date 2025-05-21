import React from "react";
interface CustomButtonProps {
    text?: string;
    type?: "primary" | "default";
    onClick: () => void;
    size?: "small" | "middle" | "large";
    disabled?: boolean;
    loading?: boolean;
    icon?: React.ReactNode;
    style?: React.CSSProperties;
    danger?: boolean;
    className?: string;
    onMouseEnter?: () => void;
}
declare const CustomButton: React.FC<CustomButtonProps>;
export default CustomButton;
