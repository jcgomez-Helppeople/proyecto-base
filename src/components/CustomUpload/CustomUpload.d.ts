import React from "react";
import { UploadProps as AntUploadProps } from "antd";
export interface CustomUploadProps extends AntUploadProps {
    /**
     * Texto del botón de carga
     */
    buttonText?: string;
}
declare const CustomUpload: React.FC<CustomUploadProps>;
export default CustomUpload;
