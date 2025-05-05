import Layout from "./examples/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PoliciesScreen from "./examples/PoliciesScreen";
// import CreatePolicyScreen from "./examples/CreatePolicyScreen";
// import RFCCreate from "./examples/CreateChange";
import { ConfigProvider } from "antd";

import "@fortawesome/fontawesome-free/css/all.min.css";

const App = () => {
  return (
    <ConfigProvider theme={{
      token: {
        fontSize: 12,
        controlHeight: 32,      // ajusta la altura de inputs/selects
        lineHeight: 1.5,
      },
    }}>
    <Layout>
      {/* <RegionConfigurationScreen /> */}
      <Router>
        <Routes>
          <Route path="/" element={<PoliciesScreen />} />
          {/* <Route path="/create-policy" element={<CreatePolicyScreen />} /> */}
        </Routes>
      </Router>
    </Layout>
    </ConfigProvider>
  );
};

export default App;
