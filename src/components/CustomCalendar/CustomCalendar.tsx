import React from "react";
import FullCalendar from "@fullcalendar/react";
import { EventContentArg, EventClickArg, EventInput, DateSelectArg, } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import "./customCalendarStyles.css";
import esLocale from '@fullcalendar/core/locales/es';
import enLocale from '@fullcalendar/core/locales/en-gb';
import ptLocale from '@fullcalendar/core/locales/pt-br';

const localeMap = {
    es: esLocale,
    en: enLocale,
    pt: ptLocale,
};


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
    renderEventContent?: (eventContent: EventContentArg) => React.ReactNode;
    localeCode?: "es" | "en" | "pt";
}

const CustomCalendar: React.FC<CustomCalendarProps> = ({
    events,
    initialView = "dayGridMonth",
    height = 600,
    selectable = true,
    editable = false,
    onEventClick,
    onDateSelect,
    renderEventContent,
    localeCode = "es"
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
    function defaultRenderEventContent(eventContent: EventContentArg) {
        return (
            <div>
                <b>{eventContent.timeText}</b> <span>{eventContent.event.title}</span>
            </div>
        );
    }

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                flexWrap: "nowrap",
                padding: "8px 12px",
                background: "#fff",
                border: "1px solid #e0e0e0",
                borderRadius: 6,
                marginBottom: 12,
                width: "100%",
                minHeight: "100vh",
                boxSizing: "border-box",
            }}
        >
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
                eventContent={renderEventContent ?? defaultRenderEventContent}
                eventClick={handleEventClick}
                select={handleDateSelect}
                locale={localeMap[localeCode || "es"]}
            />
        </div>
    );
};

export default CustomCalendar;