interface Props {
    value: Date | null;
    onChange: (date: Date | null) => void;
    label?: string;
}
declare const Calendar: ({ value, onChange, label }: Props) => import("react/jsx-runtime").JSX.Element;
export default Calendar;
