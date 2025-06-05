import React from "react";
import { EventContentArg } from "@fullcalendar/core";
import "./customCalendarStyles.css";
export interface CustomCalendarEvent {
    id?: string;
    title: string;
    start: string | Date;
    end?: string | Date;
    allDay?: boolean;
}
export interface CustomCalendarProps {
    events: CustomCalendarEvent[];
    initialView?: "dayGridMonth" | "timeGridWeek" | "timeGridDay";
    height?: string | number;
    selectable?: boolean;
    editable?: boolean;
    onEventClick?: (event: CustomCalendarEvent) => void;
    onDateSelect?: (selectInfo: {
        start: Date;
        end: Date;
        allDay: boolean;
    }) => void;
    renderEventContent?: (eventContent: EventContentArg) => React.ReactNode;
    localeCode?: "es" | "en" | "pt";
}
declare const CustomCalendar: React.FC<CustomCalendarProps>;
export default CustomCalendar;
