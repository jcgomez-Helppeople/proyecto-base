import React from "react";
import { Calendar as AntCalendar, CalendarProps as AntCalendarProps, Badge } from "antd";
import { Dayjs } from "dayjs";

/**
 * Definición de un evento del calendario usando Date
 */
export interface CalendarEvent {
    date: Dayjs;
    title: string;
    description?: string;
    color?: string;
}

export interface CustomCalendarProps extends Omit<AntCalendarProps<Dayjs>, "dateCellRender" | "onSelect"> {
    /**
     * Eventos a mostrar en el calendario
     */
    events?: CalendarEvent[];

    /**
     * Callback opcional para agregar un evento al seleccionar una fecha
     */
    onAddEvent?: (date: Dayjs) => void;

    /**
    * Si es true, permite agregar eventos haciendo click en un día
    */
    allowAddEvent?: boolean;
}

const isSameDay = (d1: Dayjs, d2: Dayjs) => d1.isSame(d2, "day");
const CustomCalendar: React.FC<CustomCalendarProps> = ({
    events = [],
    onAddEvent,
    allowAddEvent = false,
    ...rest
}) => {
    const dateCellRender = (date: Dayjs) => {
        const dayEvents = events.filter(event => isSameDay(event.date, date));
        return (
            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                {dayEvents.map((event, idx) => (
                    <li key={idx}>
                        <Badge color={event.color || "blue"} text={event.title} />
                    </li>
                ))}
            </ul>
        );
    };

    const handleSelect = allowAddEvent && onAddEvent
        ? (date: Dayjs) => onAddEvent(date)
        : undefined;

    return (
        <div
            style={{
                display: "flex",
                flexWrap: "wrap", // Permitir que los elementos se ajusten en pantallas pequeñas
                justifyContent: "space-between",
                alignItems: "center",
                gap: "1rem", // Espaciado entre elementos
                padding: "1rem 1.5rem",
                backgroundColor: "#ffffff", // Fondo blanco
                borderBottom: "1px solid #e0e0e0", // Borde inferior sutil
                marginBottom: "1rem"
            }}
        >
            <AntCalendar
                dateCellRender={dateCellRender}
                onSelect={handleSelect}
                {...rest}
            />
        </div>
    );
};

export default CustomCalendar;