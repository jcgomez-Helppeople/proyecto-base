import React from 'react';
export interface DragAndDropItem {
    id: string;
    content: React.ReactNode;
}
export interface CustomDragAndDropProps {
    available: DragAndDropItem[];
    selected: DragAndDropItem[];
    onChange: (available: DragAndDropItem[], selected: DragAndDropItem[]) => void;
    availableTitle?: string;
    selectedTitle?: string;
    emptyDescription?: string;
}
declare const CustomDragAndDrop: React.FC<CustomDragAndDropProps>;
export default CustomDragAndDrop;
