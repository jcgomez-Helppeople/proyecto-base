import React from "react";
import FullCalendar from "@fullcalendar/react";
import { EventContentArg, EventClickArg, EventInput, DateSelectArg, } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import "./customCalendarStyles.css";

// Tipo para los eventos personalizados
export interface CustomCalendarEvent {
    id?: string;
    title: string;
    start: string | Date; // ISO string o Date
    end?: string | Date;
    allDay?: boolean;
    // Puedes agregar otros campos según tus necesidades
}

export interface CustomCalendarProps {
    events: CustomCalendarEvent[];
    initialView?: "dayGridMonth" | "timeGridWeek" | "timeGridDay";
    height?: string | number;
    selectable?: boolean;
    editable?: boolean;
    onEventClick?: (event: CustomCalendarEvent) => void;
    onDateSelect?: (selectInfo: { start: Date; end: Date; allDay: boolean }) => void;
    // Otros props personalizados si los necesitas
}

const CustomCalendar: React.FC<CustomCalendarProps> = ({
    events,
    initialView = "dayGridMonth",
    height = 600,
    selectable = true,
    editable = false,
    onEventClick,
    onDateSelect,
}) => {
    // Adaptar eventos para FullCalendar (no requiere cambios si ya tienes el formato adecuado)
    const calendarEvents: EventInput[] = events;

    function handleEventClick(clickInfo: EventClickArg) {
        if (onEventClick) {
            // clickInfo.event contiene todos los datos del evento de FullCalendar
            onEventClick({
                id: clickInfo.event.id,
                title: clickInfo.event.title,
                start: clickInfo.event.start!,
                end: clickInfo.event.end ?? undefined,
                allDay: clickInfo.event.allDay,
            });
        }
    }

    function handleDateSelect(selectInfo: DateSelectArg) {
        if (onDateSelect) {
            onDateSelect({
                start: selectInfo.start,
                end: selectInfo.end,
                allDay: selectInfo.allDay,
            });
        }
    }

    // Puedes customizar cómo se muestra cada evento
    function renderEventContent(eventContent: EventContentArg) {
        return (
            <div>
                <b>{eventContent.timeText}</b> <span>{eventContent.event.title}</span>
            </div>
        );
    }

    return (
        <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView={initialView}
            headerToolbar={{
                left: "prev,next today",
                center: "title",
                right: "dayGridMonth,timeGridWeek,timeGridDay",
            }}
            height={height}
            selectable={selectable}
            editable={editable}
            events={calendarEvents}
            eventContent={renderEventContent}
            eventClick={handleEventClick}
            select={handleDateSelect}
        />
    );
};

export default CustomCalendar;