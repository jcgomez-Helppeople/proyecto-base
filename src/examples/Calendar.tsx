import { useState } from "react";
import Calendar from "../components/Calendar";

const CalendarExample = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return <Calendar value={selectedDate} onChange={setSelectedDate} />;
};

export default CalendarExample;