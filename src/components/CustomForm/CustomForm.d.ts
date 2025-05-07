import React from "react";
import { Form, FormProps, FormItemProps } from "antd";
export interface CustomFormProps<Values = any> extends Omit<FormProps<Values>, "children"> {
    children?: React.ReactNode | ((form: ReturnType<typeof Form.useForm>[0]) => React.ReactNode);
}
export interface CustomFormItemProps extends FormItemProps {
    label?: string;
}
declare const CustomForm: React.FC<CustomFormProps> & {
    Item: React.FC<CustomFormItemProps>;
    useForm: typeof Form.useForm;
};
export default CustomForm;
