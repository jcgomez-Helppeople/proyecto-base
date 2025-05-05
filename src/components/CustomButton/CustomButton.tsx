import React from "react";
import { Button } from "antd";

interface CustomButtonProps {
  text?: string;
  type?: "primary" | "default";
  onClick: () => void;
  size?: "small" | "middle" | "large"; 
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  style?: React.CSSProperties;
}

const CustomButton: React.FC<CustomButtonProps> = ({ text, type, onClick, icon, style }) => {
  return (
    <Button type={type} onClick={onClick} icon={icon} style={style} size="small" disabled={false} loading={false}>
      {text}
    </Button>
  );
};

export default CustomButton;