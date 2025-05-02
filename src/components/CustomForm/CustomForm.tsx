import React from "react";
import { Form, FormProps, FormItemProps } from "antd";

export interface CustomFormProps<Values = any> extends Omit<FormProps<Values>, "children"> {
  children?: React.ReactNode | ((form: any) => React.ReactNode); // Ajustar el tipo de children
}

export interface CustomFormItemProps extends FormItemProps {
  label?: string; // Etiqueta opcional
}

const CustomForm: React.FC<CustomFormProps> & { 
  Item: React.FC<CustomFormItemProps>; 
  useForm: typeof Form.useForm; 
} = (props) => {
  return (
    <Form {...props}>
      {typeof props.children === "function" ? props.children(Form.useForm()[0]) : props.children}
    </Form>
  ); // Pasar children correctamente
};

// Exponer Form.Item como CustomForm.Item
CustomForm.Item = (props) => <Form.Item {...props} />;

// Exponer Form.useForm como CustomForm.useForm
CustomForm.useForm = Form.useForm;

export default CustomForm;