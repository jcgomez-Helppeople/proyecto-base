import React from "react";
interface CustomButtonProps {
    text: string;
    type: "primary" | "default";
    onClick: () => void;
    icon?: React.ReactNode;
    style?: React.CSSProperties;
}
declare const CustomButton: React.FC<CustomButtonProps>;
export default CustomButton;
