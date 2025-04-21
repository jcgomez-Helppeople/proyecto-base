import Layout from "./examples/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PoliciesScreen from "./examples/PoliciesScreen";
import CreatePolicyScreen from "./examples/CreatePolicyScreen";
import ConfigurationScreen from "./examples/ConfigurationScreen";
import RegionConfigurationScreen from "./examples/RegionConfigurationScreen";

import "@fortawesome/fontawesome-free/css/all.min.css";

const App = () => {
  return (
    <Layout>
      {/* <RegionConfigurationScreen /> */}
      <Router>
        <Routes>
          <Route path="/" element={<PoliciesScreen />} />
          <Route path="/create-policy" element={<CreatePolicyScreen />} />
        </Routes>
      </Router>
    </Layout>
  );
};

export default App;
