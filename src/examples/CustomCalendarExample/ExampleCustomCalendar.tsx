import React, { useState } from "react";
import CustomCalendar from "../../components/CustomCalendar/CustomCalendar";

const ExampleCustomCalendar = () => {
  const [date, setDate] = useState(null);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Prueba de CustomCalendar - Ant Design</h1>

      <h2>Modo Básico</h2>
      <CustomCalendar value={date} onChange={(value) => setDate(value)} />

      <h2>Selección de Rango</h2>
      <CustomCalendar.RangePicker onChange={(value) => console.log(value)} />
    </div>
  );
};

export default ExampleCustomCalendar;