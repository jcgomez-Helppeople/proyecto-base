import React from "react";
import { Modal as AntModal, ModalProps as AntModalProps } from "antd";

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

const CustomModal: React.FC<CustomModalProps> = ({ title, children, ...rest }) => {
  return (
    <AntModal className="custom-modal" title={title} {...rest}>
      {children}
    </AntModal>
  );
};

export default CustomModal;