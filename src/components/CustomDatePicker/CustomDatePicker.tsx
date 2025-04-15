import React from "react";
import { DatePicker as AntDatePicker, DatePickerProps as AntDatePickerProps } from "antd";

export interface CustomDatePickerProps extends AntDatePickerProps {
  /**
   * Formato de la fecha
   */
  format?: string;

  /**
   * Placeholder personalizado
   */
  placeholder?: string;
}

const CustomDatePicker: React.FC<CustomDatePickerProps> & {
  RangePicker: typeof AntDatePicker.RangePicker;
} = ({ format = "YYYY-MM-DD", placeholder = "Selecciona una fecha", ...rest }) => {
  return <AntDatePicker {...rest} format={format} placeholder={placeholder} />;
};

// Exponer RangePicker como parte de CustomDatePicker
CustomDatePicker.RangePicker = AntDatePicker.RangePicker;

export default CustomDatePicker;