import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Teckstack from "./pages/Techstack/Teckstack";

function App() {
  return (
    <>
      <Layout />
      <div className="container">
        <About />
        <Teckstack />
        <Projects />
      </div>
    </>
  );
}

export default App;
