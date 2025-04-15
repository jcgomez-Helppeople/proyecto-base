import React from "react";
import { Upload as AntUpload, UploadProps as AntUploadProps, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";

export interface CustomUploadProps extends AntUploadProps {
  /**
   * Texto del botón de carga
   */
  buttonText?: string;
}

const CustomUpload: React.FC<CustomUploadProps> = ({ buttonText = "Subir archivo", ...rest }) => {
  return (
    <AntUpload {...rest}>
      <Button icon={<UploadOutlined />}>{buttonText}</Button>
    </AntUpload>
  );
};

export default CustomUpload;