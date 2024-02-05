import { ConfigProvider } from "antd";
import "./App.css";
import NavBar from "./components/Navbar/Navbar";

const App = () => (
  <ConfigProvider
    theme={{
      token: {
        // Seed Token

        colorText: "white",
        fontSize: 24,
      },
    }}
  >
    <NavBar />
  </ConfigProvider>
);
export default App;
