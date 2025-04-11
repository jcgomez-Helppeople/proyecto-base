import React from 'react';
export interface CustomFileUploadProps {
    /** Callback que se dispara cuando se selecciona o se elimina un archivo */
    onFileSelect?: (file: File | null) => void;
    /** Permite especificar el atributo accept del input (por ejemplo, "image/*") */
    accept?: string;
    /** Etiqueta del botón de adjuntar */
    attachLabel?: string;
    /** Clase de estilo para el botón de adjuntar */
    attachButtonClassName?: string;
}
declare const CustomFileUpload: React.FC<CustomFileUploadProps>;
export default CustomFileUpload;
