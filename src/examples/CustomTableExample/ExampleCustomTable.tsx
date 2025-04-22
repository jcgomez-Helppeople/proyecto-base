import CustomTable from "../../components/CustomTable/CustomTable";

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
}

const ExampleCustomTable = () => {
  const columns = [
    {
      title: "Nombre",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Edad",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Dirección",
      dataIndex: "address",
      key: "address",
    },
  ];

  const data: DataType[] = [
    {
      key: "1",
      name: "Juan Pérez",
      age: 32,
      address: "Calle Falsa 123",
    },
    {
      key: "2",
      name: "María López",
      age: 28,
      address: "Avenida Siempre Viva 742",
    },
    {
      key: "3",
      name: "Carlos García",
      age: 45,
      address: "Boulevard Principal 456",
    },
  ];

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Prueba de CustomTable</h1>

      <CustomTable
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
};

export default ExampleCustomTable;