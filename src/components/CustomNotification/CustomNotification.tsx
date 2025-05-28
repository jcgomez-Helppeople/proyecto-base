import { notification } from "antd";

interface CustomNotificationProps {
  type: "success" | "error" | "info" | "warning";
  message: string;
  description?: string;
  duration?: number; // Duración en segundos antes de que desaparezca automáticamente
  placement?: "topLeft" | "topRight" | "bottomLeft" | "bottomRight"; // Posición de la notificación
  width?: number | string; // nuevo prop opcional
  padding?: string; // nuevo prop opcional
  height?: number | string; // nuevo prop opcional
}

const CustomNotification = {
  open: ({
    type,
    message,
    description,
    duration = 3,
    placement = "topRight",
  }: CustomNotificationProps) => {
    notification[type]({
      message: <div style={{ fontSize: 12 }}>{message}</div>,
      description: description && <div style={{ fontSize: 12 }}>{description}</div>,
      duration,
      placement,
      style: {
        fontSize: 12,
      },
    });
  },
};

export default CustomNotification;