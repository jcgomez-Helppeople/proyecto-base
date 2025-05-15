import { Calendar, CalendarProps } from "antd"

interface DataType {
  RFC_COD: number
  SOL_TITULO: string
  SOL_FECHA: string
  SOL_FECHA_VENCI: string
}

const ExampleCustomCalendar = () => {
  const eventsRfc: DataType[] = [
    {
      "RFC_COD": 2747,
      "SOL_TITULO": "Juan mas 2Adjuntos",
      "SOL_FECHA": "2025-04-02T00:58:37.000Z",
      "SOL_FECHA_VENCI": "2025-04-05T13:00:00.000Z"
    },
    {
      "RFC_COD": 2752,
      "SOL_TITULO": "Juan mas 2Adjuntos",
      "SOL_FECHA": "2025-04-02T07:55:00.000Z",
      "SOL_FECHA_VENCI": "2025-04-05T13:00:00.000Z"
    },
    {
      "RFC_COD": 2917,
      "SOL_TITULO": "Juan mas 2Adjuntos",
      "SOL_FECHA": "2025-04-23T22:06:11.000Z",
      "SOL_FECHA_VENCI": "2025-04-27T18:00:00.000Z"
    },
    {
      "RFC_COD": 2936,
      "SOL_TITULO": "Juan mas 2Adjuntos",
      "SOL_FECHA": "2025-04-24T14:22:40.000Z",
      "SOL_FECHA_VENCI": "2025-04-27T18:00:00.000Z"
    }
  ]
  const onPanelChange = (value: any, mode: CalendarProps<any>['mode']) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Prueba de CustomCalendar</h1>
      <Calendar onPanelChange={onPanelChange} />
    </div>
  )
}

export default ExampleCustomCalendar