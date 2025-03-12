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
}

const Calendar = ({ value, onChange }: Props) => {
    return (
        <>
            <div className="flex justify-center items-center">
                <CalendarPrime
                    value={value}
                    onChange={(e) => onChange(e.value as Date | null)}
                    locale="es"
                    showIcon
                    className="w-full"
                />
            </div>
        </>
    )
}

export default Calendar;
