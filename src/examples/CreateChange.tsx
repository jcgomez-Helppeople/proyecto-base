import React from 'react';
import { Tabs, Card, Form, Row, Col, Select, Input, Checkbox, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const { TabPane } = Tabs;
const { TextArea } = Input;

const ChangeRequestForm: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Form values:', values);
  };

  return (
    <Tabs defaultActiveKey="1" type="card">
      <TabPane tab="Datos Generales" key="1">
        <Card bordered={false} style={{ marginBottom: 24 }}>
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            initialValues={{
              impacto: 'Media',
              urgencia: 'Media',
              prioridad: 'Media',
              sla: 'Por defecto',
            }}
          >
            <Row gutter={16}>
              <Col xs={24} sm={12}>
                <Form.Item
                  name="aNombreDe"
                  label="A nombre de"
                  rules={[{ required: true, message: 'Selecciona un solicitante' }]}
                >
                  <Select
                    placeholder="Selecciona usuario"
                    suffixIcon={<DownOutlined style={{ fontSize: "var(--toolbar-labels-font-size)", color: '#999' }} />}
                    options={[{ value: 'pablo', label: 'Pablo…' }]}
                  />
                </Form.Item>
              </Col>

              <Col xs={24} sm={12}>
                <Form.Item
                  name="liderDeCambio"
                  label="Líder de Cambio"
                  rules={[{ required: true, message: 'Ingresa el líder' }]}
                >
                  <Input placeholder="Nombre del líder" />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col xs={24} sm={12}>
                <Form.Item
                  name="descripcion"
                  label="Descripción"
                  rules={[{ required: true, message: 'Escribe una descripción' }]}
                >
                  <TextArea rows={4} placeholder="Describe el cambio solicitado" />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col xs={24} sm={12}>
                <Form.Item
                  name="asuntoServicio"
                  label="Asunto del servicio"
                  rules={[{ required: true, message: 'Ingresa el asunto' }]}
                >
                  <Input placeholder="Asunto específico del servicio" />
                </Form.Item>
              </Col>

              <Col xs={24} sm={12}>
                <Form.Item
                  name="via"
                  label="Vía"
                  rules={[{ required: true, message: 'Selecciona una vía' }]}
                >
                  <Select placeholder="helppeople">
                    <Select.Option value="helppeople">helppeople</Select.Option>
                    {/* Otras vías... */}
                  </Select>
                </Form.Item>
              </Col>
            </Row>

            <Form.Item name="guardarPlantilla" valuePropName="checked">
              <Checkbox>Seleccionar plantilla</Checkbox>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Guardar Plantilla
              </Button>
            </Form.Item>
          </Form>
        </Card>

        <Card title="Datos Orden de Servicio" bordered={false}>
          <Form layout="vertical">
            <Row gutter={16}>
              <Col xs={24} sm={12} md={8}>
                <Form.Item name="areaServicio" label="Área de Servicio">
                  <Select placeholder="Selecciona área">
                    <Select.Option value="area1">Área Servicio</Select.Option>
                    {/* … */}
                  </Select>
                </Form.Item>
              </Col>
              <Col xs={24} sm={12} md={8}>
                <Form.Item name="servicio" label="Servicio">
                  <Select placeholder="Selecciona servicio">
                    <Select.Option value="serv1">Servicio 1</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col xs={24} sm={12} md={8}>
                <Form.Item name="categoria" label="Categoría">
                  <Select placeholder="Selecciona categoría">
                    <Select.Option value="cat1">Categoría 1</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col xs={24} sm={12} md={8}>
                <Form.Item name="actividad" label="Actividad">
                  <Select placeholder="Selecciona actividad">
                    <Select.Option value="act1">Actividad 1</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col xs={24} sm={12} md={8}>
                <Form.Item name="grupo" label="Grupo">
                  <Select placeholder="Selecciona grupo">
                    <Select.Option value="grp1">Grupo 1</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col xs={24} sm={12} md={8}>
                <Form.Item name="responsable" label="Responsable">
                  <Select placeholder="Selecciona responsable">
                    <Select.Option value="res1">Responsable 1</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col xs={24} sm={12} md={6}>
                <Form.Item name="impacto" label="Impacto">
                  <Select>
                    <Select.Option value="Alta">Alta</Select.Option>
                    <Select.Option value="Media">Media</Select.Option>
                    <Select.Option value="Baja">Baja</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col xs={24} sm={12} md={6}>
                <Form.Item name="urgencia" label="Urgencia">
                  <Select>
                    <Select.Option value="Alta">Alta</Select.Option>
                    <Select.Option value="Media">Media</Select.Option>
                    <Select.Option value="Baja">Baja</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col xs={24} sm={12} md={6}>
                <Form.Item name="prioridad" label="Prioridad">
                  <Select>
                    <Select.Option value="Alta">Alta</Select.Option>
                    <Select.Option value="Media">Media</Select.Option>
                    <Select.Option value="Baja">Baja</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col xs={24} sm={12} md={6}>
                <Form.Item name="sla" label="SLA">
                  <Select>
                    <Select.Option value="Por defecto">Por defecto</Select.Option>
                    {/* … */}
                  </Select>
                </Form.Item>
              </Col>
            </Row>

            <Form.Item>
              <Button type="primary">Enviar Solicitud</Button>
            </Form.Item>
          </Form>
        </Card>
      </TabPane>

      {/* Podrías agregar más TabPane aquí para otras pestañas como RFC, Autorización… */}
    </Tabs>
  );
};

export default ChangeRequestForm;
