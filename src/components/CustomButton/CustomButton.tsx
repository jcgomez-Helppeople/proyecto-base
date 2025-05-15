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
  danger?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({ text, type, onClick, icon, style, disabled = false, loading = false, danger = false }) => {
  return (
    <Button danger={danger} type={type} onClick={onClick} icon={icon} style={style} size="small" disabled={disabled} loading={loading}>
      {text}
    </Button>
  );
};

export default CustomButton;