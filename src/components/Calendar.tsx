import { Calendar as CalendarPrime } from 'primereact/calendar';
import { addLocale } from "primereact/api";

addLocale("es", {
    firstDayOfWeek: 1,
    dayNames: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
    dayNamesShort: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"],
    dayNamesMin: ["D", "L", "M", "X", "J", "V", "S"],
    monthNames: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
    monthNamesShort: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
    today: "Hoy",
    clear: "Limpiar"
});

interface Props {
    value: Date | null;
    onChange: (date: Date | null) => void;
    label?: string;
}

const Calendar = ({ value, onChange, label }: Props) => {
    return (
        <>
            <div className="w-full">
                {
                    label && (
                        <label className="block text-gray-700 font-semibold mb-1 text-base" htmlFor="priority-select">
                            {label}
                        </label>
                    )
                }
                <CalendarPrime
                    value={value}
                    onChange={(e) => onChange(e.value as Date | null)}
                    locale="es"
                    showIcon
                    className="w-full shadow-md"
                />
            </div>
        </>
    )
}

export default Calendar;
