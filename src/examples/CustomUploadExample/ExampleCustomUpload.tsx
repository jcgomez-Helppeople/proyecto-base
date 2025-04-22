import CustomUpload from "../../components/CustomUpload/CustomUpload";

const ExampleCustomUpload = () => {
  const handleUploadChange = (info: any) => {
    if (info.file.status === "done") {
      console.log(`${info.file.name} se ha subido correctamente.`);
    } else if (info.file.status === "error") {
      console.error(`${info.file.name} falló al subir.`);
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Prueba de CustomUpload</h1>

      <h2>Subida Básica</h2>
      <CustomUpload
        action="https://jsonplaceholder.typicode.com/posts/"
        onChange={handleUploadChange}
        buttonText="Subir Archivo"
      />

      <h2>Subida Múltiple</h2>
      <CustomUpload
        action="https://jsonplaceholder.typicode.com/posts/"
        onChange={handleUploadChange}
        multiple
        buttonText="Subir Archivos"
      />
    </div>
  );
};

export default ExampleCustomUpload;