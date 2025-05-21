import React from "react";
import { CalendarProps as AntCalendarProps } from "antd";
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
declare const CustomCalendar: React.FC<CustomCalendarProps>;
export default CustomCalendar;
