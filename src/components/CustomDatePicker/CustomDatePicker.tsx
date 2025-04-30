import React from "react";
import {
  DatePicker as AntDatePicker,
  DatePickerProps as AntDatePickerProps,
} from "antd";
import type { RangePickerProps } from "antd/es/date-picker";
import localeEs from "antd/es/date-picker/locale/es_ES";
import localeEn from "antd/es/date-picker/locale/en_US";
import localePt from "antd/es/date-picker/locale/pt_BR";

export interface CustomDatePickerProps extends AntDatePickerProps {
  localeCode?: "es" | "en" | "pt";
}
export interface CustomRangePickerProps extends RangePickerProps {
  localeCode?: "es" | "en" | "pt";
}

const localeMap = { es: localeEs, en: localeEn, pt: localePt };

// 1) DatePicker
const InnerDatePicker = React.forwardRef<any, CustomDatePickerProps>(
  ({ localeCode = "es", ...props }, ref) => {
    const pickerLocale = localeMap[localeCode];
    return <AntDatePicker ref={ref} {...props} locale={pickerLocale} />;
  }
);
InnerDatePicker.displayName = "CustomDatePicker";

// 2) RangePicker con tipo correcto
const InnerRangePicker = React.forwardRef<any, CustomRangePickerProps>(
  ({ localeCode = "es", ...props }, ref) => {
    const pickerLocale = localeMap[localeCode];
    return <AntDatePicker.RangePicker ref={ref} {...props} locale={pickerLocale} />;
  }
);
InnerRangePicker.displayName = "CustomDatePicker.RangePicker";

// 3) Combinar en un único export
type DatePickerType = typeof InnerDatePicker & {
  RangePicker: typeof InnerRangePicker;
};
const CustomDatePicker = InnerDatePicker as DatePickerType;
CustomDatePicker.RangePicker = InnerRangePicker;

export default CustomDatePicker;