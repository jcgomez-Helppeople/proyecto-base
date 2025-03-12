import { FC, useRef, useEffect } from "react";
import { Toast as ToastPrime } from "primereact/toast";

type Props = {
    messages: { severity: "success" | "info" | "warn" | "error"; summary: string; detail: string }[];
    trigger: boolean;
};

const Toast: FC<Props> = ({ messages, trigger }) => {
    const toast = useRef<ToastPrime>(null);

    useEffect(() => {
        if (trigger) {
            messages.forEach((msg) => {
                toast.current?.show(msg);
            });
        }
    }, [trigger, messages]);

    return <ToastPrime ref={toast} />;
};

export default Toast;
