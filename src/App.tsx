import Layout from "./examples/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PoliciesScreen from "./examples/PoliciesScreen";
import CreatePolicyScreen from "./examples/CreatePolicyScreen";
// import RFCCreate from "./examples/CreateChange";
import { ConfigProvider } from "antd";
import LibraryThemeProvider  from "./theme/LibraryThemeProvider";

import "@fortawesome/fontawesome-free/css/all.min.css";

const App = () => {
  return (
    <LibraryThemeProvider>
    <Layout>
      {/* <RegionConfigurationScreen /> */}
      <Router>
        <Routes>
          <Route path="/" element={<PoliciesScreen />} />
          <Route path="/create-policy" element={<CreatePolicyScreen />} />
        </Routes>
      </Router>
    </Layout>
    </LibraryThemeProvider>
  );
};

export default App;
