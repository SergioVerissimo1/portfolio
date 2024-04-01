import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Navbar/Navbar";
import Background from "./components/Background/Background";
import HomePage from "./pages/HomePage/HomePage";
import ContactPage from "./pages/ContactPage/ContactPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ExperiencePage from "./pages/ExperiencePage/ExperiencePage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";

const App = () => {
  return (
    <div className="App">
      <Background />
      <NavBar />
      <HomePage />
      <AboutPage />
      <ExperiencePage />
      <ProjectsPage />
      <ContactPage />
    </div>
  );
};

export default App;
