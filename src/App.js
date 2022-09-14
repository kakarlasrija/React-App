import "./App.css";
import FooterCmp from "./Layout/FooterCmp";
import HeaderCmp from "./Layout/HeaderCmp";
import Skills from "./Details/Skills";
import Projects from "./Details/Projects";
import Testimonials from "./Details/Testimonials";
import About from "./Details/About";
import Contact from "./Details/Contact";

function App() {
  return (
    <>
      <HeaderCmp></HeaderCmp>
      <Skills></Skills>
      <Projects></Projects>
      <Testimonials></Testimonials>
      <About></About>
      <Contact></Contact>
      <FooterCmp></FooterCmp>
    </>
  );
}

export default App;
