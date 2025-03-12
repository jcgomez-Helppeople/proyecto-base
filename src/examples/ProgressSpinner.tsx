import { useState } from "react";
import ProgressSpinner from "../components/ProgressSpinner";
import { Button } from "primereact/button";

const ProgressSpinnerExample = () => {
    const [loading, setLoading] = useState(false);

    const toggleLoading = () => {
        setLoading(true);
        setTimeout(() => setLoading(false), 13000); // Simula carga por 3 segundos
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen gap-4">
            <ProgressSpinner loading={loading} width="100px" height="100px" />
            <Button label="Cargar" onClick={toggleLoading} />
        </div>
    );
};

export default ProgressSpinnerExample;
