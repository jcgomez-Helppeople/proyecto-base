import React from "react";
import { Modal as AntModal, ModalProps as AntModalProps } from "antd";
import { ModalStaticFunctions } from "antd/es/modal/confirm";
type ModalType = typeof AntModal & ModalStaticFunctions;
export interface CustomModalProps extends AntModalProps {
    /**
     * Título del Modal
     */
    title?: string;
    /**
     * Contenido del Modal
     */
    children?: React.ReactNode;
}
declare const CustomModal: ModalType;
export default CustomModal;
