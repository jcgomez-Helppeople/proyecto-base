import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

// Tipos para los módulos
interface ToolbarOptions {
  header?: (number | boolean)[];
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
}

interface Modules {
  toolbar?: Array<any[] | ToolbarOptions>;
  clipboard?: {
    matchVisual?: boolean;
  };
}

// Configuración por defecto de los módulos
const defaultModules: Modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    ['link', 'image'],
    ['clean'],
    [{ color: [] }, { background: [] }],
    [{ align: [] }],
  ],
  clipboard: {
    matchVisual: false,
  }
};

// Formatos soportados por defecto
const defaultFormats = [
  'header',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet',
  'link', 'image',
  'color', 'background',
  'align'
];

interface CustomRichTextEditorProps {
  value?: string;
  onChange?: (content: string) => void;
  placeholder?: string;
  modules?: Modules;
  formats?: string[];
  theme?: 'snow' | 'bubble';
  readOnly?: boolean;
  height?: string | number;
  width?: string | number;
  style?: React.CSSProperties;
}

const CustomRichTextEditor: React.FC<CustomRichTextEditorProps> = ({
  value = "",
  onChange = () => { },
  placeholder = "Escribe aquí...",
  modules = defaultModules,
  formats = defaultFormats,
  theme = "snow",
  height = '200px',
  width = '100%',
  ...props
}) => {

  const editorStyle: React.CSSProperties = {
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height,
    display: 'flex',
    flexDirection: 'column',
    ...props.style,
  };

  return (
    <ReactQuill
      theme={theme}
      value={value}
      onChange={onChange}
      modules={modules}
      formats={formats}
      placeholder={placeholder}
      style={editorStyle}
      {...props}
    />
  );
};

export default CustomRichTextEditor;