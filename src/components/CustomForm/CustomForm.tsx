import React from "react";
import { Form, FormProps, FormItemProps } from "antd";

export interface CustomFormProps<Values = any> extends Omit<FormProps<Values>, "children"> {
  children?: React.ReactNode | ((form: ReturnType<typeof Form.useForm>[0]) => React.ReactNode);
}

export interface CustomFormItemProps extends FormItemProps {
  label?: string; // Etiqueta opcional
}

const CustomForm: React.FC<CustomFormProps> & { 
  Item: React.FC<CustomFormItemProps>; 
  useForm: typeof Form.useForm; 
} = (props) => {
  const [internalForm] = Form.useForm();
  const form = props.form || internalForm;

  return (
    <Form form={form} {...props}>
      {typeof props.children === "function" ? props.children(form) : props.children}
    </Form>
  );
};

// Exponer Form.Item como CustomForm.Item
CustomForm.Item = (props) => <Form.Item {...props} />;

// Exponer Form.useForm como CustomForm.useForm
CustomForm.useForm = Form.useForm;

export default CustomForm;