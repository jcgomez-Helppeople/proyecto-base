import { FC, useState } from "react";
import { Dialog as DialogPrime } from "primereact/dialog";
import { Button } from "primereact/button";

type Props = {
    title: string;
    content: string;
};

const Dialog: FC<Props> = ({ title, content }) => {
    const [visible, setVisible] = useState(false);

    return (
        <div className="flex flex-col items-center justify-cente">
            <Button label="Mostrar Diálogo" onClick={() => setVisible(true)} className="mb-4" />
            <DialogPrime
                header={title}
                visible={visible}
                onHide={() => setVisible(false)}
                className="w-96">
                <p className="text-gray-700">{content}</p>
            </DialogPrime>
        </div>
    );
};

export default Dialog;
