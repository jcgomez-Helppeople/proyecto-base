import Calendar from "../components/Calendar"
import Checkbox from "../components/Checkbox"
import Chips from "../components/Chips"
import { PageLayout } from "../components/PageLayout"
import CustomFileUpload from "../components/CustomFileUpload"
import CustomInputPassword from "../components/CustomInputPassword"
import CustomInputSwitch from "../components/CustomInputSwitch"
import CustomInputText from "../components/CustomInputText"
import CustomInputTextarea from "../components/CustomInputTextarea"
import CustomRadioButton from "../components/CustomRadioButton"
import CustomTabView from "../components/CustomTabView"
import Dropdown from "../components/Dropdown"
import InputNumber from "../components/InputNumber"
import InputOtp from "../components/InputOtp"
import Toast from "../components/Toast"
import { useState } from "react"
import CustomButton from "../components/CustomButton/CustomButton"

export const CrearPage = () => {
    const [tags, setTags] = useState<string[]>([]);

    const [showToast, setShowToast] = useState(false);

    const handleShowToast = () => {
        setShowToast(true);
        setTimeout(() => setShowToast(false), 1000);
    };

    return (
        <PageLayout
            title="Nuevo Cambio"
            buttonBack
        >
            <CustomTabView header="Datos Generales">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <div className="flex justify-start items-start">
                        <Calendar label="Fecha de inicio" onChange={() => { }} value={null} />
                    </div>
                    <div className="flex justify-start items-start">
                        <Chips label="Correos" onChange={setTags} value={tags} />
                    </div>
                    <div className="flex justify-center items-end">
                        <CustomInputPassword label="Password" />
                    </div>
                    <div className="flex justify-center items-end">
                        <CustomInputText label="Nombre" onChange={() => { }} />
                    </div>
                    <div className="flex justify-center items-end">
                        <CustomInputTextarea label="Descripción" onChange={() => { }} />
                    </div>
                    <div className="flex justify-start items-end">
                        <Dropdown label="Criticidad" value={null} onChange={(value) => { console.log(value) }} options={[{ label: "Opción 1", value: "1" }, { label: "Opción 2", value: "2" }]} />
                    </div>
                    <div className="flex justify-start items-end">
                        <InputNumber label="Precio" value={null} onChange={(value) => { console.log(value) }} />
                    </div>
                    <div className="flex justify-center items-end">
                        <InputOtp value="1285" onChange={(value) => { console.log(value) }} length={4} />
                    </div>
                    <div className="flex justify-center items-end">
                        <Checkbox label="Es urgente" checked={true} onChange={() => { }} />
                    </div>
                    <div className="flex justify-center items-end">
                        <CustomInputSwitch label="Acepta los Terminos?" checked={true} onChange={() => { }} />
                    </div>
                    <div className="flex justify-center items-end">
                        <CustomRadioButton label="Permiso" onChange={() => { }} checked={true} />
                        <CustomRadioButton onChange={() => { }} checked={false} className="ml-2" />
                    </div>
                    <div className="flex justify-center items-end">
                        <CustomFileUpload />
                    </div>
                </div>
                <Toast
                    messages={[
                        { severity: "success", summary: "Éxito", detail: "Operación completada correctamente" },
                        { severity: "info", summary: "Información", detail: "Este es un mensaje informativo" },
                        { severity: "warn", summary: "Precaución", detail: "Este es un mensaje de precaución" },
                        { severity: "error", summary: "Error", detail: "Este es un mensaje de error" },
                    ]}
                    trigger={showToast}
                />
                <CustomButton label="Guardar" onClick={handleShowToast} />
            </CustomTabView>
        </PageLayout>
    )
}
