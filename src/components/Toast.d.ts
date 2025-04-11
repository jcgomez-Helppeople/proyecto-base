import { FC } from "react";
type Props = {
    messages: {
        severity: "success" | "info" | "warn" | "error";
        summary: string;
        detail: string;
    }[];
    trigger: boolean;
};
declare const Toast: FC<Props>;
export default Toast;
