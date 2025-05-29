export interface CustomMessageConfig {
    content: React.ReactNode;
    duration?: number;
    onClose?: () => void;
}
declare const CustomMessage: {
    open: (config: CustomMessageConfig) => void;
    success: (content: React.ReactNode, duration?: number, onClose?: () => void) => void;
    error: (content: React.ReactNode, duration?: number, onClose?: () => void) => void;
    info: (content: React.ReactNode, duration?: number, onClose?: () => void) => void;
    warning: (content: React.ReactNode, duration?: number, onClose?: () => void) => void;
    loading: (content: React.ReactNode, duration?: number, onClose?: () => void) => void;
};
export default CustomMessage;
