import React from "react";
import { DatePicker, DatePickerProps } from "antd";

export interface CustomCalendarProps extends DatePickerProps {
  /**
   * Tamaño del calendario (small, large, default).
   */
  size?: "small" | "large" | undefined; // Ajustamos los valores permitidos
}

// Declaramos el componente como un tipo extendido
const CustomCalendar: React.FC<CustomCalendarProps> & {
  RangePicker: typeof DatePicker.RangePicker;
} = ({ size, ...rest }) => {
  return <DatePicker {...rest} size={size} />;
};

// Exponer RangePicker como parte de CustomCalendar
CustomCalendar.RangePicker = DatePicker.RangePicker;

export default CustomCalendar;