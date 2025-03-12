// src/components/CustomFileUpload.tsx
import React, { useRef, useState } from 'react';
import { Button } from 'primereact/button';

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

const CustomFileUpload: React.FC<CustomFileUploadProps> = ({
  onFileSelect,
  accept = '*',
  attachLabel = 'Adjuntar',
  attachButtonClassName = 'p-button-primary'
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      setSelectedFile(file);
      if (onFileSelect) {
        onFileSelect(file);
      }
    }
  };

  const handleClearFile = () => {
    setSelectedFile(null);
    if (onFileSelect) {
      onFileSelect(null);
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="custom-file-upload p-d-flex p-ai-center">
      <Button 
        label={attachLabel} 
        icon="pi pi-paperclip" 
        onClick={handleButtonClick}
        className={attachButtonClassName}
      />
      <input 
        type="file" 
        ref={fileInputRef} 
        style={{ display: 'none' }} 
        onChange={handleFileChange}
        accept={accept}
      />
      {selectedFile && (
        <div className="p-ml-2 p-d-flex p-ai-center">
          <span>{selectedFile.name}</span>
          <Button 
            icon="pi pi-times" 
            className="p-button-text p-ml-2" 
            onClick={handleClearFile}
          />
        </div>
      )}
    </div>
  );
};

export default CustomFileUpload;
