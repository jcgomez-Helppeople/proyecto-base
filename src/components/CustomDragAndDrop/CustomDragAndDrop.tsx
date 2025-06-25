import React from 'react';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
import { Typography, Empty } from 'antd';
import CustomCard from '../CustomCard/CustomCard';
import CustomCol from '../CustomCol/CustomCol';
import CustomRow from '../CustomRow/CustomRow';

const { Title } = Typography;

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

const CustomDragAndDrop: React.FC<CustomDragAndDropProps> = ({
    available,
    selected,
    onChange,
    availableTitle = 'Disponibles',
    selectedTitle = 'Seleccionados',
    emptyDescription = 'Arrastra los elementos aquí',
}) => {
    const onDragEnd = (result: DropResult) => {
        const { source, destination } = result;

        if (!destination) return;
        if (source.droppableId === destination.droppableId && source.index === destination.index) return;

        // reordenamiento dentro de la misma columna
        if (source.droppableId === destination.droppableId) {
            const list = source.droppableId === 'disponibles'
                ? [...available]
                : [...selected];

            const [movedItem] = list.splice(source.index, 1);
            list.splice(destination.index, 0, movedItem);

            if (source.droppableId === 'disponibles') {
                onChange(list, selected);
            } else {
                onChange(available, list);
            }
        }
        // movimiento entre columnas
        else {
            const sourceList = source.droppableId === 'disponibles'
                ? [...available]
                : [...selected];

            const destList = destination.droppableId === 'disponibles'
                ? [...available]
                : [...selected];

            const [movedItem] = sourceList.splice(source.index, 1);
            destList.splice(destination.index, 0, movedItem);

            if (source.droppableId === 'disponibles') {
                onChange(sourceList, destList);
            } else {
                onChange(destList, sourceList);
            }
        }
    };

    const renderColumn = (id: string, title: string, items: DragAndDropItem[]) => (
        <CustomCol span={12}>
            <Title level={4} style={{ marginBottom: 16, fontSize: 14 }}>{title}</Title>
            <Droppable droppableId={id}>
                {(provided, snapshot) => (
                    <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        style={{
                            minHeight: 300,
                            background: snapshot.isDraggingOver ? '#f0f9ff' : '#f8fafc',
                            padding: 16,
                            borderRadius: 8,
                            border: `2px dashed ${snapshot.isDraggingOver ? '#3b82f6' : '#cbd5e1'}`,
                            transition: 'all 0.2s ease',
                        }}
                    >
                        {items.length === 0 ? (
                            <Empty
                                description={emptyDescription}
                                style={{ opacity: 0.3 }}
                            />
                        ) : (
                            items.map((item, index) => (
                                <Draggable key={item.id} draggableId={item.id} index={index}>
                                    {(provided, snapshot) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            style={{
                                                marginBottom: 8,
                                                cursor: snapshot.isDragging ? 'grabbing' : 'grab',
                                                opacity: snapshot.isDragging ? 0.8 : 1,
                                                transform: snapshot.isDragging ? 'rotate(3deg)' : 'none',
                                                ...provided.draggableProps.style,
                                            }}
                                        >
                                            <CustomCard
                                                size="small"
                                                style={{
                                                    boxShadow: snapshot.isDragging
                                                        ? '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                                                        : 'none',
                                                    fontSize: "var(--toolbar-labels-font-size)",
                                                }}
                                            >
                                                {item.content}
                                            </CustomCard>
                                        </div>
                                    )}
                                </Draggable>
                            ))
                        )}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </CustomCol>
    );

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <CustomRow gutter={16} style={{ margin: '24px 0' }}>
                {renderColumn('disponibles', availableTitle, available)}
                {renderColumn('seleccionados', selectedTitle, selected)}
            </CustomRow>
        </DragDropContext>
    );
};

export default CustomDragAndDrop;