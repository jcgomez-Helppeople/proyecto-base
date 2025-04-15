import { useState } from "react";
import CustomDatePicker from "../../components/CustomDatePicker/CustomDatePicker";
import { Dayjs } from "dayjs";

const ExampleCustomDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
  const [selectedRange, setSelectedRange] = useState<[Dayjs | null, Dayjs | null] | null>(null);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Prueba de CustomDatePicker</h1>

      <h2>Selector de Fecha</h2>
      <CustomDatePicker
        value={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        placeholder="Selecciona una fecha"
      />

      <h2>Selector de Rango de Fechas</h2>
      <CustomDatePicker.RangePicker
        value={selectedRange}
        onChange={(dates) => setSelectedRange(dates)}
        placeholder={["Fecha inicio", "Fecha fin"]}
      />
    </div>
  );
};

export default ExampleCustomDatePicker;