import React from "react";
import { Button } from "antd";

interface CustomButtonProps {
  text: string;
  type: "primary" | "default";
  onClick: () => void;
  icon?: React.ReactNode;
  style?: React.CSSProperties;
}

const CustomButton: React.FC<CustomButtonProps> = ({ text, type, onClick, icon, style }) => {
  return (
    <Button type={type} onClick={onClick} icon={icon} style={style}>
      {text}
    </Button>
  );
};

export default CustomButton;