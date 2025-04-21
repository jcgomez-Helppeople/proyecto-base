import { notification } from "antd";

interface CustomNotificationProps {
  type: "success" | "error" | "info" | "warning";
  message: string;
  description?: string;
  duration?: number; // Duración en segundos antes de que desaparezca automáticamente
  placement?: "topLeft" | "topRight" | "bottomLeft" | "bottomRight"; // Posición de la notificación
}

const CustomNotification = {
  open: ({ type, message, description, duration = 3, placement = "topRight" }: CustomNotificationProps) => {
    notification[type]({
      message,
      description,
      duration,
      placement,
    });
  },
};

export default CustomNotification;