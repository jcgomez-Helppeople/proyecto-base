import CustomToolbar from "./components/CustomToolbar";
import { PageLayout } from "./components/PageLayout";
import { DataTableExample } from "./examples/DataTable";

function App() {

  return (
    <>
      <PageLayout
        title="Cambios"
        buttonBack
      >
        <CustomToolbar onFilter={()=>{}} />
        <DataTableExample />
      </PageLayout>
    </>
  );
}

export default App;
