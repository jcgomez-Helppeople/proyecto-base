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
declare const CustomDatePicker: React.FC<CustomDatePickerProps> & {
    RangePicker: typeof AntDatePicker.RangePicker;
};
export default CustomDatePicker;
