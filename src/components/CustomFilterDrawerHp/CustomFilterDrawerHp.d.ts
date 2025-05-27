import React from "react";
interface CustomFilterDrawerHpProps {
    visible: boolean;
    title: string;
    filters: Record<string, any>;
    onChange: (key: string, value: any) => void;
    onClose: () => void;
    onSubmit: () => void;
    onClear: () => void;
    children: (utils: {
        filters: Record<string, any>;
        onChange: (key: string, value: any) => void;
    }) => React.ReactNode;
    loading?: boolean;
}
declare const CustomFilterDrawerHp: React.FC<CustomFilterDrawerHpProps>;
export default CustomFilterDrawerHp;
