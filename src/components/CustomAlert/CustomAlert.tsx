import React from "react";
import { Alert as AntAlert, AlertProps as AntAlertProps } from "antd";

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

const CustomAlert: React.FC<CustomAlertProps> = (props) => {
  return <AntAlert {...props} />;
};

export default CustomAlert;