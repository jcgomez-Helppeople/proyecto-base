import { PageLayout } from "./components/PageLayout";
import { DataTableExample } from "./examples/DataTable";

function App() {

  return (
    <>
      <PageLayout
        title="Cambios"
        buttonBack
      >
        <DataTableExample />
      </PageLayout>
    </>
  );
}

export default App;
