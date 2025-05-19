import React from 'react';
import 'react-quill/dist/quill.snow.css';
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
declare const CustomRichTextEditor: React.FC<CustomRichTextEditorProps>;
export default CustomRichTextEditor;
