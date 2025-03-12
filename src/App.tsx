import { PageLayout } from "./components/PageLayout";
import CalendarExample from "./examples/Calendar";
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
