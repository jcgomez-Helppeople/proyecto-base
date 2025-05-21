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
  children?: React.ReactNode; // Hacer opcional para compatibilidad con métodos estáticos
}

const CustomModal: ModalType = (({ title, children, ...rest }: CustomModalProps) => {
  return (
    <AntModal className="custom-modal" title={title} {...rest}>
      {children}
    </AntModal>
  );
}) as any;

// Heredar métodos estáticos de Antd
[
  'info',
  'success',
  'error',
  'warning',
  'confirm',
  'destroyAll'
].forEach((method) => {
  CustomModal[method as keyof ModalStaticFunctions] = AntModal[method as keyof ModalStaticFunctions];
});

export default CustomModal;