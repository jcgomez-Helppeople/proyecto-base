import React from "react";
import { ModalProps as AntModalProps } from "antd";
export interface CustomModalProps extends AntModalProps {
    /**
     * Título del Modal
     */
    title?: string;
    /**
     * Contenido del Modal
     */
    children: React.ReactNode;
}
declare const CustomModal: React.FC<CustomModalProps>;
export default CustomModal;
