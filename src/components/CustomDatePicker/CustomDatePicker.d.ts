import React from "react";
import { DatePickerProps as AntDatePickerProps } from "antd";
import type { RangePickerProps } from "antd/es/date-picker";
export interface CustomDatePickerProps extends AntDatePickerProps {
    localeCode?: "es" | "en" | "pt";
}
export interface CustomRangePickerProps extends RangePickerProps {
    localeCode?: "es" | "en" | "pt";
}
declare const InnerDatePicker: React.ForwardRefExoticComponent<Omit<CustomDatePickerProps, "ref"> & React.RefAttributes<any>>;
declare const InnerRangePicker: React.ForwardRefExoticComponent<CustomRangePickerProps & React.RefAttributes<any>>;
type DatePickerType = typeof InnerDatePicker & {
    RangePicker: typeof InnerRangePicker;
};
declare const CustomDatePicker: DatePickerType;
export default CustomDatePicker;
