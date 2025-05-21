import { message } from "antd";

export interface CustomMessageConfig {
  content: React.ReactNode;     // texto o elemento a mostrar
  duration?: number;            // segundos antes de cerrar (por defecto 3)
  onClose?: () => void;         // callback al cerrar
}

const CustomMessage = {
  open: (config: CustomMessageConfig) => {
    message.open(config);
  },
  success: (
    content: React.ReactNode,
    duration?: number,
    onClose?: () => void
  ) => {
    message.success(content, duration, onClose);
  },
  error: (
    content: React.ReactNode,
    duration?: number,
    onClose?: () => void
  ) => {
    message.error(content, duration, onClose);
  },
  info: (
    content: React.ReactNode,
    duration?: number,
    onClose?: () => void
  ) => {
    message.info(content, duration, onClose);
  },
  warning: (
    content: React.ReactNode,
    duration?: number,
    onClose?: () => void
  ) => {
    message.warning(content, duration, onClose);
  },
  loading: (
    content: React.ReactNode,
    duration?: number,
    onClose?: () => void
  ) => {
    message.loading(content, duration, onClose);
  },
};

export default CustomMessage;