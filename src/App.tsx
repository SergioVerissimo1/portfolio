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
      components: {
        Anchor: {
          colorBgTextActive: "white",
          colorBgTextHover: "white",
        }
      }
    }}
  >
    <NavBar />
  </ConfigProvider>
);
export default App;
