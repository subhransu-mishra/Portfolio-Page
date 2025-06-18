import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Service from "./Components/Service/Service";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Education from "./Components/Education/Education";
import Experience from "./Components/Experience/Experience";



function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Education />
      <Skills />
      <Experience/>
      <Projects />
      <Service />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
