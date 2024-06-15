import "./App.css";
import Layout from "./components/Layout/Layout";
import { useTheme } from "./context/ThemeContext";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Education from "./pages/Education/Education";
import Projects from "./pages/Projects/Projects";
import Teckstack from "./pages/Techstack/Teckstack";
import WorkExp from "./pages/workExp/workExp";
import ScrollToTop from "react-scroll-to-top";
// import { useTheme } from "./context/ThemeContext";

function App() {
  const [theme] = useTheme();
  return (
    <>
      <div id={theme}>
        <Layout />

        <div className="container">
          <Projects />
          <WorkExp />
          <Teckstack />
          <Education />
          <About />
          <Contact />
        </div>

        <div className="footer">
          <h4 className="text-center mb-0">
            Developed by 🤍Babul &copy; {new Date().getFullYear()}
          </h4>
        </div>
      </div>
      <ScrollToTop
        smooth
        style={{ backgroundColor: "#0a66c2", borderRadius: "80px" }}
      />
    </>
  );
}

export default App;
