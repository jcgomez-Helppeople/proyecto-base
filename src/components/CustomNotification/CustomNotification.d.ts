interface CustomNotificationProps {
    type: "success" | "error" | "info" | "warning";
    message: string;
    description?: string;
    duration?: number;
    placement?: "topLeft" | "topRight" | "bottomLeft" | "bottomRight";
    width?: number | string;
    padding?: string;
    height?: number | string;
}
declare const CustomNotification: {
    open: ({ type, message, description, duration, placement, }: CustomNotificationProps) => void;
};
export default CustomNotification;
