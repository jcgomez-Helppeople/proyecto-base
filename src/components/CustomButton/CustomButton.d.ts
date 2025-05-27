import React from "react";
interface CustomButtonProps {
    text?: string;
    type?: "primary" | "default" | "dashed";
    onClick: () => void;
    size?: "small" | "middle" | "large";
    disabled?: boolean;
    loading?: boolean;
    icon?: React.ReactNode;
    style?: React.CSSProperties;
    danger?: boolean;
    className?: string;
    onMouseEnter?: () => void;
    htmlType?: "submit" | "button" | "reset";
}
declare const CustomButton: React.FC<CustomButtonProps>;
export default CustomButton;
