import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import CustomCalendar, { CalendarEvent } from "../../components/CustomCalendar/CustomCalendar";

const initialEvents: CalendarEvent[] = [
  {
    date: dayjs("2025-05-21"),
    title: "Reunión de equipo",
    description: "Revisar avances del sprint actual",
    color: "#1890ff",
  },
  {
    date: dayjs("2025-05-23"),
    title: "Presentación cliente",
    description: "Demo mensual para el cliente",
    color: "#52c41a",
  },
];



const ExampleCustomCalendar = () => {
  const [events, setEvents] = useState<CalendarEvent[]>(initialEvents);
  const handleAddEvent = (date: Dayjs) => {
    const title = prompt("Título del evento:");
    if (title) {
      setEvents([
        ...events,
        {
          date,
          title,
          description: "",
          color: "#faad14",
        },
      ]);
    }
  };
  return (
    <div style={{ maxWidth: '100%', margin: "0 auto" }}>
      <h2>Ejemplo de CustomCalendar con eventos</h2>
      <CustomCalendar events={events} onAddEvent={handleAddEvent} />
    </div>
  )
}

export default ExampleCustomCalendar