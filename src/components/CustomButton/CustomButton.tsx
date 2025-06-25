import React from "react";
import { Button } from "antd";

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

const CustomButton: React.FC<CustomButtonProps> = ({
  className,
  text,
  type,
  onClick,
  icon,
  style,
  disabled = false,
  loading = false,
  danger = false,
  onMouseEnter,
  htmlType = "button",
}) => {
  return (
    <Button
      danger={danger}
      type={type}
      onClick={onClick}
      icon={icon}
      style={{ ...style, fontSize: "var(--toolbar-labels-font-size)", fontWeight: "var(--toolbar-title-font-weight", fontFamily: "var(--toolbar-title-font-family)" }}
      size="small"
      disabled={disabled}
      loading={loading}
      className={`${className || ""}`}
      onMouseEnter={onMouseEnter}
      htmlType={htmlType}
    >
      {text}
    </Button>
  );
};

export default CustomButton;