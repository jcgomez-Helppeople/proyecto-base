import React from "react";
import { AlertProps as AntAlertProps } from "antd";
export interface CustomAlertProps extends AntAlertProps {
    /**
     * Mensaje principal del alert
     */
    message: React.ReactNode;
    /**
     * Descripción opcional del alert
     */
    description?: React.ReactNode;
}
declare const CustomAlert: React.FC<CustomAlertProps>;
export default CustomAlert;
