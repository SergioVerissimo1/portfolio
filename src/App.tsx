import { ConfigProvider } from "antd";
import "./App.css";
import NavBar from "./components/Navbar/Navbar";
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container, Engine } from "@tsparticles/engine";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
import Background from "./components/Background/Background";
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

const App = () => {
  return (
    <>
      <Background content={<></>} />
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
            },
          },
        }}
      >
        <NavBar />
      </ConfigProvider>
    </>
  );
};

export default App;
